# Mor Mini Toast for JavaScript

### Setup:

Install package with npm:

```
npm i mor-mini-toast
```

Import package directly on web page:

```html
<script src="https://unpkg.com/mor-mini-toast@3.x/umd/bundle.js"></script>
```
### Import

```js
import MiniToast from 'mor-mini-toast'

// OR

const MiniToast = require('mor-mini-toast')
```

### Initialize

```js
let toast = MiniToast.init(String message, Object options)

// Message will be the text of the toast

// With bundle.js use this:
let toast = window.miniToast.init(String message, Object options)

```

### Set Position

```js
let options = {
    position: 'top-left' // default 
}
```
The position of the toast should be a combination of a vertical position and - a horizontal position: 'top-left', 'middle-center', 'bottom-right'

![Set Position](/images/simple.gif)

### Set Icon
```js
let options = {
    icon: 'success' // default 
}
```
Icons: 'none', 'success', 'alert', 'warn', 'error'

### Animations

You can set the enter and exit animation:

```js
let options = {
    in: 'slide-left', // enter animation: Slide From Left - default 
    out: 'slide-left' // exit animation: Slide To Left - default 
}
```

<b>At the moment</b> This just supports 'slide' animations and 'fade'. 'V3.1.x'

![Slide Animation](/images/slide-left-slide-top.gif)

![Fade Animation](/images/fade.gif)


### Show time

How long this toast stays on the web page.

```js
let options = {
    showtime: 3000 // default
}
```

### Language Direction

```js
let options = {
    dir: 'ltr' // default
}
```

![Direction](/images/direction.gif)


### Style

Default options:

```js
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

```js
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

```js
let options = {
    overlayToast: false // default
}
```

> Multiple toasts does not support on toasts with 'middle' vertically position.

![Multiple toasts](/images/multiple-toasts.gif)

![Overlay toasts](/images/overlay-toast.gif)


#### Enter and Exit Duration

```js
let options = {
    advanced: {
        enterDuration: 1000, // default
        exitDuration: 1000 // default
    }
}
```

#### Toast Distance from Each Other and Web Page

```js
let options = {
    advanced: {
        vDistance: 10, // Distance from Top,Bottom(By px) - default
        hDistance: 10 //  Distance from Right,Left(By px) - default
    }
}
```

### Show the toast

```js
toast.show()
```
