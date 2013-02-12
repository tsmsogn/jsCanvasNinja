TestCase('StageTestCase', {
    'setUp':function () {
        stage = new jsCanvasNinja.Stage();
    },
    'tearDown':function () {
    },
    'testMode':function () {
        stage.setMode('foo');
        assertEquals('', 'foo', stage.getMode());
        stage.setMode(0);
        assertEquals('', 'select', stage.getMode());
        stage.setMode(1);
        assertEquals('', 'insert', stage.getMode());
    }
});