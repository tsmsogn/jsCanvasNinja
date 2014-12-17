describe("jsCanvasNinja.Transform", function () {
    var stage, canvas;

    beforeEach(function () {
        setFixtures("<canvas id=canvas></canvas>");
        canvas = document.getElementById("canvas");
        stage = new jsCanvasNinja.Stage(canvas);
    });

    it("should throw exception when be instantiated.", function () {
        expect(function () {
            new jsCanvasNinja.Transform();
        }).toThrow();
    });

    describe("::rotate()", function () {

        it("should rotate central coordinate object base on it's center point.", function () {
            var scaleX = 2;
            var scaleY = 3;
            var radius = 10;
            var degree = 90;

            var target = new jsCanvasNinja.Circle(0, 0, radius);
            target.scaleX = scaleX;
            target.scaleY = scaleY;

            jsCanvasNinja.Transform.rotate.call(target, degree);

            stage.addChild(target);
            stage.update();

            expect(stage.getNumChildren()).toEqual(1);
            expect(target.scaleX).toEqual(scaleX);
            expect(target.scaleY).toEqual(scaleY);
            expect(target.rotation).toEqual(degree);
            expect(stage.getObjectsUnderPoint(0, scaleX * radius)).not.toBeNull();
            expect(stage.getObjectsUnderPoint(scaleY * radius, 0)).not.toBeNull();
            expect(stage.getObjectsUnderPoint(0, -scaleX * radius)).not.toBeNull();
            expect(stage.getObjectsUnderPoint(-scaleY * radius, 0)).not.toBeNull();
        });

        it("should rotate non-central coordinate object base on it's center point.", function () {
            var width = 10;
            var height = 20;
            var scaleX = 2;
            var scaleY = 3;

            var target = new jsCanvasNinja.Rect(0, 0, width, height);
            target.scaleX = scaleX;
            target.scaleY = scaleY;

            jsCanvasNinja.Transform.rotate.call(target, 90);

            stage.addChild(target);
            stage.update();

            expect(stage.getNumChildren()).toEqual(1);
            expect(target.scaleX).toEqual(scaleX);
            expect(target.scaleY).toEqual(scaleY);
            expect(target.rotation).toEqual(90);
            expect(stage.getObjectsUnderPoint(0, scaleX * width)).not.toBeNull();
            expect(stage.getObjectsUnderPoint(scaleY * height, 0)).not.toBeNull();
            expect(stage.getObjectsUnderPoint(0, -scaleX * width)).not.toBeNull();
            expect(stage.getObjectsUnderPoint(-scaleY * height, 0)).not.toBeNull();
        });

    });

    describe("::scale()", function () {

        it("should scale with object's scale when arguments are null.", function () {
            var scaleX = 2;
            var scaleY = 3;

            var target = new jsCanvasNinja.Circle(0, 0, 10);
            target.scaleX = 2;
            target.scaleY = 3;

            jsCanvasNinja.Transform.scale.call(target, null, null);

            stage.addChild(target);
            stage.update();

            expect(target.scaleX).toEqual(scaleX);
            expect(target.scaleY).toEqual(scaleY);
        });

        it("should scale central coordinate object base on it's center point.", function () {
            var scaleX = 2;
            var scaleY = 3;
            var radius = 10;
            var degree = 90;

            var target = new jsCanvasNinja.Circle(0, 0, radius);
            target.rotation = 90;

            jsCanvasNinja.Transform.scale.call(target, scaleX, scaleY);

            stage.addChild(target);
            stage.update();

            expect(stage.getNumChildren()).toEqual(1);
            expect(target.scaleX).toEqual(scaleX);
            expect(target.scaleY).toEqual(scaleY);
            expect(target.rotation).toEqual(degree);
            expect(stage.getObjectsUnderPoint(0, scaleX * radius)).not.toBeNull();
            expect(stage.getObjectsUnderPoint(scaleY * radius, 0)).not.toBeNull();
            expect(stage.getObjectsUnderPoint(0, -scaleX * radius)).not.toBeNull();
            expect(stage.getObjectsUnderPoint(-scaleY * radius, 0)).not.toBeNull();
        });

        it("should rotate non-central coordinate object base on it's center point.", function () {
            var width = 10;
            var height = 20;
            var scaleX = 2;
            var scaleY = 3;

            var target = new jsCanvasNinja.Rect(0, 0, width, height);
            target.rotation = 90;

            jsCanvasNinja.Transform.scale.call(target, scaleX, scaleY);

            stage.addChild(target);
            stage.update();

            expect(stage.getNumChildren()).toEqual(1);
            expect(target.scaleX).toEqual(scaleX);
            expect(target.scaleY).toEqual(scaleY);
            expect(target.rotation).toEqual(90);
            expect(stage.getObjectsUnderPoint(0, scaleX * width)).not.toBeNull();
            expect(stage.getObjectsUnderPoint(scaleY * height, 0)).not.toBeNull();
            expect(stage.getObjectsUnderPoint(0, -scaleX * width)).not.toBeNull();
            expect(stage.getObjectsUnderPoint(-scaleY * height, 0)).not.toBeNull();
        });

    });

});
