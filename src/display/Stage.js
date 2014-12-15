/**
 * Copyright (c) 2013 Toshimasa Oguni
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
this.jsCanvasNinja = this.jsCanvasNinja || {};

(function () {

    var Stage = function (canvas, options) {
        this.initialize(canvas, options);
    }, p = Stage.prototype = new createjs.Stage();

    // @TODO Whether override another methods(addChild, addChildAt, removeAllChildren, removeChild, removeChildAt) for undo and redo?

    p.MODES_MAP = ['select', 'insert'];
    p._buffers = [];
    p.Stage_initialize = p.initialize;

    /**
     *
     * @param canvas
     * @param options
     */
    p.initialize = function (canvas, options) {
        this.Stage_initialize(canvas);
        this._options = options || {};
        // Initialize
        this.setMode(this._options.mode);
        this.setScaleType(Boolean(this._options.scaleType));
        this.didCommands = [];
        this.undidCommands = [];
        this._target = null;
        this._frame = (this._options.frame) ? this._options.frame : new jsCanvasNinja.Frame();
    };

    p.Stage_toDataURL = p.toDataURL;

    /**
     *
     * @param backgroundColor
     * @param mimeType
     * @return {*}
     */
    p.toDataURL = function (backgroundColor, mimeType) {
        if (typeof this.beforeToDataURL === 'function') {
            // @TODO Review args
            this.beforeToDataURL();
        }
        var dataURL = this.Stage_toDataURL(backgroundColor, mimeType);
        if (typeof this.afterToDataURL === 'function') {
            // @TODO Review args
            this.afterToDataURL();
        }
        return dataURL;
    };

    /**
     *
     * @private
     */
    p._createHistory = function () {

        this.push((function (self) {
            var children = [];
            for (var i = 0; i < self.getNumChildren(); i++) {
                var child = self.getChildAt(i);
                if (!self._frame || !self._frame.isElement(child)) {
                    children.push(child.clone());
                }
            }

            var command = new jsCanvasNinja.Command();
            command.children = children;
            command.execute = function () {
                self.removeAllChildren();
                for (var i = 0; i < this.children.length; i++) {
                    var child = this.children[i].clone();
                    self.bindToframe(self.addChild(child));
                }
            };
            command.unexecute = function () {
                self.removeAllChildren();
                if (self.canUndo()) {
                    for (var i = 0; i < self.didCommands[self.didCommands.length - 1].children.length; i++) {
                        var child = self.didCommands[self.didCommands.length - 1].children[i].clone();
                        self.bindToframe(self.addChild(child));
                    }
                }
            };
            return command;
        })(this));

        if (typeof  this.onSave === 'function') {
            this.onSave({canUndo:this.canUndo(), canRedo:this.canRedo()});
        }
    };

    p.Stage_update = p.update;

    /**
     *
     * @param save
     */
    p.update = function (save) {
        this._updateFrame();
        this.Stage_update();
        if (save) {
            this._createHistory();
        }
    };

    /**
     *
     * @param e
     */
    p.onMouseDown = function (e) {
        if (this.getMode() === 'insert') {
            if (typeof this.onStageMouseDown === 'function') {
                this.onStageMouseDown(e);
            }
        } else {
            var target = this.getObjectUnderPoint(e.stageX, e.stageY);
            if (target && (!this._frame || !this._frame.isElement(target))) {
                this.setTarget(target);
                this._createFrame();
                if (typeof this.onSelect === 'function') {
                    this.onSelect(target, e);
                }
            }
        }
    };

    /**
     *
     * @param type
     */
    p.setMode = function (type) {
        this.mode = type === null ? 'select' : isNaN(type) ? type : this.MODES_MAP[type];
    };

    /**
     *
     * @return {*}
     */
    p.getMode = function () {
        return this.mode;
    };

    /**
     *
     * @param scaleType Indicates whether keep the aspect ratio.
     */
    p.setScaleType = function (scaleType) {
        this._scaleType = Boolean(scaleType);
    };

    /**
     *
     * @return {Boolean}
     */
    p.getScaleType = function () {
        return Boolean(this._scaleType);
    };

    /**
     *
     * @param target
     */
    p.setTarget = function (target) {
        this._target = target;
    };

    /**
     *
     * @return {*}
     */
    p.getTarget = function () {
        return this._target;
    };

    /**
     *
     * @private
     */
    p._removeFrame = function () {
        if (this._frame) {
            var elements = this._frame.getElements();
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                this.removeChild(element);
            }
            this._frame = null;
        }
    };

    /**
     *
     * @private
     */
    p._createFrame = function () {

        var object = this.getTarget();

        this._removeFrame();

        if (object) {

            var before = {rotation:object.rotation, scaleX:object.scaleX, scaleY:object.scaleY};
            this._frame = new jsCanvasNinja.Frame(this.getScaleType());
            var elements = this._frame.getElements();

            for (var i = 0; i < elements.length; i++) {

                var element = elements[i];

                // Implements event listener
                (function (target, self) {

                    target.onPress = function (e) {

                        var name = target.name;

                        var offset = {
                            x:target.x - e.stageX,
                            y:target.y - e.stageY
                        };

                        e.onMouseMove = function (evt) {

                            if (jsCanvasNinja.Utility.isCentralCoordinate(object)) {

                                // @TODO Keep aspect ratio
                                switch (name) {
                                    case 'TOP_LEFT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D();
                                        m1.translate(evt.stageX + offset.x - object.x, evt.stageY + offset.y - object.y);
                                        m1.rotate(-object.rotation * Math.PI / 180);
                                        object.scaleX = ((m1.tx) ? -m1.tx / Math.abs(m1.tx) : 1) * Math.max.apply(null, [Math.abs(m1.tx), Math.abs(m1.ty)]) / object.width * 2;
                                        object.scaleY = ((m1.ty) ? -m1.ty / Math.abs(m1.ty) : 1) * Math.max.apply(null, [Math.abs(m1.tx), Math.abs(m1.ty)]) / object.height * 2;
                                        break;
                                    case 'TOP_LEFT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D();
                                        m1.translate(evt.stageX + offset.x - object.x, evt.stageY + offset.y - object.y);
                                        m1.rotate(-object.rotation * Math.PI / 180);
                                        object.scaleX = -m1.tx / object.width * 2;
                                        object.scaleY = -m1.ty / object.height * 2;
                                        break;
                                    case 'TOP_RIGHT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D();
                                        m1.translate(evt.stageX + offset.x - object.x, evt.stageY + offset.y - object.y);
                                        m1.rotate(-object.rotation * Math.PI / 180);
                                        object.scaleX = ((m1.tx) ? m1.tx / Math.abs(m1.tx) : 1) * Math.max.apply(null, [Math.abs(m1.tx), Math.abs(m1.ty)]) / object.width * 2;
                                        object.scaleY = ((m1.ty) ? -m1.ty / Math.abs(m1.ty) : 1) * Math.max.apply(null, [Math.abs(m1.tx), Math.abs(m1.ty)]) / object.height * 2;
                                        break;
                                    case 'TOP_RIGHT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D();
                                        m1.translate(evt.stageX + offset.x - object.x, evt.stageY + offset.y - object.y);
                                        m1.rotate(-object.rotation * Math.PI / 180);
                                        object.scaleX = m1.tx / object.width * 2;
                                        object.scaleY = -m1.ty / object.height * 2;
                                        break;
                                    case 'BOTTOM_RIGHT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D();
                                        m1.translate(evt.stageX + offset.x - object.x, evt.stageY + offset.y - object.y);
                                        m1.rotate(-object.rotation * Math.PI / 180);
                                        object.scaleX = ((m1.tx) ? m1.tx / Math.abs(m1.tx) : 1) * Math.max.apply(null, [Math.abs(m1.tx), Math.abs(m1.ty)]) / object.width * 2;
                                        object.scaleY = ((m1.ty) ? m1.ty / Math.abs(m1.ty) : 1) * Math.max.apply(null, [Math.abs(m1.tx), Math.abs(m1.ty)]) / object.height * 2;
                                        break;
                                    case 'BOTTOM_RIGHT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D();
                                        m1.translate(evt.stageX + offset.x - object.x, evt.stageY + offset.y - object.y);
                                        m1.rotate(-object.rotation * Math.PI / 180);
                                        object.scaleX = m1.tx / object.width * 2;
                                        object.scaleY = m1.ty / object.height * 2;
                                        break;
                                    case 'BOTTOM_LEFT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D();
                                        m1.translate(evt.stageX + offset.x - object.x, evt.stageY + offset.y - object.y);
                                        m1.rotate(-object.rotation * Math.PI / 180);
                                        object.scaleX = ((m1.tx) ? -m1.tx / Math.abs(m1.tx) : 1) * Math.max.apply(null, [Math.abs(m1.tx), Math.abs(m1.ty)]) / object.width * 2;
                                        object.scaleY = ((m1.ty) ? m1.ty / Math.abs(m1.ty) : 1) * Math.max.apply(null, [Math.abs(m1.tx), Math.abs(m1.ty)]) / object.height * 2;
                                        break;
                                    case 'BOTTOM_LEFT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D();
                                        m1.translate(evt.stageX + offset.x - object.x, evt.stageY + offset.y - object.y);
                                        m1.rotate(-object.rotation * Math.PI / 180);
                                        object.scaleX = -m1.tx / object.width * 2;
                                        object.scaleY = m1.ty / object.height * 2;
                                        break;
                                    case 'TOP_LEFT_HANDLE_FOR_ROTATION':
                                    case 'TOP_RIGHT_HANDLE_FOR_ROTATION':
                                    case 'BOTTOM_RIGHT_HANDLE_FOR_ROTATION':
                                    case 'BOTTOM_LEFT_HANDLE_FOR_ROTATION':
                                        var m2 = new createjs.Matrix2D(), m3 = new createjs.Matrix2D();
                                        // Get base point m2.tx, m2.ty
                                        m2.translate((name.match(new RegExp('LEFT'))) ? -object.width * object.scaleX * 0.5 : object.width * object.scaleX * 0.5, (name.match(new RegExp('TOP'))) ? -object.height * object.scaleY * 0.5 : object.height * object.scaleY * 0.5); // @TODO
                                        m2.rotate(object.rotation * Math.PI / 180);
                                        // Get next point
                                        m3.translate(evt.stageX + offset.x - object.x, evt.stageY + offset.y - object.y);
                                        m3.rotate(-Math.atan2(m2.ty, m2.tx));
                                        object.rotation += Math.atan2(m3.ty, m3.tx) * 180 / Math.PI;
                                        break;
                                    default :
                                        break;
                                }

                            } else {

                                // @TODO Keep aspect ratio
                                switch (name) {
                                    case 'TOP_LEFT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D(), m2 = new createjs.Matrix2D();
                                        // Matrix for bottomRight x, y
                                        m1.translate(object.width * object.scaleX, object.height * object.scaleY);
                                        m1.rotate(object.rotation * Math.PI / 180);
                                        m1.translate(object.x, object.y);
                                        m2.translate(evt.stageX + offset.x - m1.tx, evt.stageY + offset.y - m1.ty);
                                        m2.rotate(-object.rotation * Math.PI / 180);
                                        var scale = Math.max.apply(null, [Math.abs(m2.tx) / object.width, Math.abs(m2.ty) / object.height]); // @TODO
                                        object.scaleX = -((m2.tx) ? m2.tx / Math.abs(m2.tx) : 1) * scale;
                                        object.scaleY = -((m2.ty) ? m2.ty / Math.abs(m2.ty) : 1) * scale;
                                        var m3 = new createjs.Matrix2D();
                                        m3.translate(-object.width * object.scaleX, -object.height * object.scaleY);
                                        m3.rotate(object.rotation * Math.PI / 180);
                                        object.x = m3.tx + m1.tx;
                                        object.y = m3.ty + m1.ty;
                                        break;
                                    case 'TOP_LEFT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D(), m2 = new createjs.Matrix2D();
                                        // Matrix for bottomRight x, y
                                        m1.translate(object.width * object.scaleX, object.height * object.scaleY);
                                        m1.rotate(object.rotation * Math.PI / 180);
                                        m1.translate(object.x, object.y);
                                        m2.translate(evt.stageX + offset.x - m1.tx, evt.stageY + offset.y - m1.ty);
                                        m2.rotate(-object.rotation * Math.PI / 180);
                                        object.scaleX = -m2.tx / object.width;
                                        object.scaleY = -m2.ty / object.height;
                                        object.x = evt.stageX + offset.x;
                                        object.y = evt.stageY + offset.y;
                                        break;
                                    case 'TOP_RIGHT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D(), m2 = new createjs.Matrix2D(), m3 = new createjs.Matrix2D();
                                        // Matrix for bottomLeft x, y
                                        m1.translate(0, object.height * object.scaleY);
                                        m1.rotate(object.rotation * Math.PI / 180);
                                        m1.translate(object.x, object.y);
                                        // Matrix for next scaleX, scaleY
                                        m2.translate(evt.stageX + offset.x - m1.tx, evt.stageY + offset.y - m1.ty);
                                        m2.rotate(-object.rotation * Math.PI / 180);
                                        var scale = Math.max.apply(null, [Math.abs(m2.tx) / object.width, Math.abs(m2.ty) / object.height]); // @TODO
                                        object.scaleX = ((m2.tx) ? m2.tx / Math.abs(m2.tx) : 1) * scale;
                                        object.scaleY = -((m2.ty) ? m2.ty / Math.abs(m2.ty) : 1) * scale;
                                        m3.translate(0, -object.height * object.scaleY);
                                        m3.rotate(object.rotation * Math.PI / 180);
                                        object.x = m3.tx + m1.tx;
                                        object.y = m3.ty + m1.ty;
                                        break;
                                    case 'TOP_RIGHT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D(), m2 = new createjs.Matrix2D(), m3 = new createjs.Matrix2D();
                                        // Matrix for bottomLeft x, y
                                        m1.translate(0, object.height * object.scaleY);
                                        m1.rotate(object.rotation * Math.PI / 180);
                                        m1.translate(object.x, object.y);
                                        // Matrix for next scaleX, scaleY
                                        m2.translate(evt.stageX + offset.x - m1.tx, evt.stageY + offset.y - m1.ty);
                                        m2.rotate(-object.rotation * Math.PI / 180);
                                        // Matrix for next x, y
                                        m3.translate(0, m2.ty);
                                        m3.rotate(object.rotation * Math.PI / 180);
                                        object.scaleX = m2.tx / object.width;
                                        object.scaleY = -m2.ty / object.height;
                                        object.x = m3.tx + m1.tx;
                                        object.y = m3.ty + m1.ty;
                                        break;
                                    case 'BOTTOM_RIGHT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D();
                                        m1.translate(evt.stageX + offset.x - object.x, evt.stageY + offset.y - object.y);
                                        m1.rotate(-object.rotation * Math.PI / 180);
                                        var scale = Math.max.apply(null, [Math.abs(m1.tx) / object.width, Math.abs(m1.ty) / object.height]); // @TODO
                                        object.scaleX = ((m1.tx) ? m1.tx / Math.abs(m1.tx) : 1) * scale;
                                        object.scaleY = ((m1.ty) ? m1.ty / Math.abs(m1.ty) : 1) * scale;
                                        break;
                                    case 'BOTTOM_RIGHT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D();
                                        m1.translate(evt.stageX + offset.x - object.x, evt.stageY + offset.y - object.y);
                                        m1.rotate(-object.rotation * Math.PI / 180);
                                        object.scaleX = m1.tx / object.width;
                                        object.scaleY = m1.ty / object.height;
                                        break;
                                    case 'BOTTOM_LEFT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D(), m2 = new createjs.Matrix2D(), m3 = new createjs.Matrix2D();
                                        // Matrix for topRight x, y
                                        m1.translate(object.width * object.scaleX, 0);
                                        m1.rotate(object.rotation * Math.PI / 180);
                                        m1.translate(object.x, object.y);
                                        // Matrix for next scaleX, scaleY
                                        m2.translate(evt.stageX + offset.x - m1.tx, evt.stageY + offset.y - m1.ty);
                                        m2.rotate(-object.rotation * Math.PI / 180);
                                        var scale = Math.max.apply(null, [Math.abs(m2.tx) / object.width, Math.abs(m2.ty) / object.height]); // @TODO
                                        object.scaleX = -((m2.tx) ? m2.tx / Math.abs(m2.tx) : 1) * scale;
                                        object.scaleY = ((m2.ty) ? m2.ty / Math.abs(m2.ty) : 1) * scale;
                                        m3.translate(-object.width * object.scaleX, 0);
                                        m3.rotate(object.rotation * Math.PI / 180);
                                        object.x = m3.tx + m1.tx;
                                        object.y = m3.ty + m1.ty;
                                        break;
                                    case 'BOTTOM_LEFT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                        var m1 = new createjs.Matrix2D(), m2 = new createjs.Matrix2D(), m3 = new createjs.Matrix2D();
                                        // Matrix for topRight x, y
                                        m1.translate(object.width * object.scaleX, 0);
                                        m1.rotate(object.rotation * Math.PI / 180);
                                        m1.translate(object.x, object.y);
                                        // Matrix for next scaleX, scaleY
                                        m2.translate(evt.stageX + offset.x - m1.tx, evt.stageY + offset.y - m1.ty);
                                        m2.rotate(-object.rotation * Math.PI / 180);
                                        // Matrix for next x, y
                                        m3.translate(m2.tx, 0);
                                        m3.rotate(object.rotation * Math.PI / 180);
                                        object.scaleX = -m2.tx / object.width;
                                        object.scaleY = m2.ty / object.height;
                                        object.x = m3.tx + m1.tx;
                                        object.y = m3.ty + m1.ty;
                                        break;
                                    case 'TOP_LEFT_HANDLE_FOR_ROTATION':
                                    case 'TOP_RIGHT_HANDLE_FOR_ROTATION':
                                    case 'BOTTOM_RIGHT_HANDLE_FOR_ROTATION':
                                    case 'BOTTOM_LEFT_HANDLE_FOR_ROTATION':
                                        // @TODO
                                        // Get center point m1.tx, m1.ty
                                        var m1 = new createjs.Matrix2D(), m2 = new createjs.Matrix2D(), m3 = new createjs.Matrix2D();
                                        m1.translate(object.width * object.scaleX * 0.5, object.height * object.scaleY * 0.5);
                                        m1.rotate(object.rotation * Math.PI / 180);
                                        m1.translate(object.x, object.y);
                                        // Get base point m2.tx, m2.ty
                                        m2.translate((name.match(new RegExp('LEFT'))) ? -object.width * object.scaleX * 0.5 : object.width * object.scaleX * 0.5, (name.match(new RegExp('TOP'))) ? -object.height * object.scaleY * 0.5 : object.height * object.scaleY * 0.5); // @TODO
                                        m2.rotate(object.rotation * Math.PI / 180);
                                        // Get next point
                                        m3.translate(evt.stageX + offset.x - m1.tx, evt.stageY + offset.y - m1.ty);
                                        m3.rotate(-Math.atan2(m2.ty, m2.tx));
                                        // Rotate and translate
                                        var m4 = new createjs.Matrix2D(), m5 = new createjs.Matrix2D();
                                        m4.translate(object.width * 0.5 * object.scaleX, object.height * 0.5 * object.scaleY);
                                        m4.rotate(object.rotation * Math.PI / 180);
                                        m5.translate(-m4.tx, -m4.ty);
                                        m5.rotate(Math.atan2(m3.ty, m3.tx));
                                        object.x += Math.round(m5.tx + m4.tx);
                                        object.y += Math.round(m5.ty + m4.ty);
                                        object.rotation += Math.atan2(m3.ty, m3.tx) * 180 / Math.PI;
                                        break;
                                    default :
                                        break;
                                }

                            }

                            // Update frame
                            self._updateFrame();
                        }

                        e.onMouseUp = function (evt) {
                            if (before.rotation !== object.rotation || before.scaleX !== object.scaleX || before.scaleY !== object.scaleY) {
                                self.update(true);
                            }
                        }

                    }

                })(element, this);

                this.addChild(element);
            }

            this._updateFrame();
        }

    };

    /**
     *
     * @private
     */
    p._updateFrame = function () {
        if (this._frame && this.getTarget()) {
            this._frame.update.call(this.getTarget(), this._frame.getElements());
        }
    };

    /**
     *
     * @param target
     * @return {*}
     */
    p.bindToframe = function (target) {
        if (target == null) return target;
        (function (target, self) {
            target.onPress = function (e) {
                var point = new createjs.Point(target.x, target.y);
                var offset = {x:point.x - e.stageX, y:point.y - e.stageY};
                e.onMouseMove = function (evt) {
                    target.x = evt.stageX + offset.x;
                    target.y = evt.stageY + offset.y;
                    if (self.getMode() === 'select') {
                        self._createFrame();
                    }
                };
                e.onMouseUp = function (evt) {
                    // @TODO Implement callback
                    if (point.x !== target.x || point.y !== target.y) {
                        self.update(true);
                    }
                }
            }
            return target;
        })(target, this);
    };

    /**
     *
     * @param target
     * @return {Boolean}
     */
    p.sendBackward = function (target) {
        target = target || this.getTarget();
        if (target) {
            var index = this.getChildIndex(target);
            this.addChildAt(target, index - 1);
            if (this.getChildIndex(target)) {
                return true;
            }
        }
        return false;
    };

    /**
     *
     * @param target
     */
    p.sendToBack = function (target) {
        target = target || this.getTarget();
        while (this.sendBackward(target)) {
        }
    };

    /**
     *
     * @param target
     * @return {Boolean}
     */
    p.bringForward = function (target) {
        target = target || this.getTarget();
        if (target) {
            var index = this.getChildIndex(target);
            if (!this._frame.isElement(this.getChildAt(index + 1))) {
                this.addChildAt(target, index + 1);
                return true;
            }
        }
        return false;
    };

    /**
     *
     * @param target
     */
    p.bringToFront = function (target) {
        target = target || this.getTarget();
        while (this.bringForward(target)) {
        }
    };

    /**
     *
     * @param target
     */
    p.delete = function (target) {
        target = target || this.getTarget();
        if (target) {
            this.removeChild(target);
            this.setTarget(null);
            this._removeFrame();
        }
    };

    /**
     * deleteAll
     */
    p.deleteAll = function () {
        this.removeAllChildren();
    };

    /**
     *
     * @return {Boolean}
     */
    p.canUndo = function () {
        return Boolean(this.didCommands.length > 0);
    };

    /**
     *
     * @return {Boolean}
     */
    p.canRedo = function () {
        return Boolean(this.undidCommands.length > 0);
    };

    /**
     *
     * @param command
     */
    p.push = function (command) {
        this.didCommands.push(command);
        // @TODO
        this.undidCommands = [];
    };

    /**
     * undo
     */
    p.undo = function () {
        if (this.canUndo()) {
            var command = this.didCommands.pop();
            this.undidCommands.push(command);
            if (typeof command.unexecute === 'function') {
                command.unexecute();
            }
            if (typeof this.onUndo === 'function') {
                // @TODO Review args
                this.onUndo({canUndo:this.canUndo(), canRedo:this.canRedo()});
            }
        }
    };

    /**
     * redo
     */
    p.redo = function () {
        if (this.canRedo()) {
            var command = this.undidCommands.pop();
            this.didCommands.push(command);
            if (typeof command.execute === 'function') {
                command.execute();
            }
            if (typeof this.onRedo === 'function') {
                // @TODO Review args
                this.onRedo({canUndo:this.canUndo(), canRedo:this.canRedo()});
            }
        }
    };

    jsCanvasNinja.Stage = Stage;

})();
