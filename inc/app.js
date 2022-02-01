const Style = require('./style.js')
const defaultOptions = require('./defaultOptions.js')

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
            closeElement.innerHTML += this.getIcon('close');
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
            this.e.innerHTML += "<span style='margin:0 5px; display:inline-block; vertical-align: middle;'>" + this.getIcon(this.type) + "</span>";
        }

    }

    getIcon(type) {
        if (type === 'success') {
            return `
<svg color="` + this.options.iconColor + `"xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path class="clr-i-outline clr-i-outline-path-1" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2zm0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14z" fill="currentColor"/><path class="clr-i-outline clr-i-outline-path-2" d="M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05l-6-6A1 1 0 0 0 8 18.53L15.49 26L28 13.52a1 1 0 0 0 0-1.42z" fill="currentColor"/></svg>
`
        }

        if (type === 'alert') {
            return `
<svg color="` + this.options.iconColor + `"xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 7v6m0 3.5v.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></g></svg>
`
        }

        if (type === 'error') {
            return `
<svg color="` + this.options.iconColor + `"xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.6 1c1.6.1 3.1.9 4.2 2c1.3 1.4 2 3.1 2 5.1c0 1.6-.6 3.1-1.6 4.4c-1 1.2-2.4 2.1-4 2.4c-1.6.3-3.2.1-4.6-.7c-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1c.8-1.1 1.3-2.4 1.2-3.8c0-1.6-.6-3.2-1.7-4.3c-1-1-2.2-1.6-3.6-1.7c-1.3-.1-2.7.2-3.8 1c-1.1.8-1.9 1.9-2.3 3.3c-.4 1.3-.4 2.7.2 4c.6 1.3 1.5 2.3 2.7 3c1.2.7 2.6.9 3.9.6zM7.9 7.5L10.3 5l.7.7l-2.4 2.5l2.4 2.5l-.7.7l-2.4-2.5l-2.4 2.5l-.7-.7l2.4-2.5l-2.4-2.5l.7-.7l2.4 2.5z"/></g></svg>
`
        }

        if (type === 'close') {
            return `
<svg color="` + this.options.advanced.closeIconColor + `" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42z"/></svg>
            `
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