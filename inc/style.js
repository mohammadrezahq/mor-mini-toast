class Style {
  constructor() {
    if (document.querySelectorAll('[mini-toast-style]').length === 0) {
      var slideStyle = document.createElement('style')
      slideStyle.innerHTML = `
          .close-toast-button {
              margin:0 10px;
              cursor:pointer;
              display:inline-block;
              vertical-align: middle;
          }
          .slide-from-right {
              -webkit-animation: slide-from-left-keyframe 0.5s forwards;
              -webkit-animation-delay: 0.1s;
              animation: slide-from-left-keyframe 0.5s forwards;
              animation-delay: 0.1s;
          }

          .slide-to-left {
              -webkit-animation: slide-to-left-keyframe 0.5s forwards;
              -webkit-animation-delay: 0.1s;
              animation: slide-to-left-keyframe 1s forwards;
              animation-delay: 0.1s;
          }

          .slide-from-right {
              -webkit-animation: slide-from-right-keyframe 0.5s forwards;
              -webkit-animation-delay: 0.1s;
              animation: slide-from-right-keyframe 0.5s forwards;
              animation-delay: 0.1s;
          }

          .slide-to-right {
              -webkit-animation: slide-to-right-keyframe 1s forwards;
              -webkit-animation-delay: 0.1s;
              animation: slide-to-right-keyframe 1s forwards;
              animation-delay: 0.1s;   
          }

          .slide-from-bottom {
              -webkit-animation: slide-from-bottom-keyframe 1s forwards;
              -webkit-animation-delay: 0.1s;
              animation: slide-from-bottom-keyframe 1s forwards;
              animation-delay: 0.1s;   
          }

          .slide-from-top {
              -webkit-animation: slide-from-top-keyframe 1s forwards;
              -webkit-animation-delay: 0.1s;
              animation: slide-from-top-keyframe 1s forwards;
              animation-delay: 0.1s;   
          }

          .slide-to-bottom {
              -webkit-animation: slide-to-bottom-keyframe 1s forwards;
              -webkit-animation-delay: 0.1s;
              animation: slide-to-bottom-keyframe 1s forwards;
              animation-delay: 0.1s;   
          }

          .slide-to-top {
              -webkit-animation: slide-to-top-keyframe 1s forwards;
              -webkit-animation-delay: 0.1s;
              animation: slide-to-top-keyframe 1s forwards;
              animation-delay: 0.1s;  
          }

          @-webkit-keyframes slide-from-left-keyframe {
              100% { left: 10px; }
          }

          @keyframes slide-from-left-keyframe {
              100% { left: 10px; }
          }
          
          @-webkit-keyframes slide-to-left-keyframe {
              0% { left: 10px; }
              100% { left: -15em; }
          }

          @keyframes slide-to-left-keyframe {
              0% { left: 10px; }
              100% { left: -15em; }
          }

          @-webkit-keyframes slide-from-right-keyframe {
              100% { right: 10px; }
          }

          @keyframes slide-from-right-keyframe {
              100% { right: 10px; }
          }                        
          
          @-webkit-keyframes slide-to-right-keyframe {
              0% { right: 10px; }
              100% { right: -15em; }
          }

          @keyframes slide-to-right-keyframe {
              0% { right: 10px; }
              100% { right: -15em; }
          }

          @-webkit-keyframes slide-from-bottom-keyframe {
              100% { bottom: 10px; }
          }

          @keyframes slide-from-bottom-keyframe {
              100% { bottom: 10px; }
          }

          @-webkit-keyframes slide-from-top-keyframe {
              100% { top: 10px; }
          }

          @keyframes slide-for-center-keyframe {
              100% { top: 10px; }
          }

          @-webkit-keyframes slide-to-bottom-keyframe {
              0% { bottom: 10px; }
              100% { bottom: -50px; }
          }

          @keyframes slide-to-bottom-keyframe {
              0% { bottom: 10px; }
              100% { bottom: -50px; }
          }

          @-webkit-keyframes slide-to-top-keyframe {
              0% { top: 10px; }
              100% { top: -50px; }
          }

          @keyframes slide-to-top-keyframe {
              0% { top: 10px; }
              100% { top: -50px; }
          }
      `;

      slideStyle.setAttribute('mini-toast-style', "")
      document.getElementsByTagName('head')[0].appendChild(slideStyle);
    }
  }
}

module.exports = Style