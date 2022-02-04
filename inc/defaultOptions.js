function getDefaultOptions() {
    defaultOptions = {
        position: 'top-left',
        icon: 'success',
        in: 'slide-left',
        out: 'slide-left', 
        showTime: 3000,
        dir: 'ltr',
        bgColor: 'white',
        textColor: 'black',
        iconColor: 'black',
        border: 'none',
        borderRadius: '10px',
        fontSize: '16px',
        padding: '10px',
        fontFamily: 'Tahoma',
        closeIconColor: 'black',
        canClose: false, 
        onlyClose: false,
        overlayToast: false,
        enterDuration: 1000,
        exitDuration: 1000,
    }

    return defaultOptions;
}

module.exports = {
    getDefaultOptions
}