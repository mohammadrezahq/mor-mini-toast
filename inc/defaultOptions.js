function getDefaultOptions() {
    defaultOptions = {
        in: 'slide', // slide, fade
        out: 'slide', 
        showTime: 2000,
        bgColor: 'white',
        textColor: 'black',
        iconColor: 'black',
        border: 'none',
        borderRadius: '10px',
        fontSize: '16px',
        padding: '10px',
        fontFamily: 'Tahoma',
        dir: 'ltr',
        canClose: false, 
        onlyClose: false,
        position: {
            v: 'top', // top, bottom, center
            h: 'right' // left, right, center
        },
        advanced: {
            closeIconColor: 'black'
        }
    }

    return defaultOptions;
}

module.exports = getDefaultOptions()