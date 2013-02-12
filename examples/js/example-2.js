var canvas, stage;
var currentTarget = {};

$(function () {
    canvas = document.getElementById("canvas");
    stage = new jsCanvasNinja.Stage(canvas, {mode:'insert'});

    stage.onStageMouseDown = handleOnStageMouseDown;
    stage.onSave = handleOnUndoRedo;
    stage.onUndo = handleOnUndoRedo;
    stage.onRedo = handleOnUndoRedo;

    new createjs.Ticker.addListener(window);

    $("#mode").buttonset();
    $("#insert").buttonset();
    $(".dialog").dialog({resizable:false});
    $("button").button();
    $("#button_undo").button("option", "disabled", true);
    $("#button_redo").button("option", "disabled", true);

    // Slider
    $("#red, #green, #blue").slider({
        orientation:"horizontal",
        range:"min",
        min:0,
        max:255,
        value:127,
        change:handleChange,
        slide:handleSlide
    });
    $("#alpha").slider({
        orientation:"horizontal",
        range:"min",
        min:0,
        max:1,
        step:0.05,
        value:1,
        change:handleChange,
        slide:handleSlide
    });

    // Arrange
    $("#button_bring_to_front, #button_send_to_back, #button_bring_forward, #button_send_backward").click(function () {
        var value = $(this).text().toString().toLowerCase();

        switch (value) {
            case "bring to front":
                stage.bringToFront();
                break;
            case "send to back":
                stage.sendToBack();
                break;
            case "bring forward":
                stage.bringForward();
                break;
            case "send backward":
                stage.sendBackward();
                break;
            default :
                break;
        }

        stage.update(true);
    });

    $("#button_png").click(function () {
        var value = $(this).text().toString().toLowerCase();
        switch (value) {
            case "export to png image":
                var data = stage.toDataURL();
                $.ajax({
                    data:{
                        img:data
                    },
                    type:"POST",
                    url:"canvas-upload.php",
                    success:function () {

                    }
                });
                break;
            default :
                break;
        }
    });

    // Edit
    $("#button_undo, #button_redo, #button_delete, #button_reset").click(function () {
        var value = $(this).text().toString().toLowerCase();
        switch (value) {
            case "undo":
                stage.undo();
                break;
            case "redo":
                stage.redo();
                break;
            case "delete":
                stage.delete();
                stage.update(true);
                break;
            case "reset":
                stage.deleteAll();
                stage.update(true);
                break;
            default :
                break;
        }
    });

    // Mode
    $("input[name=mode]").change(function () {
        var value = $(this).val().toString().toLowerCase();

        switch (value) {
            case "select":
            case "insert":
                stage.setMode(value);
                break;
            default:
                break;
        }

    });

    // Rotation
    $("#button_clockwise, #button_counterclockwise").click(function () {
        if (!stage.getTarget()) return;

        var value = $(this).text().toString().toLocaleLowerCase();
        switch (value) {
            case "clockwise":
                var target = stage.getTarget();
                jsCanvasNinja.Transform.rotate.call(target, target.rotation + 10);
                break;
            case "counterclockwise":
                var target = stage.getTarget();
                jsCanvasNinja.Transform.rotate.call(target, target.rotation - 10);
                break;
            default :
                break;
        }

        stage.update(true);
    });

    // Scale
    $("#button_scale_plus, #button_scale_minus").click(function () {
        if (!stage.getTarget()) return;

        var value = $(this).text().toString().toLocaleLowerCase();
        switch (value) {
            case "+":
                var target = stage.getTarget();
                jsCanvasNinja.Transform.scale.call(target, target.scaleX + 0.1, target.scaleY + 0.1);
                break;
            case "-":
                var target = stage.getTarget();
                jsCanvasNinja.Transform.scale.call(target, target.scaleX - 0.1, target.scaleY - 0.1);
                break;
            default :
                break;
        }

        stage.update(true);
    });

    // Test
    $("#button_clone").click(function () {

        var value = $(this).text().toString().toLocaleLowerCase();

        switch (value) {
            case "clone":
                if (stage.getTarget()) {
                    stage.addChild(stage.getTarget().clone());
                    stage.update(true);
                }
                break;
            default :
                break;
        }
    });

});

function tick() {
    stage.update();
}

function handleChange() {
    if (stage.getTarget() && currentTarget.id === stage.getTarget().id) {
        stage.update(true);
    }
}

function handleOnStageMouseDown(e) {
    var target;
    var value = $('input[name=radio]:checked').val().toString().toLocaleLowerCase();
    var red = $('#red').slider('value');
    var green = $('#green').slider('value');
    var blue = $('#blue').slider('value');
    var alpha = $('#alpha').slider('value');
    var color = createjs.Graphics.getRGB(red, green, blue, alpha);
    var point = new createjs.Point(e.stageX, e.stageY);

    switch (value) {
        case "bitmap":
            target = new jsCanvasNinja.Bitmap($("#image")[0], point.x, point.y, $("#image")[0].width, $("#image")[0].height);
            break;
        case "text":
            target = new jsCanvasNinja.Text("Hello World", "bold 40px Arial", color, point.x, point.y);
            break;
        case "line":
            target = new jsCanvasNinja.Line(point.x, point.y, 100, 150, color);
            break;
        case "circle":
            target = new jsCanvasNinja.Circle(point.x, point.y, 60, color);
            break;
        case "triangle":
            target = new jsCanvasNinja.Triangle(point.x, point.y, 60, 90, color);
            break;
        case "rect":
            target = new jsCanvasNinja.Rect(point.x, point.y, 20, 40, color);
            break;
        case "ellipse":
            target = new jsCanvasNinja.Ellipse(point.x, point.y, 30, 60, color);
            break;
        case "polystar":
            target = new jsCanvasNinja.PolyStar(point.x, point.y, 60, 5, 0.6, -90, color);
            break;
        case "roundrect":
            target = new jsCanvasNinja.RoundRect(point.x, point.y, 20, 40, 5, color);
            break;
        default :
            break;
    }

    // Implements callbacks
    stage.onSelect = function (target, e) {
        if (currentTarget.id !== target.id) {
            if (typeof target.getColor === 'function') {
                var color = target.getColor();
                color.toString().match(/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(1|(?:0\.\d+))\)$/);
                var red = RegExp.$1;
                var green = RegExp.$2;
                var blue = RegExp.$3;
                var alpha = RegExp.$4;
                $("#red").slider("value", red);
                $("#green").slider("value", green);
                $("#blue").slider("value", blue);
                $("#alpha").slider("value", alpha);
                // Update current target
                currentTarget = target;
            }
        }
    };

    // Implements before Stage#toDataURL
    stage.beforeToDataURL = function () {
        for (var i = 0; i < this._frame._elements.length; i++) {
            var child = this._frame._elements[i];
            this.removeChild(child);
        }
        this.update();
    };

    stage.bindToframe(stage.addChild(target));

    // Fire events
    stage.update(true);
}

function handleOnUndoRedo(obj) {
    $("#button_undo").button("option", "disabled", !obj.canUndo);
    $("#button_redo").button("option", "disabled", !obj.canRedo);
}

function handleSlide() {
    var target = stage.getTarget();
    if (target && jsCanvasNinja.Utility.hasColor(target)) {
        var red = $('#red').slider('value');
        var green = $('#green').slider('value');
        var blue = $('#blue').slider('value');
        var alpha = $('#alpha').slider('value');
        var color = createjs.Graphics.getRGB(red, green, blue, alpha);
        target.setColor(color);
        stage.update();
    }
}
