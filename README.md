# Mor Mini Toast for JavaScript


#### Mor mini toast is outdated.
#### Use https://github.com/mohammadrezahq/more-toast instead.


~~### Setup:

~~Install package with npm:

```
npm i mor-mini-toast
```

~~Import package directly on web page:

```html
<script src="https://unpkg.com/mor-mini-toast@3.x/umd/bundle.js"></script>
```
~~### Import

```js
import MiniToast from 'mor-mini-toast'

// OR

const MiniToast = require('mor-mini-toast')
```

~~### Initialize

```js
let toast = MiniToast.init(String message, Object options)

// Message will be the text of the toast

// With bundle.js use this:
let toast = window.miniToast.init(String message, Object options)

```

~~### Set Position

```js
let options = {
    position: 'top-left' // default 
}
```
~~The position of the toast should be a combination of a vertical position and - a horizontal position: 'top-left', 'middle-center', 'bottom-right'

~~<b>Learn more in the documentation</b>

~~### Show the toast

```js
toast.show()
```
