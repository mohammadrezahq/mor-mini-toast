class toast {    

    defaultOptions = {
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
    init(message, type = 'simple', options = null) {

        this.options = Object.assign({}, this.defaultOptions, options)
        this.type = type
        this.message = message
        this.handle()
        return this

    }
    handle() {

        this.creatElement()
        if (this.type !== 'simple') {
            var style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = '.mini-toast-icon-style { color: red; }';
            document.getElementsByTagName('head')[0].appendChild(style);
            this.e.innerHTML += "<span style='margin:0 5px; display:inline-block; vertical-align: middle;'>" + this.getIcon(this.type) + "</span>";
            document.getElementsByClassName('mini-toast-icon').className = 'mini-toast-icon-style';
        }
        this.styleElement()

    }
    getIcon(type) {
        if (type == 'success') {
            return `
            <svg color="` + this.options.iconColor + `"xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path class="clr-i-outline clr-i-outline-path-1" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2zm0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14z" fill="currentColor"/><path class="clr-i-outline clr-i-outline-path-2" d="M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05l-6-6A1 1 0 0 0 8 18.53L15.49 26L28 13.52a1 1 0 0 0 0-1.42z" fill="currentColor"/></svg>
            `
        }                    
        
        if (type == 'alert') {
            return `
            <svg color="` + this.options.iconColor + `"xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 7v6m0 3.5v.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></g></svg>
            `
        }                    
        
        if (type == 'error') {
            return `
            <svg color="` + this.options.iconColor + `"xmlns="http://www.w3.org/2000/svg" color="white" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.6 1c1.6.1 3.1.9 4.2 2c1.3 1.4 2 3.1 2 5.1c0 1.6-.6 3.1-1.6 4.4c-1 1.2-2.4 2.1-4 2.4c-1.6.3-3.2.1-4.6-.7c-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1c.8-1.1 1.3-2.4 1.2-3.8c0-1.6-.6-3.2-1.7-4.3c-1-1-2.2-1.6-3.6-1.7c-1.3-.1-2.7.2-3.8 1c-1.1.8-1.9 1.9-2.3 3.3c-.4 1.3-.4 2.7.2 4c.6 1.3 1.5 2.3 2.7 3c1.2.7 2.6.9 3.9.6zM7.9 7.5L10.3 5l.7.7l-2.4 2.5l2.4 2.5l-.7.7l-2.4-2.5l-2.4 2.5l-.7-.7l2.4-2.5l-2.4-2.5l.7-.7l2.4 2.5z"/></g></svg>
            `
        }
    }
    creatElement() {

        const e = document.createElement('div')
        e.innerHTML = this.message
        this.e = e

    }
    styleElement() {

        const e = this.e
        document.body.appendChild(e)
        e.style.opacity = 0
        e.style.position = 'absolute'
        e.style.display = 'block'
        e.style.top = this.options.position.top
        e.style.right = this.options.position.right
        e.style.left = this.options.position.left
        e.style.bottom = this.options.position.bottom
        e.style.backgroundColor = this.options.bgColor
        e.style.padding = this.options.padding
        e.style.color = this.options.textColor
        e.style.transition = 'opacity 1s'
        e.style.fontSize = this.options.fontSize
        e.style.boxShadow = '0px 6px 17px 2px rgba(0,0,0,0.38)'
        e.style.borderRadius = this.options.borderRadius
        e.style.fontFamily = this.options.fontFamily
        this.e = e

    }
    show() {

        setTimeout(() => this.e.style.opacity = 1, 100)
        setTimeout(() => this.e.style.opacity = 0, this.options.showTime)
        setTimeout(() => this.e.remove(), this.options.showTime + 1100)
        
    }
}

module.exports = new toast()