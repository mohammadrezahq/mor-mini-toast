const app = require('./app.js')

class toast {

    init(message, options = null) {

        const toast = new app(message, options);
        this.toast = toast;

        return this;

    }


    show() {

        this.toast.show()

    }

}

module.exports = new toast()
