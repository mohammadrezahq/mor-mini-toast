const positions = {
    'top-right': {
        v: 'top',
        h: 'right',
    },
    'top-center': {
        v: 'top',
        h: 'center',
    },    
    'top-left': {
        v: 'top',
        h: 'left',
    },
    'middle-right': {
        v: 'middle',
        h: 'right',
    },
    'middle-center': {
        v: 'middle',
        h: 'center',
    },
    'middle-left': {
        v: 'middle',
        h: 'left',
    },
    'bottom-right': {
        v: 'bottom',
        h: 'right',
    },
    'bottom-center': {
        v: 'bottom',
        h: 'center',
    },    
    'bottom-left': {
        v: 'bottom',
        h: 'left',
    }
};

const styles = {
    'slide-top': {
        animation: 'slide',
        direction: 'top',
        outDistance: '-50px'
    },    
    'slide-right': {
        animation: 'slide',
        direction: 'right',
        outDistance: '-15em'
    },    
    'slide-bottom': {
        animation: 'slide',
        direction: 'bottom',
        outDistance: '-50px'
    },    
    'slide-left': {
        animation: 'slide',
        direction: 'left',
        outDistance: '-15em'
    },
    'fade': {
        animation: 'fade'
    }
}

const verticalPositions = ['top', 'middle', 'bottom'];
const horizontalPositions = ['left', 'center', 'right'];


function handle(element, position, enter, duration) {
    
    let verticalPosition = positions[position].v; 
    let horizontalPosition = positions[position].h; 

    let enterAnimation = styles[enter].animation; 
    let enterDirection = styles[enter].direction; 
    let enterOutDistance = styles[enter].outDistance; 


    element.style[enterDirection] = enterOutDistance;

    let keyframes = {};

    if (enterAnimation == 'slide') {
    
        let finalVertical;

        if (element.getAttribute('mini-toast-id') == 1) {
            finalVertical = '10px' ;
        } else {
            finalVertical = (element.getAttribute('mini-toast-id') - 1) * 61.238;
            finalVertical -= (element.getAttribute('mini-toast-id') - 2) * 10;
            finalVertical += "px";
        }
        
        if (verticalPositions.includes(enterDirection)) {

            element.style[horizontalPosition] = '10px';

            if (verticalPosition == enterDirection) {

                keyframes[enterDirection] = finalVertical;

            } else {

                let distance = window.innerHeight - 51.727;

                if (element.getAttribute('mini-toast-id') == 1) {
                    finalVertical = distance + 'px';
                } else {
                    finalVertical = distance - ( (element.getAttribute('mini-toast-id') - 1) * 51.727);
                    finalVertical += "px";
                }

                keyframes[enterDirection] = finalVertical;

            }


        }

        if (horizontalPositions.includes(enterDirection)) {

            element.style[verticalPosition] = finalVertical;

            if (enterDirection == horizontalPosition) {

                keyframes[enterDirection] = '10px';

            } else {

                let distance = window.innerWidth - element.offsetWidth;
                distance -= 10;
                distance += "px";
                keyframes[enterDirection] = distance;

            }

        }

        if (horizontalPosition == 'center') {

            if (verticalPositions.includes(enterDirection)) {

                element.style.left = '50%';
                element.style.transform = 'translateX(-50%)';

            } else {
                keyframes[enterDirection] = '50%';
                if (enterDirection == 'left') {
                    element.style.transform = 'translateX(-50%)';
                } else {
                    element.style.transform = 'translateX(50%)';
                }
            }

        }

        if (verticalPosition == 'middle' && ( horizontalPosition == 'right' || horizontalPosition == 'left' )) {

            if (verticalPositions.includes(enterDirection)) {

                element.style[horizontalPosition] = '10px';
                element.style[enterDirection] = '-50px';
                keyframes[enterDirection] = '50%';
                if (enterDirection == 'top') {
                    element.style.transform = 'translateY(-50%)';
                } else {
                    element.style.transform = 'translateY(50%)';
                }

            } else {

                element.style.top = '50%';
                element.style.transform = 'translateY(-50%)';
                element.style[enterDirection] = '-15em';
                if (enterDirection == horizontalPosition) {
                    keyframes[enterDirection] = '10px';
                } else {
                    let distance = window.innerWidth - element.offsetWidth;
                    distance -= 10;
                    distance += "px";
                    keyframes[enterDirection] = distance;
                }
                
            }

        }



        if (verticalPosition == 'middle' && horizontalPosition == 'center') {

            if (verticalPositions.includes(enterDirection)) {

                element.style.left = '50%';
                element.style[enterDirection] = '-50px';
                keyframes[enterDirection] = '50%';
                if (enterDirection == 'top') {
                    element.style.transform = 'translate(-50%, -50%)';
                } else {
                    element.style.transform = 'translate(-50%, 50%)';
                }

            } else {

                element.style.top = '50%';
                keyframes[enterDirection] = '50%';
                if (enterDirection == 'left') {
                    element.style.transform = 'translate(-50%, -50%)';
                } else {
                    element.style.transform = 'translate(50%, -50%)';
                }

            }

        }

        element.animate([keyframes], {
            duration: duration,
            easing: 'ease-in-out',
            fill: 'forwards'
        });

    } else if (enterAnimation == 'fade') {

        if (verticalPosition == 'middle') {
            element.style.top = '50%';
            element.style.transform = 'translateY(-50%)';
        } else {

            let finalVertical;

            if (element.getAttribute('mini-toast-id') == 1) {
                finalVertical = '10px' ;
            } else {
                finalVertical = (element.getAttribute('mini-toast-id') - 1) * 61.238;
                finalVertical -= (element.getAttribute('mini-toast-id') - 2) * 10;
                finalVertical += "px";
            }

            element.style[verticalPosition] = finalVertical;
        }

        if (horizontalPosition == 'center') {
            element.style.left = '50%';
            element.style.transform = 'translateX(-50%)';
        } else {
            element.style[horizontalPosition] = '10px';
        }

    }
}

module.exports = {
    handle
}