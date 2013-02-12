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

    var Utility = function () {
        throw 'Utility cannot be instantiated';
    };

    Utility._CENTER = 1;

    /**
     *
     * @param target
     * @return {*}
     */
    Utility.isText = function (target) {
        return (target) ? target.hasOwnProperty('text') : false; // @TODO Check another property
    };

    /**
     *
     * @param target
     * @return {*}
     */
    Utility.hasColor = function (target) {
        return (target) ? target.hasOwnProperty('color') : false; // @TODO Check another property
    };

    /**
     *
     * @param target
     * @return {*}
     */
    Utility.hasHeight = function (target) {
        if (!target) return;
        return target.hasOwnProperty('height') && !isNaN(target.height);
    };

    /**
     *
     * @param target
     * @return {*}
     */
    Utility.hasWidth = function (target) {
        if (!target) return;
        return target.hasOwnProperty('width') && !isNaN(target.width);
    };

    /**
     *
     * @param target
     * @return {Boolean|*}
     */
    Utility.isCentralCoordinate = function (target) {
        return (target) ? target.hasOwnProperty('_type') && Boolean(this._CENTER & target._type) : false; // @TODO Check another property
    };

    jsCanvasNinja.Utility = Utility;

})();
