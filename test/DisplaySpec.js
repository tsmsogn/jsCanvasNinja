describe("Bitmap", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.Bitmap(new Image(), 0, 0, 10, 20); // @todo
    });

    it("should have not color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toBe(false);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toBe(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toBe(true);
    });

    it("should not be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toBe(false);
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
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toBe(false);
        });

        it("should have height property.", function () {
            expect(jsCanvasNinja.Utility.hasHeight(cloned)).toBe(true);
        });

        it("should have width property.", function () {
            expect(jsCanvasNinja.Utility.hasWidth(cloned)).toBe(true);
        });

        it("should not be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toBe(false);
        });

    });

});

describe("Text", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.Text('Hello World', 'bold 40px Arial', 'rgba(253, 254, 255, 1)', 0, 0);
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toBe(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toBe(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toBe(true);
    });

    it("should not be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toBe(false);
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
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toBe(true);
        });

        it("should have height property.", function () {
            expect(jsCanvasNinja.Utility.hasHeight(cloned)).toBe(true);
        });

        it("should have width property.", function () {
            expect(jsCanvasNinja.Utility.hasWidth(cloned)).toBe(true);
        });

        it("should not be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toBe(false);
        });

    });

});

describe("Line", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.Line(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toBe(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toBe(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toBe(true);
    });

    it("should not be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toBe(false);
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
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toBe(true);
        });

        it("should have height property.", function () {
            expect(jsCanvasNinja.Utility.hasHeight(cloned)).toBe(true);
        });

        it("should have width property.", function () {
            expect(jsCanvasNinja.Utility.hasWidth(cloned)).toBe(true);
        });

        it("should not be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toBe(false);
        });

    });

});

describe("Circle", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.Circle(0, 0, 60, 'rgba(253, 254, 255, 1)');
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toBe(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toBe(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toBe(true);
    });

    it("should be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toBe(true);
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
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toBe(true);
        });

        it("should have height property.", function () {
            expect(jsCanvasNinja.Utility.hasHeight(cloned)).toBe(true);
        });

        it("should have width property.", function () {
            expect(jsCanvasNinja.Utility.hasWidth(cloned)).toBe(true);
        });

        it("should be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toBe(true);
        });

    });

});

describe("Triangle", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.Triangle(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toBe(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toBe(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toBe(true);
    });

    it("should be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toBe(true);
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
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toBe(true);
        });

        it("should have height property.", function () {
            expect(jsCanvasNinja.Utility.hasHeight(cloned)).toBe(true);
        });

        it("should have width property.", function () {
            expect(jsCanvasNinja.Utility.hasWidth(cloned)).toBe(true);
        });

        it("should be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toBe(true);
        });

    });

});

describe("Rect", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.Rect(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toBe(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toBe(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toBe(true);
    });

    it("should not be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toBe(false);
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
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toBe(true);
        });

        it("should have height property.", function () {
            expect(jsCanvasNinja.Utility.hasHeight(cloned)).toBe(true);
        });

        it("should have width property.", function () {
            expect(jsCanvasNinja.Utility.hasWidth(cloned)).toBe(true);
        });

        it("should not be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toBe(false);
        });

    });

});

describe("Ellipse", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.Ellipse(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toBe(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toBe(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toBe(true);
    });

    it("should not be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toBe(false);
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
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toBe(true);
        });

        it("should have height property.", function () {
            expect(jsCanvasNinja.Utility.hasHeight(cloned)).toBe(true);
        });

        it("should have width property.", function () {
            expect(jsCanvasNinja.Utility.hasWidth(cloned)).toBe(true);
        });

        it("should not be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toBe(false);
        });

    });

});

describe("PolyStar", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.PolyStar(0, 0, 50, 5, 0.6, -90, 'rgba(253, 254, 255, 1)');
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toBe(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toBe(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toBe(true);
    });

    it("should be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toBe(true);
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
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toBe(true);
        });

        it("should have height property.", function () {
            expect(jsCanvasNinja.Utility.hasHeight(cloned)).toBe(true);
        });

        it("should have width property.", function () {
            expect(jsCanvasNinja.Utility.hasWidth(cloned)).toBe(true);
        });

        it("should be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toBe(true);
        });

    });

});

describe("RoundRect", function () {
    var original;

    beforeEach(function () {
        original = new jsCanvasNinja.RoundRect(0, 0, 10, 20, 5, 'rgba(253, 254, 255, 1)');
    });

    it("should have color property.", function () {
        expect(jsCanvasNinja.Utility.hasColor(original)).toBe(true);
    });

    it("should have height property.", function () {
        expect(jsCanvasNinja.Utility.hasHeight(original)).toBe(true);
    });

    it("should have width property.", function () {
        expect(jsCanvasNinja.Utility.hasWidth(original)).toBe(true);
    });

    it("should not be central coordinate object.", function () {
        expect(jsCanvasNinja.Utility.isCentralCoordinate(original)).toBe(false);
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
            expect(jsCanvasNinja.Utility.hasColor(cloned)).toBe(true);
        });

        it("should have height property.", function () {
            expect(jsCanvasNinja.Utility.hasHeight(cloned)).toBe(true);
        });

        it("should have width property.", function () {
            expect(jsCanvasNinja.Utility.hasWidth(cloned)).toBe(true);
        });

        it("should not be central coordinate object.", function () {
            expect(jsCanvasNinja.Utility.isCentralCoordinate(cloned)).toBe(false);
        });

    });

});