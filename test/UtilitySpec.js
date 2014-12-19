describe("jsCanvasNinja.Utility", function () {

    it("should throw exception when be instantiated.", function () {
        expect(function() {
            new jsCanvasNinja.Utility();
        }).toThrow();
    });

    describe("isText()", function () {

        it("should return true with object having text property.", function () {
            expect(jsCanvasNinja.Utility.isText({text: "foo"})).toBeTruthy();
        });

        it("should return false with empty.", function () {
            expect(jsCanvasNinja.Utility.isText()).toBeFalsy();
        });

        it("should return false with object having non text property.", function () {
            expect(jsCanvasNinja.Utility.isText({})).toBeFalsy();
        });

    });

    describe("hasColor()", function () {

        it("should return true with object having color property.", function () {
            expect(jsCanvasNinja.Utility.hasColor({color: "foo"})).toBeTruthy();
        });

        it("should return false with empty.", function () {
            expect(jsCanvasNinja.Utility.hasColor()).toBeFalsy();
        });

        it("should return false with object having no color property.", function () {
            expect(jsCanvasNinja.Utility.hasColor({})).toBeFalsy();
        });

    });

    describe("hasHeight()", function () {

        it("should return true with object having valid height.", function () {
            expect(jsCanvasNinja.Utility.hasHeight({height: 1})).toBeTruthy();
        });

        it("should return false with empty.", function () {
            expect(jsCanvasNinja.Utility.hasHeight()).toBeFalsy();
        });

        it("should return false with object having no height property.", function () {
            expect(jsCanvasNinja.Utility.hasHeight({})).toBeFalsy();
        });

        it("should return false with object having invalid height.", function () {
            expect(jsCanvasNinja.Utility.hasHeight({height: "foo"})).toBeFalsy();
        });

    });

    describe("hasWidth()", function () {

        it("should return true with object having valid width.", function () {
            expect(jsCanvasNinja.Utility.hasWidth({width: 1})).toBeTruthy();
        });

        it("should return false with empty.", function () {
            expect(jsCanvasNinja.Utility.hasWidth()).toBeFalsy();
        });

        it("should return false with object having no width property.", function () {
            expect(jsCanvasNinja.Utility.hasWidth({})).toBeFalsy();
        });

        it("should return false with object having invalid width.", function () {
            expect(jsCanvasNinja.Utility.hasWidth({width: "foo"})).toBeFalsy();
        });

    });

    describe("isCentralCoordinate()", function () {

        it("should return true with object having center coordinate type.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate({_type: 1})).toBeTruthy();
            expect(jsCanvasNinja.Utility.isCentralCoordinate({_type: 3})).toBeTruthy();
        });

        it("should return false with empty.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate()).toBeFalsy();
        });

        it("should return false with object having no _type property.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate({})).toBeFalsy();
        });

        it("should return false with object having no center coordinate type.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate({_type: 2})).toBeFalsy();
        });

    });

});
