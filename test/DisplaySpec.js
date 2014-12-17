describe("Bitmap", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.Bitmap(new Image(), 0, 0, 10, 20); // @todo
    });

    it("should have not color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toEqual(false);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toEqual(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toEqual(true);
    });

    it("should not be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toEqual(false);
    });

    describe("cloned", function () {
        var cloned;

        beforeEach(function () {
            cloned = original.clone();
        });

        it("should have same properties.", function () {
            var originalProperties = Object.keys(original);
            var clonedProperties = Object.keys(cloned);
            expect(originalProperties.intersect(clonedProperties).length).toEqual(originalProperties.length);
        });

        it("should have not color property.", function () {
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toEqual(false);
        });

        it("should have same height.", function () {
            expect(cloned.height).toEqual(original.height);
        });

        it("should have same width.", function () {
            expect(cloned.width).toEqual(original.width);
        });

        it("should not be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toEqual(false);
        });

    });

});

describe("Text", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.Text('Hello World', 'bold 40px Arial', 'rgba(253, 254, 255, 1)', 0, 0);
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toEqual(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toEqual(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toEqual(true);
    });

    it("should not be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toEqual(false);
    });

    it ("should have color accessor.", function () {
        var color = createjs.Graphics.getRGB(0, 0, 0, 1);
        original.setColor(color)
        expect(original.getColor()).toEqual(color);
    });

    it ("should have text accessor.", function () {
        var text = "foo";
        original.setText(text)
        expect(original.getText()).toEqual(text);
    });

    describe("cloned", function () {
        var cloned;

        beforeEach(function () {
            cloned = original.clone();
        });

        it("should have same properties.", function () {
            var originalProperties = Object.keys(original);
            var clonedProperties = Object.keys(cloned);
            expect(originalProperties.intersect(clonedProperties).length).toEqual(originalProperties.length);
        });

        it("should have color property.", function () {
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toEqual(true);
        });

        it("should have same height.", function () {
            expect(cloned.height).toEqual(original.height);
        });

        it("should have same width.", function () {
            expect(cloned.width).toEqual(original.width);
        });

        it("should not be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toEqual(false);
        });

    });

});

describe("Line", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.Line(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toEqual(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toEqual(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toEqual(true);
    });

    it("should not be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toEqual(false);
    });

    it ("should have color accessor.", function () {
        var color = createjs.Graphics.getRGB(0, 0, 0, 1);
        original.setColor(color)
        expect(original.getColor()).toEqual(color);
    });

    describe("cloned", function () {
        var cloned;

        beforeEach(function () {
            cloned = original.clone();
        });

        it("should have same properties.", function () {
            var originalProperties = Object.keys(original);
            var clonedProperties = Object.keys(cloned);
            expect(originalProperties.intersect(clonedProperties).length).toEqual(originalProperties.length);
        });

        it("should have color property.", function () {
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toEqual(true);
        });

        it("should have same height.", function () {
            expect(cloned.height).toEqual(original.height);
        });

        it("should have same width.", function () {
            expect(cloned.width).toEqual(original.width);
        });

        it("should not be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toEqual(false);
        });

    });

});

describe("Circle", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.Circle(0, 0, 60, 'rgba(253, 254, 255, 1)');
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toEqual(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toEqual(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toEqual(true);
    });

    it("should be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toEqual(true);
    });

    it ("should have color accessor.", function () {
        var color = createjs.Graphics.getRGB(0, 0, 0, 1);
        original.setColor(color)
        expect(original.getColor()).toEqual(color);
    });

    describe("cloned", function () {
        var cloned;

        beforeEach(function () {
            cloned = original.clone();
        });

        it("should have same properties.", function () {
            var originalProperties = Object.keys(original);
            var clonedProperties = Object.keys(cloned);
            expect(originalProperties.intersect(clonedProperties).length).toEqual(originalProperties.length);
        });

        it("should have color property.", function () {
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toEqual(true);
        });

        it("should have same height.", function () {
            expect(cloned.height).toEqual(original.height);
        });

        it("should have same width.", function () {
            expect(cloned.width).toEqual(original.width);
        });

        it("should be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toEqual(true);
        });

    });

});

