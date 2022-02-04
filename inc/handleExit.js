const positions = {
    'top-right': {
        v: 'top',
        h: 'right',
        vOpposite: 'bottom',
        hOpposite: 'left'
    },
    'top-center': {
        v: 'top',
        h: 'center',
        vOpposite: 'bottom',
        hOpposite: ''
    },    
    'top-left': {
        v: 'top',
        h: 'left',
        vOpposite: 'bottom',
        hOpposite: 'right'
    },
    'middle-right': {
        v: 'middle',
        h: 'right',
        vOpposite: '',
        hOpposite: 'left'
    },
    'middle-center': {
        v: 'middle',
        h: 'center',
        vOpposite: '',
        hOpposite: ''
    },
    'middle-left': {
        v: 'middle',
        h: 'left',
        vOpposite: '',
        hOpposite: 'right'
    },
    'bottom-right': {
        v: 'bottom',
        h: 'right',
        vOpposite: 'top',
        hOpposite: 'left'
    },
    'bottom-center': {
        v: 'bottom',
        h: 'center',
        vOpposite: 'top',
        hOpposite: ''
    },    
    'bottom-left': {
        v: 'bottom',
        h: 'left',
        vOpposite: 'top',
        hOpposite: 'right'
    }
};

const styles = {
    'slide-top': {
        animation: 'slide',
        direction: 'top'
    },    
    'slide-right': {
        animation: 'slide',
        direction: 'right'
    },    
    'slide-bottom': {
        animation: 'slide',
        direction: 'bottom'
    },    
    'slide-left': {
        animation: 'slide',
        direction: 'left'
    },
    'fade': {
        animation: 'fade'
    }
}

const verticalPositions = ['top', 'middle', 'bottom'];
const horizontalPositions = ['left', 'center', 'right'];


function handle(element, position, exit, duration) {
    
    let verticalPosition = positions[position].v; 
    let horizontalPosition = positions[position].h; 
    let verticalOpposite = positions[position].vOpposite;
    let horizontalOpposite = positions[position].hOpposite;

    let exitAnimation = styles[exit].animation; 
    let exitDirection = styles[exit].direction; 


    element.style.minWidth = (element.offsetWidth - 20) + 'px';

    if (exitAnimation == 'slide') {

        let keyframes = {};


        if (verticalPositions.includes(exitDirection)) {

            if (element.style[exitDirection] !== '') {


                keyframes[exitDirection] = '-50px';


            } else {

                if (verticalPosition == 'middle') {
                    verticalPosition = (element.style.top == '') ? 'bottom' : 'top'; 
                }

                if (verticalPosition == exitDirection) {

                    keyframes[verticalOpposite] = window.innerHeight + 50;
                    keyframes[verticalOpposite] += 'px';

                } else {

                    keyframes[verticalPosition] = window.innerHeight + 50;
                    keyframes[verticalPosition] += 'px';

                }

            }

        }

        if (horizontalPositions.includes(exitDirection)) {


            if (element.style[exitDirection] !== '') {

                keyframes[exitDirection] = '-15em';


            } else {

                if (horizontalPosition == 'center') {
                    horizontalPosition = (element.style.left == '') ? 'right' : 'left'; 
                }

                if (horizontalPosition == exitDirection) {

                    keyframes[horizontalOpposite] = window.innerWidth + element.offsetWidth;
                    keyframes[horizontalOpposite] += 'px';

                } else {

                    keyframes[horizontalPosition] = window.innerWidth + element.offsetWidth;
                    keyframes[horizontalPosition] += 'px';

                }

            }


        }

        element.animate([keyframes], {
            duration: duration,
            easing: 'ease-in-out',
            fill: 'forwards'
        });

    } else if (exitAnimation == 'fade') {

        element.style.opacity = 0;

    }
}

module.exports = {
    handle
}