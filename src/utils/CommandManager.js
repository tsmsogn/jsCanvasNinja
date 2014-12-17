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
     * @constructor
     */
    var CommandManager = function () {
        this.initialize();
    }, p = CommandManager.prototype;

    /**
     * initialize
     */
    p.initialize = function () {
        this.didCommands = [];
        this.undidCommands = [];
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
     *
     */
    p.undo = function () {
        if (this.canUndo()) {
            var command = this.didCommands.pop();
            this.undidCommands.push(command);
            if (typeof command.unexecute === 'function') {
                command.unexecute();
            }
        }
    };

    /**
     * redo
     *
     */
    p.redo = function () {
        if (this.canUndo()) {
            var command = this.undidCommands.pop();
            this.didCommands.push(command);
            if (typeof command.execute === 'function') {
                command.execute();
            }
        }
    };

    jsCanvasNinja.CommandManager = CommandManager;

})();
