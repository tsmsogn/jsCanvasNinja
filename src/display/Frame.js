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

    var Frame = function (scaleType, options) {
        this.initialize(scaleType, options);
    }, p = Frame.prototype;

    /**
     *
     * @param scaleType Indicates whether keep aspect ratio resize frame.
     * @param options
     */
    p.initialize = function (scaleType, options) {
        this._options = options || {};
        this._elements = [];

        var color = this._options.color || 'rgba(125, 125, 125, 0.6)';
        var radius = this._options.radius || 10;

        // Create rotation circles
        var rotationCircles = ['TOP_LEFT_HANDLE_FOR_ROTATION', 'TOP_RIGHT_HANDLE_FOR_ROTATION', 'BOTTOM_RIGHT_HANDLE_FOR_ROTATION', 'BOTTOM_LEFT_HANDLE_FOR_ROTATION'];
        for (var i = 0; i < rotationCircles.length; i++) {
            var name = rotationCircles[i];
            var element = new createjs.Shape(new createjs.Graphics().beginFill('rgba(255, 0, 0, 1)').drawCircle(0, 0, radius + 5).endFill());
            element.name = name;
            this._elements.push(element);
        }

        // Create resize circles
        var resizeCircles = (scaleType) ? ['TOP_LEFT_HANDLE_FOR_KEEP_ASPECT_RESIZE', 'TOP_RIGHT_HANDLE_FOR_KEEP_ASPECT_RESIZE', 'BOTTOM_RIGHT_HANDLE_FOR_KEEP_ASPECT_RESIZE', 'BOTTOM_LEFT_HANDLE_FOR_KEEP_ASPECT_RESIZE'] : ['TOP_LEFT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE', 'TOP_RIGHT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE', 'BOTTOM_RIGHT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE', 'BOTTOM_LEFT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE'];
        for (var i = 0; i < resizeCircles.length; i++) {
            var name = resizeCircles[i];
            var element = new createjs.Shape(new createjs.Graphics().beginFill('rgba(255, 255, 255, 1)').drawCircle(0, 0, radius).endFill());
            element.name = name;
            this._elements.push(element);
        }

    };

    /**
     *
     * @param target
     * @return {Boolean}
     */
    p.isElement = function (target) {
        var elements = this.getElements();
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (element.id === target.id) {
                return true;
            }
        }
        return false;
    };

    /**
     *
     * @return {Boolean}
     */
    p.exists = function () {
        // @TODO
        return this._elements.length > 0;
    };

    /**
     *
     * @param elements
     */
    p.update = function (elements) {

        if (elements.length > 0) {

            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                var name = element.name;

                var m1 = new createjs.Matrix2D();

                switch (jsCanvasNinja.Utility.isCentralCoordinate(this)) {
                    case true:
                        switch (name) {
                            case 'TOP_LEFT_HANDLE_FOR_ROTATION':
                            case 'TOP_LEFT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                            case 'TOP_LEFT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                m1.translate(-this.width * 0.5 * this.scaleX, -this.height * 0.5 * this.scaleY);
                                m1.rotate(this.rotation * Math.PI / 180);
                                m1.prependTransform(this.x, this.y, 1, 1, 0, 0, 0, 0, 0);
                                break;
                            case 'TOP_RIGHT_HANDLE_FOR_ROTATION':
                            case 'TOP_RIGHT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                            case 'TOP_RIGHT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                m1.translate(this.width * 0.5 * this.scaleX, -this.height * 0.5 * this.scaleY);
                                m1.rotate(this.rotation * Math.PI / 180);
                                m1.prependTransform(this.x, this.y, 1, 1, 0, 0, 0, 0, 0);
                                break;
                            case 'BOTTOM_RIGHT_HANDLE_FOR_ROTATION':
                            case 'BOTTOM_RIGHT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                            case 'BOTTOM_RIGHT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                m1.translate(this.width * 0.5 * this.scaleX, this.height * 0.5 * this.scaleY);
                                m1.rotate(this.rotation * Math.PI / 180);
                                m1.prependTransform(this.x, this.y, 1, 1, 0, 0, 0, 0, 0);
                                break;
                            case 'BOTTOM_LEFT_HANDLE_FOR_ROTATION':
                            case 'BOTTOM_LEFT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                            case 'BOTTOM_LEFT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                m1.translate(-this.width * 0.5 * this.scaleX, this.height * 0.5 * this.scaleY);
                                m1.rotate(this.rotation * Math.PI / 180);
                                m1.prependTransform(this.x, this.y, 1, 1, 0, 0, 0, 0, 0);
                                break;
                            default:
                                break;
                        }
                        break;
                    case false:
                        switch (name) {
                            case 'TOP_LEFT_HANDLE_FOR_ROTATION':
                            case 'TOP_LEFT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                            case 'TOP_LEFT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                m1.appendTransform(this.x, this.y, 1, 1, 0, 0, 0, 0, 0);
                                break;
                            case 'TOP_RIGHT_HANDLE_FOR_ROTATION':
                            case 'TOP_RIGHT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                            case 'TOP_RIGHT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                m1.translate(this.width * this.scaleX, 0);
                                m1.rotate(this.rotation * Math.PI / 180);
                                m1.prependTransform(this.x, this.y, 1, 1, 0, 0, 0, 0, 0);
                                break;
                            case 'BOTTOM_RIGHT_HANDLE_FOR_ROTATION':
                            case 'BOTTOM_RIGHT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                            case 'BOTTOM_RIGHT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                m1.translate(this.width * this.scaleX, this.height * this.scaleY);
                                m1.rotate(this.rotation * Math.PI / 180);
                                m1.prependTransform(this.x, this.y, 1, 1, 0, 0, 0, 0, 0);
                                break;
                            case 'BOTTOM_LEFT_HANDLE_FOR_ROTATION':
                            case 'BOTTOM_LEFT_HANDLE_FOR_KEEP_ASPECT_RESIZE':
                            case 'BOTTOM_LEFT_HANDLE_FOR_NON_KEEP_ASPECT_RESIZE':
                                m1.translate(0, this.height * this.scaleY);
                                m1.rotate(this.rotation * Math.PI / 180);
                                m1.prependTransform(this.x, this.y, 1, 1, 0, 0, 0, 0, 0);
                                break;
                            default:
                                break;
                        }
                        break;
                    default :
                        break;
                }

                m1.decompose(element);
            }
        }

    };

    /**
     *
     * @return {Array}
     */
    p.getElements = function () {
        return this._elements;
    };

    jsCanvasNinja.Frame = Frame;

})();