describe("Triangle", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.Triangle(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toEqual(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toEqual(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toEqual(true);
    });

    it("should be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toEqual(true);
    });

    it ("should have color accessor.", function () {
        var color = createjs.Graphics.getRGB(0, 0, 0, 1);
        original.setColor(color)
        expect(original.getColor()).toEqual(color);
    });

    describe("cloned", function () {
        var cloned;

        beforeEach(function () {
            cloned = original.clone();
        });

        it("should have same properties.", function () {
            var originalProperties = Object.keys(original);
            var clonedProperties = Object.keys(cloned);
            expect(originalProperties.intersect(clonedProperties).length).toEqual(originalProperties.length);
        });

        it("should have color property.", function () {
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toEqual(true);
        });

        it("should have same height.", function () {
            expect(cloned.height).toEqual(original.height);
        });

        it("should have same width.", function () {
            expect(cloned.width).toEqual(original.width);
        });

        it("should be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toEqual(true);
        });

    });

});

describe("Rect", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.Rect(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toEqual(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toEqual(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toEqual(true);
    });

    it("should not be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toEqual(false);
    });

    it ("should have color accessor.", function () {
        var color = createjs.Graphics.getRGB(0, 0, 0, 1);
        original.setColor(color)
        expect(original.getColor()).toEqual(color);
    });

    describe("cloned", function () {
        var cloned;

        beforeEach(function () {
            cloned = original.clone();
        });

        it("should have same properties.", function () {
            var originalProperties = Object.keys(original);
            var clonedProperties = Object.keys(cloned);
            expect(originalProperties.intersect(clonedProperties).length).toEqual(originalProperties.length);
        });

        it("should have color property.", function () {
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toEqual(true);
        });

        it("should have same height.", function () {
            expect(cloned.height).toEqual(original.height);
        });

        it("should have same width.", function () {
            expect(cloned.width).toEqual(original.width);
        });

        it("should not be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toEqual(false);
        });

    });

});

describe("Ellipse", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.Ellipse(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toEqual(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toEqual(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toEqual(true);
    });

    it("should not be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toEqual(false);
    });

    it ("should have color accessor.", function () {
        var color = createjs.Graphics.getRGB(0, 0, 0, 1);
        original.setColor(color)
        expect(original.getColor()).toEqual(color);
    });

    describe("cloned", function () {
        var cloned;

        beforeEach(function () {
            cloned = original.clone();
        });

        it("should have same properties.", function () {
            var originalProperties = Object.keys(original);
            var clonedProperties = Object.keys(cloned);
            expect(originalProperties.intersect(clonedProperties).length).toEqual(originalProperties.length);
        });

        it("should have color property.", function () {
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toEqual(true);
        });

        it("should have same height.", function () {
            expect(cloned.height).toEqual(original.height);
        });

        it("should have same width.", function () {
            expect(cloned.width).toEqual(original.width);
        });

        it("should not be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toEqual(false);
        });

    });

});

describe("PolyStar", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.PolyStar(0, 0, 50, 5, 0.6, -90, 'rgba(253, 254, 255, 1)');
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toEqual(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toEqual(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toEqual(true);
    });

    it("should be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toEqual(true);
    });

    it ("should have color accessor.", function () {
        var color = createjs.Graphics.getRGB(0, 0, 0, 1);
        original.setColor(color)
        expect(original.getColor()).toEqual(color);
    });

    describe("cloned", function () {
        var cloned;

        beforeEach(function () {
            cloned = original.clone();
        });

        it("should have same properties.", function () {
            var originalProperties = Object.keys(original);
            var clonedProperties = Object.keys(cloned);
            expect(originalProperties.intersect(clonedProperties).length).toEqual(originalProperties.length);
        });

        it("should have color property.", function () {
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toEqual(true);
        });

        it("should have same height.", function () {
            expect(cloned.height).toEqual(original.height);
        });

        it("should have same width.", function () {
            expect(cloned.width).toEqual(original.width);
        });

        it("should be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toEqual(true);
        });

    });

});

describe("RoundRect", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.RoundRect(0, 0, 10, 20, 5, 'rgba(253, 254, 255, 1)');
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toEqual(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toEqual(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toEqual(true);
    });

    it("should not be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toEqual(false);
    });

    it ("should have color accessor.", function () {
        var color = createjs.Graphics.getRGB(0, 0, 0, 1);
        original.setColor(color)
        expect(original.getColor()).toEqual(color);
    });

    describe("cloned", function () {
        var cloned;

        beforeEach(function () {
            cloned = original.clone();
        });

        it("should have same properties.", function () {
            var originalProperties = Object.keys(original);
            var clonedProperties = Object.keys(cloned);
            expect(originalProperties.intersect(clonedProperties).length).toEqual(originalProperties.length);
        });

        it("should have color property.", function () {
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toEqual(true);
        });

        it("should have same height.", function () {
            expect(cloned.height).toEqual(original.height);
        });

        it("should have same width.", function () {
            expect(cloned.width).toEqual(original.width);
        });

        it("should not be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toEqual(false);
        });

    });

});
