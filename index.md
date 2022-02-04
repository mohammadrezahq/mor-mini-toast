# Mor Mini Toast for JavaScript

### Setup:

Install package with npm:

```
npm i mor-mini-toast
```

### Import

```
import MiniToast from 'mor-mini-toast'

// OR

const MiniToast = require('mor-mini-toast')
```

### Initialize

```
let toast = MiniToast.init(String message, Object options)

// Message will be the text of the toast

```

### Set Position

```
let options = {
    position: 'top-left' // default 
}
```
The position of the toast should be a combination of a vertical position and - a horizontal position: 'top-left', 'middle-center', 'bottom-right'

![Set Position](/images/simple.gif)

### Set Icon
```
let options = {
    icon: 'success' // default 
}
```
Icons: 'none', 'success', 'alert', 'warn', 'error'


### Animations

You can set the enter and exit animation:

```
let options = {
    in: 'slide-left', // enter animation: Slide From Left - default 
    out: 'slide-left' // exit animation: Slide To Left - default 
}
```

<b>At the moment</b> This just supports 'slide' animations and 'fade'. 'V3.0.1'

![Slide Animation](/images/slide-left-slide-top.gif)

![Fade Animation](/images/fade.gif)


### Show time

How long this toast stays on the web page.

```
let options = {
    showtime: 3000 // default
}
```

### Language Direction

let options = {
    dir: 'ltr' // default
}

![Direction](/images/direction.gif)


### Style

Default options:

```
let options = {
    bgColor: 'white',
    textColor: 'black',
    iconColor: 'black',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    padding: '10px',
    fontFamily: 'Tahoma',
    closeIconColor: 'black'
}
```

![Changing style](/images/change-style.gif)


### Close Button Options

```
let options = {
    canClose: false, // default
    onlyClose: false // default
}
```

<b>canClose:</b> by setting true this option, close button shows to user.
<b>onlyClose:</b> by setting true this option, the toast will stay on the web page until user clicks close button. (showTime is ignored)

![Changing style](/images/close-with-button.gif)


### Advanced

#### Overlay toast

At default, overlay toast is disabled, so multiple toasts will be shown under each other. if it's enabled, toasts cover each other.

```
let options = {
    overlayToast: false // default
}
```

> Multiple toasts does not support on toasts with 'middle' vertically position.

![Multiple toasts](/images/multiple-toasts.gif)

![Overlay toasts](/images/overlay-toast.gif)


#### Enter and Exit Duration

```
let options = {
    enterDuration: 350, // default
    exitDuration: 1000 // default
}
```

### Show the toast

```
toast.show()
```
