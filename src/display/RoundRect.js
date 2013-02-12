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

    /**
     *
     * @param x
     * @param y
     * @param width
     * @param height
     * @param radius
     * @param color
     * @constructor
     */
    var RoundRect = function (x, y, width, height, radius, color) {
        this.initialize(x, y, width, height, radius, color);
    }, p = RoundRect.prototype = new createjs.Shape();

    /**
     *
     * @param x
     * @param y
     * @param width
     * @param height
     * @param radius
     * @param color
     */
    p.initialize = function (x, y, width, height, radius, color) {
        x = (!isNaN(x)) ? x : 0;
        y = (!isNaN(y)) ? y : 0;
        color = color || 'rgba(255, 255, 255, 1)';

        this.width = width;
        this.height = height;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
        this.radius = radius;
        this.color = color;
        this._center = false;

        this.graphics = new createjs.Graphics().beginFill(this.color).drawRoundRect(0, 0, this.width, this.height, this.radius).endFill();
    };

    /**
     *
     * @return {*}
     */
    p.clone = function () {
        var o = new RoundRect(this.x, this.y, this.width, this.height, this.radius, this.color);
        this.cloneProps(o);
        return o;
    };

    /**
     *
     * @param color
     */
    p.setColor = function (color) {
        this.color = color;
        this.graphics.clear().beginFill(this.color).drawRoundRect(0, 0, this.width, this.height, this.radius).endFill();
    };

    /**
     *
     * @return {*}
     */
    p.getColor = function () {
        return this.color;
    };

    jsCanvasNinja.RoundRect = RoundRect;

})();
