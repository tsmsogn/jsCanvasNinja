describe("jsCanvasNinja.Stage", function () {
    var stage;

    beforeEach(function () {
        stage = new jsCanvasNinja.Stage();
    });

    it("should have setter/getter mode", function () { // @todo
        stage.setMode('foo');
        expect(stage.getMode()).toEqual('foo');
        stage.setMode(0);
        expect(stage.getMode()).toEqual('select');
        stage.setMode(1);
        expect(stage.getMode()).toEqual('insert');
    });

    describe("toDataURL()", function () {

        it("should not trigger beforeToDataURL when it's not function.", function () {
            pending();
        });

        it("should trigger beforeToDataURL before Stage_toDataURL().", function () {
            var count = 0;

            stage.beforeToDataURL = function () {
                count = 1;
            }
            spyOn(stage, 'Stage_toDataURL').and.callFake(function () {
                count = 2;
            });

            spyOn(stage, 'beforeToDataURL').and.callThrough();

            stage.toDataURL();

            expect(stage.beforeToDataURL).toHaveBeenCalled();
            expect(count).toBe(2);
        });

        it("should not trigger afterToDataURL when it's not function.", function () {
            pending();
        });

        it("should trigger afterToDataURL after Stage_toDataUR().", function () {
            var count = 0;

            stage.afterToDataURL = function () {
                count = 1;
            }
            spyOn(stage, 'Stage_toDataURL').and.callFake(function () {
                count = 2;
            });

            spyOn(stage, 'afterToDataURL').and.callThrough();

            stage.toDataURL();

            expect(stage.afterToDataURL).toHaveBeenCalled();
            expect(count).toBe(1);
        });

    });

    describe("update()", function () {

        it("should not trigger _createHistory() when argument is not truth.", function () {
            spyOn(stage, '_createHistory');
            stage.update();
            expect(stage._createHistory).not.toHaveBeenCalled();
        });

        it("should trigger _createHistory() when argument is truth.", function () {
            spyOn(stage, '_createHistory');
            stage.update(true);
            expect(stage._createHistory).toHaveBeenCalled();
        });

        it("should trigger _updateFrame(), Stage_update() and _createHistory() with right order.", function () {
            var count = 0;

            spyOn(stage, '_updateFrame').and.callFake(function () {
                count = 0;
            });
            spyOn(stage, 'Stage_update').and.callFake(function () {
                count++;
            });
            spyOn(stage, '_createHistory').and.callFake(function () {
                count *= 2;
            });

            stage.update(true);

            expect(stage._updateFrame.calls.count()).toEqual(1);
            expect(stage.Stage_update.calls.count()).toEqual(1);
            expect(stage._createHistory.calls.count()).toEqual(1);
            expect(count).toEqual(2);
        });

    });

    describe("canUndo()", function () {

        it("should return false when there are not anything to undo.", function () {
            expect(stage.canUndo()).toBeFalsy();

            stage.update(true);
            stage.undo();
            expect(stage.canUndo()).toBeFalsy();
        });

        it("should return true when there are something to undo.", function () {
            stage.update(true);
            expect(stage.canUndo()).toBeTruthy();
        });

    });

    describe("canRedo()", function () {

        it("should return false when there are not anything to redo.", function () {
            expect(stage.canRedo()).toBeFalsy();

            stage.update(true);
            stage.undo();
            stage.redo();
            expect(stage.canRedo()).toBeFalsy();
        });

        it("should return true when there are something to redo.", function () {
            stage.update(true);
            stage.undo();
            expect(stage.canRedo()).toBeTruthy();
        });

    });

    describe("undo()", function () {

        it("should not trigger onUndo when it's not function.", function () {
            pending();
        });

        it("should trigger onUndo.", function () {
            stage.onUndo = function () {
            };
            spyOn(stage, 'onUndo');

            stage.update(true);
            stage.undo();

            expect(stage.onUndo).toHaveBeenCalledWith({canRedo: true, canUndo: false});
        });

        it("should pop command from 'didCommands', then trigger it's unexecute() and push to 'undidCommands'.", function () {
            stage.update(true);
            stage.update(true);

            expect(stage.didCommands.length).toEqual(2);
            expect(stage.undidCommands.length).toEqual(0);

            var command1 = stage.didCommands[0];
            var command2 = stage.didCommands[1];

            spyOn(command2, 'unexecute');
            stage.undo();

            expect(stage.didCommands.length).toEqual(1);
            expect(stage.undidCommands.length).toEqual(1);
            expect(stage.didCommands[0]).toBe(command1);
            expect(stage.undidCommands[0]).toBe(command2);

            expect(command2.unexecute).toHaveBeenCalled();
        });

    });

    describe("redo()", function () {

        it("should not trigger onRedo when it's not function.", function () {
            pending();
        });

        it("should trigger onRedo.", function () {
            stage.onRedo = function () {
            };
            spyOn(stage, 'onRedo');

            stage.update(true);
            stage.undo();
            stage.redo();

            expect(stage.onRedo).toHaveBeenCalledWith({canRedo: false, canUndo: true});
        });

        it("should pop command from 'undidCommands', then trigger it's execute() and push to 'didCommands'.", function () {
            stage.update(true);
            stage.update(true);
            stage.undo();

            expect(stage.didCommands.length).toEqual(1);
            expect(stage.undidCommands.length).toEqual(1);

            var command1 = stage.didCommands[0];
            var command2 = stage.undidCommands[0];

            spyOn(command2, 'execute');
            stage.redo();

            expect(stage.didCommands.length).toEqual(2);
            expect(stage.undidCommands.length).toEqual(0);
            expect(stage.didCommands[0]).toBe(command1);
            expect(stage.didCommands[1]).toBe(command2);

            expect(command2.execute).toHaveBeenCalled();
        });

    });

    describe("undo() and redo()", function () {

        it("should store undidCommand and didCommand appropriately.", function () {
            expect(stage.didCommands.length).toEqual(0);
            expect(stage.undidCommands.length).toEqual(0);

            stage.update(true);
            stage.update(true);
            expect(stage.didCommands.length).toEqual(2);
            expect(stage.undidCommands.length).toEqual(0);

            stage.undo();
            expect(stage.didCommands.length).toEqual(1);
            expect(stage.undidCommands.length).toEqual(1);

            stage.redo();
            expect(stage.didCommands.length).toEqual(2);
            expect(stage.undidCommands.length).toEqual(0);

            stage.undo();
            stage.undo();
            stage.update(true);
            expect(stage.didCommands.length).toEqual(1);
            expect(stage.undidCommands.length).toEqual(0);
        });

    });

});