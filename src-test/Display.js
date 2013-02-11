TestCase('DisplayTestCase', {
    'setUp':function () {
        // Bitmap
        originalBitmap = new jsCanvasTransform.Bitmap('../examples/assets/daisy.png', 0, 0, 10, 20);
        clonedBitmap = originalBitmap.clone();
        // Text
        originalText = new jsCanvasTransform.Text('Hello World', 'bold 40px Arial', 'rgba(253, 254, 255, 1)', 0, 0);
        clonedText = originalText.clone();
        // Line
        originalLine = new jsCanvasTransform.Line(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
        clonedLine = originalLine.clone();
        // Circle
        originalCircle = new jsCanvasTransform.Circle(0, 0, 60, 'rgba(253, 254, 255, 1)');
        clonedCircle = originalCircle.clone();
        // Triangle
        originalTriangle = new jsCanvasTransform.Triangle(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
        clonedTriangle = originalTriangle.clone();
        // Rect
        originalRect = new jsCanvasTransform.Rect(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
        clonedRect = originalRect.clone();
        // Ellipse
        originalEllipse = new jsCanvasTransform.Ellipse(0, 0, 10, 20, 'rgba(253, 254, 255, 1)');
        clonedEllipse = originalEllipse.clone();
        // PolyStar
        originalPolyStar = new jsCanvasTransform.PolyStar(0, 0, 50, 5, 0.6, -90, 'rgba(253, 254, 255, 1)');
        clonedPolyStar = originalPolyStar.clone();
        // RoundRect
        originalRoundRect = new jsCanvasTransform.RoundRect(0, 0, 10, 20, 5, 'rgba(253, 254, 255, 1)');
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
        assertFalse('Original Bitmap has color property.', jsCanvasTransform.Utility.hasColor(originalBitmap));
        assertFalse('Cloned Bitmap has color property.', jsCanvasTransform.Utility.hasColor(clonedBitmap));
        // Text
        assertTrue('Original Text has not color property.', jsCanvasTransform.Utility.hasColor(originalText));
        assertTrue('Cloned Text has not color property.', jsCanvasTransform.Utility.hasColor(clonedText));
        // Line
        assertTrue('Original Line has not color property.', jsCanvasTransform.Utility.hasColor(originalLine));
        assertTrue('Cloned Line has not color property.', jsCanvasTransform.Utility.hasColor(clonedLine));
        // Circle
        assertTrue('Original Circle has not color property.', jsCanvasTransform.Utility.hasColor(originalCircle));
        assertTrue('Cloned Circle has not color property.', jsCanvasTransform.Utility.hasColor(clonedCircle));
        // Triangle
        assertTrue('Original Triangle has not color property.', jsCanvasTransform.Utility.hasColor(originalTriangle));
        assertTrue('Cloned Triangle has not color property.', jsCanvasTransform.Utility.hasColor(clonedTriangle));
        // Rect
        assertTrue('Original Rect has not color property.', jsCanvasTransform.Utility.hasColor(originalRect));
        assertTrue('Cloned Rect has not color property.', jsCanvasTransform.Utility.hasColor(clonedRect));
        // Ellipse
        assertTrue('Original Ellipse has not color property.', jsCanvasTransform.Utility.hasColor(originalEllipse));
        assertTrue('Cloned Ellipse has not color property.', jsCanvasTransform.Utility.hasColor(clonedEllipse));
        // PolyStar
        assertTrue('Original PolyStar has not color property.', jsCanvasTransform.Utility.hasColor(originalPolyStar));
        assertTrue('Cloned PolyStar has not color property.', jsCanvasTransform.Utility.hasColor(clonedPolyStar));
        // RoundRect
        assertTrue('Original RoundRect has not color property.', jsCanvasTransform.Utility.hasColor(originalRoundRect));
        assertTrue('Cloned RoundRect has not color property.', jsCanvasTransform.Utility.hasColor(clonedRoundRect));
    },
    'testHasHeight':function () {
        // Bitmap
        //assertTrue('Original Bitmap has not height.', jsCanvasTransform.Utility.hasHeight(originalBitmap));
        //assertTrue('Cloned Bitmap has not height.', jsCanvasTransform.Utility.hasHeight(clonedBitmap));
        // Text
        assertTrue('Original Text has not height.', jsCanvasTransform.Utility.hasHeight(originalText));
        assertTrue('Cloned Text has not height.', jsCanvasTransform.Utility.hasHeight(clonedText));
        // Line
        assertTrue('Original Line has not height.', jsCanvasTransform.Utility.hasHeight(originalLine));
        assertTrue('Cloned Line has not height.', jsCanvasTransform.Utility.hasHeight(clonedLine));
        // Circle
        assertTrue('Original Circle has not height.', jsCanvasTransform.Utility.hasHeight(originalCircle));
        assertTrue('Cloned Circle has not height.', jsCanvasTransform.Utility.hasHeight(clonedCircle));
        // Triangle
        assertTrue('Original Triangle has not height.', jsCanvasTransform.Utility.hasHeight(originalTriangle));
        assertTrue('Cloned Triangle has not height.', jsCanvasTransform.Utility.hasHeight(clonedTriangle));
        // Rect
        assertTrue('Original Rect has not height.', jsCanvasTransform.Utility.hasHeight(originalRect));
        assertTrue('Cloned Rect has not height.', jsCanvasTransform.Utility.hasHeight(clonedRect));
        // Ellipse
        assertTrue('Original Ellipse has not height.', jsCanvasTransform.Utility.hasHeight(originalEllipse));
        assertTrue('Cloned Ellipse has not height.', jsCanvasTransform.Utility.hasHeight(clonedEllipse));
        // PolyStar
        assertTrue('Original PolyStar has not height.', jsCanvasTransform.Utility.hasHeight(originalPolyStar));
        assertTrue('Cloned PolyStar has not height.', jsCanvasTransform.Utility.hasHeight(clonedPolyStar));
        // RoundRect
        assertTrue('Original RoundRect has not height.', jsCanvasTransform.Utility.hasHeight(originalRoundRect));
        assertTrue('Cloned RoundRect has not height.', jsCanvasTransform.Utility.hasHeight(clonedRoundRect));
    },
    'testHasWidth':function () {
        // Bitmap
        //assertTrue('Original Bitmap has not width.', jsCanvasTransform.Utility.hasWidth(originalBitmap));
        //assertTrue('Cloned Bitmap has not width.', jsCanvasTransform.Utility.hasWidth(clonedBitmap));
        // Text
        assertTrue('Original Text has not width.', jsCanvasTransform.Utility.hasWidth(originalText));
        assertTrue('Cloned Text has not width.', jsCanvasTransform.Utility.hasWidth(clonedText));
        // Line
        assertTrue('Original Line has not width.', jsCanvasTransform.Utility.hasWidth(originalLine));
        assertTrue('Cloned Line has not width.', jsCanvasTransform.Utility.hasWidth(clonedLine));
        // Circle
        assertTrue('Original Circle has not width.', jsCanvasTransform.Utility.hasWidth(originalCircle));
        assertTrue('Cloned Circle has not width.', jsCanvasTransform.Utility.hasWidth(clonedCircle));
        // Triangle
        assertTrue('Original Triangle has not width.', jsCanvasTransform.Utility.hasWidth(originalTriangle));
        assertTrue('Cloned Triangle has not width.', jsCanvasTransform.Utility.hasWidth(clonedTriangle));
        // Rect
        assertTrue('Original Rect has not width.', jsCanvasTransform.Utility.hasWidth(originalRect));
        assertTrue('Cloned Rect has not width.', jsCanvasTransform.Utility.hasWidth(clonedRect));
        // Ellipse
        assertTrue('Original Ellipse has not width.', jsCanvasTransform.Utility.hasWidth(originalEllipse));
        assertTrue('Cloned Ellipse has not width.', jsCanvasTransform.Utility.hasWidth(clonedEllipse));
        // PolyStar
        assertTrue('Original PolyStar has not width.', jsCanvasTransform.Utility.hasWidth(originalPolyStar));
        assertTrue('Cloned PolyStar has not width.', jsCanvasTransform.Utility.hasWidth(clonedPolyStar));
        // RoundRect
        assertTrue('Original RoundRect has not width.', jsCanvasTransform.Utility.hasWidth(originalRoundRect));
        assertTrue('Cloned RoundRect has not width.', jsCanvasTransform.Utility.hasWidth(clonedRoundRect));
    },
    'testIsCentralCoordinate':function () {
        // Bitmap
        assertFalse('Original Bitmap should not be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(originalBitmap));
        assertFalse('Cloned Bitmap should not be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(clonedBitmap));
        // Text
        assertFalse('Original Text should not be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(originalText));
        assertFalse('Cloned Text should not be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(clonedText));
        // Line
        assertFalse('Original Line should not be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(originalLine));
        assertFalse('Cloned Line should not be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(clonedLine));
        // Circle
        assertTrue('Original Circle should be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(originalCircle));
        assertTrue('Cloned Circle should be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(clonedCircle));
        // Triangle
        assertTrue('Original Triangle should be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(originalTriangle));
        assertTrue('Cloned Triangle should be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(clonedTriangle));
        // Rect
        assertFalse('Original Rect should not be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(originalRect));
        assertFalse('Cloned Rect should not be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(clonedRect));
        // Ellipse
        assertFalse('Original Ellipse should not be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(originalEllipse));
        assertFalse('Cloned Ellipse should not be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(clonedEllipse));
        // PolyStar
        assertTrue('Original PolyStar should be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(originalPolyStar));
        assertTrue('Cloned PolyStar should be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(clonedPolyStar));
        // RoundRect
        assertFalse('Original RoundRect should not be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(originalRoundRect));
        assertFalse('Cloned RoundRect should not be central coordinate object.', jsCanvasTransform.Utility.isCentralCoordinate(clonedRoundRect));
    }
});
