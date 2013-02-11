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
     * @param text
     * @param font
     * @param color
     * @param x
     * @param y
     * @constructor
     */
    var Text = function (text, font, color, x, y) {
        this.initialize(text, font, color, x, y);
    }, p = Text.prototype = new createjs.Text();

    p.Text_initalize = p.initialize;

    /**
     *
     * @param text
     * @param font
     * @param color
     * @param x
     * @param y
     */
    p.initialize = function (text, font, color, x, y) {
        this.Text_initalize(text, font, color);

        x = (!isNaN(x)) ? x : 0;
        y = (!isNaN(y)) ? y : 0;

        var width = (this.lineWidth || this.getMeasuredWidth()) * this.getMeasuredLineHeight() / this.getMeasuredHeight();
        var height = this.getMeasuredHeight();

        this.width = width;
        this.height = height;
        this.x = x - width * 0.5;
        this.y = y - height * 0.5;
        this._center = false;
        this.hitArea = new createjs.Shape();
        this.hitArea.graphics.beginFill("#000").drawRect(0, 0, width, height).endFill();
    };

    /**
     *
     * @return {*}
     */
    p.clone = function () {
        var o = new Text(this.text, this.font, this.color, this.x, this.y);
        this.cloneProps(o);
        return o;
    };

    /**
     *
     * @param color
     */
    p.setColor = function (color) {
        this.color = color;
    };

    /**
     *
     * @return {*}
     */
    p.getColor = function () {
        return this.color;
    };

    /**
     *
     * @param text
     */
    p.setText = function (text) {
        this.text = text;
        this.width = (this.lineWidth || this.getMeasuredWidth()) * this.getMeasuredLineHeight() / this.getMeasuredHeight();
        this.height = this.getMeasuredHeight();
    };

    /**
     *
     * @return {*}
     */
    p.getText = function () {
        return this.text;
    };

    jsCanvasNinja.Text = Text;

})();
