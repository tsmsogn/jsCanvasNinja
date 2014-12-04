describe("Stage", function () {
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

});