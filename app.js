const d = require('./inc/defaultOptions.js')
const icon = require('./inc/icon.js')
const enter = require('./inc/handleEnter')
const exit = require('./inc/handleExit')

class app {

    constructor(message, options = null) {

        this.options = { ...d.getDefaultOptions(), ...options }
        this.icon = this.options.icon;
        this.message = message;
        this.enter = this.options.in;
        this.exit = this.options.out;
        this.handle();

    }

    handle() {

        this.createElement();
        this.styleElement();

    }

    createElement() {

        const e = document.createElement('div')
        if (document.getElementsByClassName('mini-toast').length == 0 || this.options.overlayToast === true) {
            e.setAttribute('mini-toast-id', 1);
        } else {
            for(let i = 1; i <= document.getElementsByClassName('mini-toast').length + 1; i++) {
                if(!document.querySelector("[mini-toast-id='" + i + "']") && !e.getAttribute('mini-toast-id')) {
                    e.setAttribute('mini-toast-id', i);
                }
            }
        }
        e.setAttribute("class", "mini-toast");
        this.e = e;
        this.setIcon();
        this.setMessage();
        this.setCloseButton();


    }

    setMessage() {
        const e = document.createElement('span');
        e.innerHTML = this.message
        this.e.appendChild(e);
    }

    setIcon() {

        if (this.icon !== 'none') {
            this.e.innerHTML += "<span style='margin:0 5px; display:inline-block; vertical-align: middle;'>" + icon.getIcon(this.icon, this.options.iconColor) + "</span>";
        }

    }
    
    setCloseButton() {
        if (this.options.canClose === true) {
            const closeElement = document.createElement('span');
            closeElement.style.verticalAlign = 'middle';
            closeElement.style.margin = '0 5px';
            closeElement.style.display = 'inline-block';
            closeElement.style.cursor = 'pointer';
            closeElement.innerHTML += icon.getIcon('close', this.options.closeIconColor);
            let thisClass = this;
            closeElement.addEventListener('click', function () { thisClass.closeToastWithButton() });
            this.e.appendChild(closeElement);
        }
    }

    styleElement() {

        const e = this.e
        document.body.appendChild(e)
        e.style.position = 'fixed'
        e.style.display = 'block'
        e.style.backgroundColor = this.options.bgColor
        e.style.padding = this.options.padding
        e.style.color = this.options.textColor
        e.style.opacity = 0
        e.style.transition = 'opacity ' + this.options.enterDuration + 'ms';
        e.style.fontSize = this.options.fontSize;
        e.style.boxShadow = '0px 6px 17px 2px rgba(0,0,0,0.10)'
        e.style.borderRadius = this.options.borderRadius
        e.style.fontFamily = this.options.fontFamily
        e.style.direction = this.options.dir

        this.e = e

    }

    show() {

        enter.handle(this.e, this.options.position, this.options.in, this.options.enterDuration);
        setTimeout(() => this.e.style.opacity = 1, 100);

        if (this.options.onlyClose === false) {
            this.closeToastWithTime()
        }
    }

    closeToastWithTime() {


        setTimeout(() => exit.handle(this.e, this.options.position, this.options.out, this.options.enterDuration) , this.options.showTime);

        setTimeout(() => this.e.remove(), this.options.showTime + 1000)

    }

    closeToastWithButton() {

        exit.handle(this.e, this.options.position, this.options.out, this.options.enterDuration)
    
        setTimeout(() => this.e.remove(), 1000);
    }
}



module.exports = app