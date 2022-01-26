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
let toast = MiniToast.init(String message, String type = 'simple', Object options)

// message will be the text of the toast

// types are 'simple: with no icon', 'alert', 'success', 'error'
```

#### Options

```
    options = {
        showTime: 4000,
        bgColor: 'white',
        textColor: 'black',
        iconColor: 'black',
        border: 'none',
        borderRadius: '10px',
        fontSize: '24px',
        padding: '10px',
        fontFamily: 'Tahoma',
        position: {
            top: '10px',
            right: '10px',
            bottom: '',
            left: ''
        }
    }

```

### Show the toast

```
toast.show()
```