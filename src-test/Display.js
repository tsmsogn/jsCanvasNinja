TestCase('DisplayTestCase', {
    'setUp':function () {
        // Bitmap
        originalBitmap = new jsCanvasNinja.Bitmap('../examples/assets/daisy.png', 0, 0, 10, 20);
        clonedBitmap = originalBitmap.clone();
        // Text
        originalText = new jsCanvasNinja.Text('Hello World', 'bold 40px Arial', 'rgba(253, 254, 255, 1)', 0, 0);
        clonedText = originalText.clone();
        // Line
        originalLine = new jsCanvasNinja.Line(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
        clonedLine = originalLine.clone();
        // Circle
        originalCircle = new jsCanvasNinja.Circle(0, 0, 60, 'rgba(253, 254, 255, 1)');
        clonedCircle = originalCircle.clone();
        // Triangle
        originalTriangle = new jsCanvasNinja.Triangle(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
        clonedTriangle = originalTriangle.clone();
        // Rect
        originalRect = new jsCanvasNinja.Rect(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
        clonedRect = originalRect.clone();
        // Ellipse
        originalEllipse = new jsCanvasNinja.Ellipse(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
        clonedEllipse = originalEllipse.clone();
        // PolyStar
        originalPolyStar = new jsCanvasNinja.PolyStar(0, 0, 50, 5, 0.6, -90, 'rgba(253, 254, 255, 1)');
        clonedPolyStar = originalPolyStar.clone();
        // RoundRect
        originalRoundRect = new jsCanvasNinja.RoundRect(0, 0, 10, 20, 5, 'rgba(253, 254, 255, 1)');
        clonedRoundRect = originalRoundRect.clone();
    },
    'tearDown':function () {
    },
    'testClone':function () {
        // Bitmap
        var originalBitmapKeys = Object.keys(originalBitmap);
        var clonedBitmapKeys = Object.keys(clonedBitmap);
        assertEquals('Cloned Bitmap lacks some properties.', originalBitmapKeys.length, originalBitmapKeys.intersect(clonedBitmapKeys).length);
        // Text
        var originalTextKeys = Object.keys(originalText);
        var clonedTextKeys = Object.keys(clonedText);
        assertEquals('Cloned Text lacks some properties.', originalTextKeys.length, originalTextKeys.intersect(clonedTextKeys).length);
        // Line
        var originalLineKeys = Object.keys(originalLine);
        var clonedLineKeys = Object.keys(clonedLine);
        assertEquals('Cloned Line lacks some properties.', originalLineKeys.length, originalLineKeys.intersect(clonedLineKeys).length);
        // Circle
        var originalCircleKeys = Object.keys(originalCircle);
        var clonedCircleKeys = Object.keys(clonedCircle);
        assertEquals('Cloned Circle lacks some properties.', originalCircleKeys.length, originalCircleKeys.intersect(clonedCircleKeys).length);
        // Triangle
        var originalTriangleKeys = Object.keys(originalTriangle);
        var clonedTriangleKeys = Object.keys(clonedTriangle);
        assertEquals('Cloned Triangle lacks some properties.', originalTriangleKeys.length, originalTriangleKeys.intersect(clonedTriangleKeys).length);
        // Rect
        var originalRectKeys = Object.keys(originalRect);
        var clonedRectKeys = Object.keys(clonedRect);
        assertEquals('Cloned Rect lacks some properties.', originalRectKeys.length, originalRectKeys.intersect(clonedRectKeys).length);
        // Ellipse
        var originalEllipseKeys = Object.keys(originalEllipse);
        var clonedEllipseKeys = Object.keys(clonedEllipse);
        assertEquals('Cloned Ellipse lacks some properties.', originalEllipseKeys.length, originalEllipseKeys.intersect(clonedEllipseKeys).length);
        // PolyStar
        var originalPolyStarKeys = Object.keys(originalPolyStar);
        var clonedPolyStarKeys = Object.keys(clonedPolyStar);
        assertEquals('Cloned PolyStar lacks some properties.', originalPolyStarKeys.length, originalPolyStarKeys.intersect(clonedPolyStarKeys).length);
        // RoundRect
        var originalRoundRectKeys = Object.keys(originalRoundRect);
        var clonedRoundRectKeys = Object.keys(clonedRoundRect);
        assertEquals('Cloned RoundRect lacks some properties.', originalRoundRectKeys.length, originalRoundRectKeys.intersect(clonedRoundRectKeys).length);
    },
    'testHasColor':function () {
        // Bitmap
        assertFalse('Original Bitmap has color property.', jsCanvasNinja.Utility.hasColor(originalBitmap));
        assertFalse('Cloned Bitmap has color property.', jsCanvasNinja.Utility.hasColor(clonedBitmap));
        // Text
        assertTrue('Original Text has not color property.', jsCanvasNinja.Utility.hasColor(originalText));
        assertTrue('Cloned Text has not color property.', jsCanvasNinja.Utility.hasColor(clonedText));
        // Line
        assertTrue('Original Line has not color property.', jsCanvasNinja.Utility.hasColor(originalLine));
        assertTrue('Cloned Line has not color property.', jsCanvasNinja.Utility.hasColor(clonedLine));
        // Circle
        assertTrue('Original Circle has not color property.', jsCanvasNinja.Utility.hasColor(originalCircle));
        assertTrue('Cloned Circle has not color property.', jsCanvasNinja.Utility.hasColor(clonedCircle));
        // Triangle
        assertTrue('Original Triangle has not color property.', jsCanvasNinja.Utility.hasColor(originalTriangle));
        assertTrue('Cloned Triangle has not color property.', jsCanvasNinja.Utility.hasColor(clonedTriangle));
        // Rect
        assertTrue('Original Rect has not color property.', jsCanvasNinja.Utility.hasColor(originalRect));
        assertTrue('Cloned Rect has not color property.', jsCanvasNinja.Utility.hasColor(clonedRect));
        // Ellipse
        assertTrue('Original Ellipse has not color property.', jsCanvasNinja.Utility.hasColor(originalEllipse));
        assertTrue('Cloned Ellipse has not color property.', jsCanvasNinja.Utility.hasColor(clonedEllipse));
        // PolyStar
        assertTrue('Original PolyStar has not color property.', jsCanvasNinja.Utility.hasColor(originalPolyStar));
        assertTrue('Cloned PolyStar has not color property.', jsCanvasNinja.Utility.hasColor(clonedPolyStar));
        // RoundRect
        assertTrue('Original RoundRect has not color property.', jsCanvasNinja.Utility.hasColor(originalRoundRect));
        assertTrue('Cloned RoundRect has not color property.', jsCanvasNinja.Utility.hasColor(clonedRoundRect));
    },
    'testHasHeight':function () {
        // Bitmap
        //assertTrue('Original Bitmap has not height.', jsCanvasNinja.Utility.hasHeight(originalBitmap));
        //assertTrue('Cloned Bitmap has not height.', jsCanvasNinja.Utility.hasHeight(clonedBitmap));
        // Text
        assertTrue('Original Text has not height.', jsCanvasNinja.Utility.hasHeight(originalText));
        assertTrue('Cloned Text has not height.', jsCanvasNinja.Utility.hasHeight(clonedText));
        // Line
        assertTrue('Original Line has not height.', jsCanvasNinja.Utility.hasHeight(originalLine));
        assertTrue('Cloned Line has not height.', jsCanvasNinja.Utility.hasHeight(clonedLine));
        // Circle
        assertTrue('Original Circle has not height.', jsCanvasNinja.Utility.hasHeight(originalCircle));
        assertTrue('Cloned Circle has not height.', jsCanvasNinja.Utility.hasHeight(clonedCircle));
        // Triangle
        assertTrue('Original Triangle has not height.', jsCanvasNinja.Utility.hasHeight(originalTriangle));
        assertTrue('Cloned Triangle has not height.', jsCanvasNinja.Utility.hasHeight(clonedTriangle));
        // Rect
        assertTrue('Original Rect has not height.', jsCanvasNinja.Utility.hasHeight(originalRect));
        assertTrue('Cloned Rect has not height.', jsCanvasNinja.Utility.hasHeight(clonedRect));
        // Ellipse
        assertTrue('Original Ellipse has not height.', jsCanvasNinja.Utility.hasHeight(originalEllipse));
        assertTrue('Cloned Ellipse has not height.', jsCanvasNinja.Utility.hasHeight(clonedEllipse));
        // PolyStar
        assertTrue('Original PolyStar has not height.', jsCanvasNinja.Utility.hasHeight(originalPolyStar));
        assertTrue('Cloned PolyStar has not height.', jsCanvasNinja.Utility.hasHeight(clonedPolyStar));
        // RoundRect
        assertTrue('Original RoundRect has not height.', jsCanvasNinja.Utility.hasHeight(originalRoundRect));
        assertTrue('Cloned RoundRect has not height.', jsCanvasNinja.Utility.hasHeight(clonedRoundRect));
    },
    'testHasWidth':function () {
        // Bitmap
        //assertTrue('Original Bitmap has not width.', jsCanvasNinja.Utility.hasWidth(originalBitmap));
        //assertTrue('Cloned Bitmap has not width.', jsCanvasNinja.Utility.hasWidth(clonedBitmap));
        // Text
        assertTrue('Original Text has not width.', jsCanvasNinja.Utility.hasWidth(originalText));
        assertTrue('Cloned Text has not width.', jsCanvasNinja.Utility.hasWidth(clonedText));
        // Line
        assertTrue('Original Line has not width.', jsCanvasNinja.Utility.hasWidth(originalLine));
        assertTrue('Cloned Line has not width.', jsCanvasNinja.Utility.hasWidth(clonedLine));
        // Circle
        assertTrue('Original Circle has not width.', jsCanvasNinja.Utility.hasWidth(originalCircle));
        assertTrue('Cloned Circle has not width.', jsCanvasNinja.Utility.hasWidth(clonedCircle));
        // Triangle
        assertTrue('Original Triangle has not width.', jsCanvasNinja.Utility.hasWidth(originalTriangle));
        assertTrue('Cloned Triangle has not width.', jsCanvasNinja.Utility.hasWidth(clonedTriangle));
        // Rect
        assertTrue('Original Rect has not width.', jsCanvasNinja.Utility.hasWidth(originalRect));
        assertTrue('Cloned Rect has not width.', jsCanvasNinja.Utility.hasWidth(clonedRect));
        // Ellipse
        assertTrue('Original Ellipse has not width.', jsCanvasNinja.Utility.hasWidth(originalEllipse));
        assertTrue('Cloned Ellipse has not width.', jsCanvasNinja.Utility.hasWidth(clonedEllipse));
        // PolyStar
        assertTrue('Original PolyStar has not width.', jsCanvasNinja.Utility.hasWidth(originalPolyStar));
        assertTrue('Cloned PolyStar has not width.', jsCanvasNinja.Utility.hasWidth(clonedPolyStar));
        // RoundRect
        assertTrue('Original RoundRect has not width.', jsCanvasNinja.Utility.hasWidth(originalRoundRect));
        assertTrue('Cloned RoundRect has not width.', jsCanvasNinja.Utility.hasWidth(clonedRoundRect));
    },
    'testIsCentralCoordinate':function () {
        // Bitmap
        assertFalse('Original Bitmap should not be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(originalBitmap));
        assertFalse('Cloned Bitmap should not be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(clonedBitmap));
        // Text
        assertFalse('Original Text should not be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(originalText));
        assertFalse('Cloned Text should not be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(clonedText));
        // Line
        assertFalse('Original Line should not be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(originalLine));
        assertFalse('Cloned Line should not be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(clonedLine));
        // Circle
        assertTrue('Original Circle should be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(originalCircle));
        assertTrue('Cloned Circle should be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(clonedCircle));
        // Triangle
        assertTrue('Original Triangle should be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(originalTriangle));
        assertTrue('Cloned Triangle should be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(clonedTriangle));
        // Rect
        assertFalse('Original Rect should not be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(originalRect));
        assertFalse('Cloned Rect should not be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(clonedRect));
        // Ellipse
        assertFalse('Original Ellipse should not be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(originalEllipse));
        assertFalse('Cloned Ellipse should not be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(clonedEllipse));
        // PolyStar
        assertTrue('Original PolyStar should be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(originalPolyStar));
        assertTrue('Cloned PolyStar should be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(clonedPolyStar));
        // RoundRect
        assertFalse('Original RoundRect should not be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(originalRoundRect));
        assertFalse('Cloned RoundRect should not be central coordinate object.', jsCanvasNinja.Utility.isCentralCoordinate(clonedRoundRect));
    }
});
