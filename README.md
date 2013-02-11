
# jsCanvasTransform

jsCanvasNinja is a library can transform with handle.

## Installation

Dependencies:

EaselJS 0.5.0 or newer

## Features

- Rotate
- Scale
- Undo/Redo

## Documents

### Stage

`'jsCanvasTransform.Stage'` is subclass of `'EaselJS.Stage'`.

#### Public methods

##### update(options)

##### setSelectable()

##### isSelectable()

#### Callbacks

##### onStageMouseDown(event)

The onStageMouseDown callback is called only when the user presses the mouse button over the canvas besides jsCanvasNinja#getMode() is `'select'`.

```
Parameters:
	event <MouseEvent> A MouseEvent instance with information about the current mouse event. (http://www.createjs.com/Docs/EaselJS/MouseEvent.html)
```

##### onSelect(target, event)

Executes immediately when forefront target clicked.

```
Parameters:
	target <DisplayObject>
	event <MouseEvent> A MouseEvent instance with information about the current mouse event. (http://www.createjs.com/Docs/EaselJS/MouseEvent.html)
```

##### beforeToDataURL()

Executes immediately before toDataURL when forefront target clicked.

```
Parameters:
```

##### afterToDataURL()

```
Parameters:
```

##### onSave()

```
Parameters:
	canUndo:
	canRedo:
```

##### onUndo()

```
Parameters:
	canUndo:
	canRedo:
```

##### onRedo()

```
Parameters:
	canUndo:
	canRedo:
```

