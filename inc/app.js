const Style = require('./style.js')
const defaultOptions = require('./defaultOptions.js')
const icon = require('./icon.js')

class app {

    constructor(message, type = 'simple', options = null) {

        this.options = Object.assign({}, defaultOptions, options)
        this.type = type
        this.message = message
        this.enter = this.options.in
        this.exit = this.options.out
        this.handle()

    }

    handle() {

        this.createElement();
        new Style();
        this.styleElement();
        this.setPosition();

    }

    createElement() {

        const e = document.createElement('div')
        e.setAttribute("class", "mini-toast");
        this.e = e
        this.setIcon();
        this.setMessage();
        if (this.options.canClose === true) {
            const closeElement = document.createElement('span');
            closeElement.classList.add('close-toast-button');
            closeElement.innerHTML += icon.getIcon('close', this.options.advanced.closeIconColor);
            let event = this;
            closeElement.addEventListener('click', function() { closeToastWithButton(event.e, event.exitStyle) })
            this.e.appendChild(closeElement);
        }

    }

    setMessage() {
        const e = document.createElement('span');
        e.innerHTML = this.message
        this.e.appendChild(e);
    }

    setIcon() {

        if (this.type !== 'simple') {
            this.e.innerHTML += "<span style='margin:0 5px; display:inline-block; vertical-align: middle;'>" + icon.getIcon(this.type, this.options.iconColor) + "</span>";
        }

    }

    styleElement() {

        const e = this.e
        document.body.appendChild(e)
        e.style.opacity = 0
        e.style.position = 'fixed'
        e.style.display = 'block'
        e.style.backgroundColor = this.options.bgColor
        e.style.padding = this.options.padding
        e.style.color = this.options.textColor
        e.style.transition = 'opacity 1s'
        e.style.fontSize = this.options.fontSize
        e.style.boxShadow = '0px 6px 17px 2px rgba(0,0,0,0.10)'
        e.style.borderRadius = this.options.borderRadius
        e.style.fontFamily = this.options.fontFamily
        e.style.direction = this.options.dir

        this.e = e

    }
    
    setPosition() {
        let v = this.options.position.v
        let h = this.options.position.h

        if (v === 'top') { 
            let length = document.getElementsByClassName('mini-toast').length;
            if (length == 1) {
                this.e.style.top = '10px' ;
            } else {
                let top = document.getElementsByClassName('mini-toast')[length - 2].offsetTop + 50;
                top += "px";
                this.e.style.top = top;
            }
        }

        if (v === 'bottom') { 
            let length = document.getElementsByClassName('mini-toast').length;
            if (length == 1) {
                this.e.style.bottom = '10px' ;
            } else {
                let bottom = document.getElementsByClassName('mini-toast')[length - 2].style.bottom;
                bottom = bottom.replace('px', '');
                bottom = parseInt(bottom)
                bottom += 50
                bottom += "px";
                this.e.style.bottom = bottom;
            }
            console.log(document.getElementsByClassName('mini-toast'))
        }

        if (v === 'center') { 
            this.e.style.top = '50%' 
            this.e.style.transform = 'translateY(-50%)'
        }

        // ------------------------

        if (h === 'right') { 
            this.setInOutStyle('right')
        }

        if (h === 'left') { 
            this.setInOutStyle('left')
        }

        if (h === 'center') { 
            this.setInOutStyle('center', v)
        }

    }

    setInOutStyle(position, v = null) {
        if (this.options.in === 'slide') {

            if (position === 'right') {

                this.enterStyle = 'right'
                this.e.style.right = '-15em' 
                this.e.classList.add('slideFromRight')


            } else if (position === "left") {

                this.enterStyle = 'left'
                this.e.style.left = '-15em' 
                this.e.classList.add('slideFromLeft')

            } else {

                if (v === 'bottom') {

                    this.enterStyle = 'bottom'
                    this.e.style.bottom = '-50px' 
                    this.e.style.left = '50%' 
                    this.e.style.transform = 'translateX(-50%)'
                    this.e.classList.add('slideFromBottom')

                } else if (v === "top") {

                    this.enterStyle = 'top'
                    this.e.style.top = '-50px' 
                    this.e.style.left = '50%' 
                    this.e.style.transform = 'translateX(-50%)'
                    this.e.classList.add('slideFromTop')

                } else {

                    this.enterStyle = 'fade'
                    this.e.style.left = '50%' 
                    this.e.style.transform = 'translateX(-50%)'

                }

            }

        } else if (this.options.in === 'fade') {

            if (position === 'right') {

                this.enterStyle = 'fade'
                this.e.style.right = '10px' 


            } else if (position === "left") {

                this.enterStyle = 'fade'
                this.e.style.left = '10px' 

            } else {

                this.enterStyle = 'fade'
                this.e.style.left = '50%' 
                this.e.style.transform = 'translateX(-50%)'

            }

        }

        if (this.options.out === "slide") {


            if (position === 'right') {

                this.exitStyle = 'right'


            } else if (position === "left") {

                this.exitStyle = 'left'

            } else if (position === "center") {

                if (v === 'top') {

                    this.exitStyle = 'top'

                } else if (v === 'bottom') {

                    this.exitStyle = 'bottom'

                }
            }

        } else if (this.options.out === "fade") {

            this.exitStyle = 'fade'

        }
        
    }
    
    show() {

        setTimeout(() => this.e.style.opacity = 1, 100);

        if (this.options.onlyClose === false) {
            this.closeToastWithTime()
        }
    }

    closeToastWithTime() {

        if (this.exitStyle == 'right') {

            setTimeout(() => this.e.style.right = "10px", this.options.showTime);

            setTimeout(() => this.e.classList.add('slideToRight'), this.options.showTime);

        } else if (this.exitStyle == 'left') {

            setTimeout(() => this.e.style.left = "10px", this.options.showTime);

            setTimeout(() => this.e.classList.add('slideToLeft'), this.options.showTime);

        } else if (this.exitStyle == 'bottom') {

            setTimeout(() => this.e.style.bottom = "10px", this.options.showTime);

            setTimeout(() => this.e.classList.add('slideToBottom'), this.options.showTime);

        } else if (this.exitStyle == 'top') {

            setTimeout(() => this.e.style.top = "10px", this.options.showTime);

            setTimeout(() => this.e.classList.add('slideToTop'), this.options.showTime);

        } else {

            setTimeout(() => this.e.style.opacity = 0, this.options.showTime)

        }

        setTimeout(() => this.e.remove(), this.options.showTime + 500)

    }
}

function closeToastWithButton(e, exitStyle) {

    if (exitStyle == 'right') {

        e.style.right = "10px";
        e.classList.add('slideToRight');

    } else if (exitStyle == 'left') {

        e.style.left = "10px";

        e.classList.add('slideToLeft');

    } else if (exitStyle == 'bottom') {

        e.style.bottom = "10px";

        e.classList.add('slideToBottom');

    } else if (exitStyle == 'top') {

        e.style.top = "10px";

        e.classList.add('slideToTop');

    } else {

        e.style.opacity = 0;

    }


    setTimeout(() => e.remove(), 1000)
}

module.exports = app