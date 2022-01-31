const app = require('./inc/app.js')

class toast {

    init(message, type = 'simple', options = null) {

        const toast = new app(message, type, options)

        this.toast = toast

        return this

    }


    show() {

        this.toast.show()

    }

}

module.exports = new toast()
