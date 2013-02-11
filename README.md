
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

`jsCanvasTransform.Stage` is subclass of `EaselJS.Stage`.

#### Public methods

##### update(options)

##### setSelectable()

##### isSelectable()

##### 

#### Callbacks

##### onSelect(target, event)

Executes immediately when forefront target clicked.

```
Parameters:
	target <DisplayObject>
	event <MouseEvent> A MouseEvent instance with information about the current mouse event.
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

