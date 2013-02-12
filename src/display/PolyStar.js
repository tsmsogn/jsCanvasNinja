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
     * @param radius
     * @param sides
     * @param pointSize
     * @param angle
     * @param color
     * @constructor
     */
    var PolyStar = function (x, y, radius, sides, pointSize, angle, color) {
        this.initialize(x, y, radius, sides, pointSize, angle, color);
    }, p = PolyStar.prototype = new createjs.Shape();

    /**
     *
     * @param x
     * @param y
     * @param radius
     * @param sides
     * @param pointSize
     * @param angle
     * @param color
     */
    p.initialize = function (x, y, radius, sides, pointSize, angle, color) {
        x = (!isNaN(x)) ? x : 0;
        y = (!isNaN(y)) ? y : 0;
        radius = (!isNaN(radius)) ? radius : 0;
        color = color || 'rgba(255, 255, 255, 1)';

        this.width = radius * 2;
        this.height = radius * 2;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
        this.pointSize = pointSize;
        this.angle = angle;
        this.color = color;
        this._center = true;

        this.graphics = new createjs.Graphics().beginFill(this.color).drawPolyStar(0, 0, this.radius, this.sides, this.pointSize, this.angle).endFill();
    };

    /**
     *
     * @return {*}
     */
    p.clone = function () {
        var o = new PolyStar(this.x, this.y, this.radius, this.sides, this.pointSize, this.angle, this.color);
        this.cloneProps(o);
        return o;
    };

    /**
     *
     * @param color
     */
    p.setColor = function (color) {
        this.color = color;
        this.graphics.clear().beginFill(this.color).drawPolyStar(0, 0, this.radius, this.sides, this.pointSize, this.angle).endFill();
    };

    /**
     *
     * @return {*}
     */
    p.getColor = function () {
        return this.color;
    };

    jsCanvasNinja.PolyStar = PolyStar;

})();
