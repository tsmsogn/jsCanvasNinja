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
    var Command = function () {
        this.initialize();
    }, p = Command.prototype;

    /**
     * initialize
     */
    p.initialize = function () {
        this.executeTasks = [];
        this.unexecuteTasks = [];
    };

    /**
     *
     * @param tasks
     */
    p.addExecuteTasks = function (tasks) {
        for (var i = 0; i < tasks.length; i++) {
            this.addExecuteTask(tasks[i]);
        }
    };

    /**
     *
     * @param task
     */
    p.addExecuteTask = function (task) {
        this.executeTasks.push(task);
    };

    /**
     * execute
     */
    p.execute = function () {
        for (var i = 0; i < this.executeTasks.length; i++) {
            this.executeTasks[i];
        }
    };

    /**
     *
     * @param tasks
     */
    p.addUnexecuteTasks = function (tasks) {
        for (var i = 0; i < tasks.length; i++) {
            this.addUnexecuteTask(tasks[i]);
        }
    };

    /**
     *
     * @param task
     */
    p.addUnexecuteTask = function (task) {
        this.unexecuteTasks.push(task);
    };

    /**
     * unexecute
     */
    p.unexecute = function () {
        for (var i = 0; i < this.unexecuteTasks.length; i++) {
            this.unexecuteTasks[i];
        }
    };

    jsCanvasNinja.Command = Command;

})();
