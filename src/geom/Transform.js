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

    var Transform = function () {
        throw 'Transform cannot be instantiated';
    };

    /**
     *
     * @param rotation
     */
    Transform.rotate = function (rotation) {
        if (!jsCanvasNinja.Utility.isCentralCoordinate(this)) {
            var m1 = new createjs.Matrix2D(), m2 = new createjs.Matrix2D();
            m1.translate(this.width * 0.5 * this.scaleX, this.height * 0.5 * this.scaleY);
            m1.rotate(this.rotation * Math.PI / 180);
            m2.translate(-m1.tx, -m1.ty);
            m2.rotate((rotation - this.rotation) * Math.PI / 180);
            this.x += Math.round(m2.tx + m1.tx);
            this.y += Math.round(m2.ty + m1.ty);
        }
        this.rotation = rotation;
    };

    /**
     *
     * @param scale
     */
    Transform.scale = function (scale) {
        if (!jsCanvasNinja.Utility.isCentralCoordinate(this)) {
            var m1 = new createjs.Matrix2D(), m2 = new createjs.Matrix2D();
            // Get center position
            m1.translate(this.width * this.scaleX * 0.5, this.height * this.scaleY * 0.5);
            m1.rotate(this.rotation * Math.PI / 180);
            m1.translate(this.x, this.y);
            // Get next position
            m2.translate(-this.width * scale.scaleX * 0.5, -this.height * scale.scaleY * 0.5);
            m2.rotate(this.rotation * Math.PI / 180);
            m2.translate(m1.tx, m1.ty);
            this.x = m2.tx;
            this.y = m2.ty;
        }
        this.scaleX = scale.scaleX;
        this.scaleY = scale.scaleY;
    };

    jsCanvasNinja.Transform = Transform;

})();
