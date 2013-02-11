TestCase('CommandManagerTestCase', {
    setUp:function () {
        undoManager = new jsCanvasTransform.CommandManager();
    },
    tearDown:function () {
    },
    'testUndoManager':function () {
        // Push test
        undoManager.push(1);
        undoManager.push(2);
        undoManager.push(3);
        var didcommands = undoManager.didCommands;
        var undidCommands = undoManager.undidCommands;
        assertEquals("Push test", 3, didcommands.length);
        assertEquals("Push test", 1, didcommands[0]);
        assertEquals("Push test", 2, didcommands[1]);
        assertEquals("Push test", 3, didcommands[2]);
        assertEquals("Push test", 0, undidCommands.length);

        // Undo test
        undoManager.undo();
        undoManager.undo();
        var didcommands = undoManager.didCommands;
        var undidCommands = undoManager.undidCommands;
        assertEquals("Undo test", 1, didcommands.length);
        assertEquals("Undo test", 1, didcommands[0]);
        assertEquals("Undo test", 2, undidCommands.length);
        assertEquals("Undo test", 3, undidCommands[0]);
        assertEquals("Undo test", 2, undidCommands[1]);

        // Redo test
        undoManager.redo();
        var didcommands = undoManager.didCommands;
        var undidcommands = undoManager.undidCommands;
        assertEquals("Redo test", 2, didcommands.length);
        assertEquals("Redo test", 1, didcommands[0]);
        assertEquals("Redo test", 2, didcommands[1]);
        assertEquals("Redo test", 1, undidcommands.length);
        assertEquals("Redo test", 3, undidcommands[0]);

        // Push test
        undoManager.push(4);
        var undidcommands = undoManager.undidCommands;
        assertEquals("Push test", 0, undidcommands.length);
    }
});
