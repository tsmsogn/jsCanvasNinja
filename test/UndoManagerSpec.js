describe("CommandManager", function () {
    var commandManager;

    beforeEach(function () {
        commandManager = new jsCanvasNinja.CommandManager();
    });

    it("should have undo/redo function", function () { // @todo
        // Push test
        commandManager.push(1);
        commandManager.push(2);
        commandManager.push(3);
        var didCommands = commandManager.didCommands;
        var undidCommands = commandManager.undidCommands;
        expect(didCommands.length).toEqual(3);
        expect(didCommands[0]).toEqual(1);
        expect(didCommands[1]).toEqual(2);
        expect(didCommands[2]).toEqual(3);
        expect(undidCommands.length).toEqual(0);

        // Undo test
        commandManager.undo();
        commandManager.undo();
        var didCommands = commandManager.didCommands;
        var undidCommands = commandManager.undidCommands;
        expect(didCommands.length).toEqual(1);
        expect(didCommands[0]).toEqual(1);
        expect(undidCommands.length).toEqual(2);
        expect(undidCommands[0]).toEqual(3);
        expect(undidCommands[1]).toEqual(2);

        // Redo test
        commandManager.redo();
        var didCommands = commandManager.didCommands;
        var undidCommands = commandManager.undidCommands;
        expect(didCommands.length).toEqual(2);
        expect(didCommands[0]).toEqual(1);
        expect(didCommands[1]).toEqual(2);
        expect(undidCommands.length).toEqual(1);
        expect(undidCommands[0]).toEqual(3);

        // Push test
        commandManager.push(4);
        var undidCommands = commandManager.undidCommands;
        expect(undidCommands.length).toEqual(0);
    });

});
