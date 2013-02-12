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
     * @param imageOrUri
     * @param x
     * @param y
     * @param width
     * @param height
     * @constructor
     */
    var Bitmap = function (imageOrUri, x, y, width, height) {
        this.initialize(imageOrUri, x, y, width, height);
    }, p = Bitmap.prototype = new createjs.Bitmap();

    p.Bitmap_initalize = p.initialize;

    /**
     *
     * @param imageOrUri
     * @param x
     * @param y
     * @param width
     * @param height
     */
    p.initialize = function (imageOrUri, x, y, width, height) {
        this.Bitmap_initalize(imageOrUri);

        x = (!isNaN(x)) ? x : 0;
        y = (!isNaN(y)) ? y : 0;

        this.width = imageOrUri.width;
        this.height =  imageOrUri.height;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
        this._center = Boolean(false);
    };

    /**
     *
     * @return {*}
     */
    p.clone = function () {
        var o = new Bitmap(this.image, this.x, this.y, this.width, this.height);
        if (this.sourceRect) {
            o.sourceRect = this.sourceRect.clone();
        }
        this.cloneProps(o);
        return o;
    };

    jsCanvasNinja.Bitmap = Bitmap;

})();
