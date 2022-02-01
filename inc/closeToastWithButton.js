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

module.exports = {
    closeToastWithButton
}