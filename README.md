# Mor Mini Toast for JavaScript


> Read the documentation here: https://mohammadrezahq.github.io/mor-mini-toast/


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

<b>Learn more in the documentation</b>

### Show the toast

```
toast.show()
```