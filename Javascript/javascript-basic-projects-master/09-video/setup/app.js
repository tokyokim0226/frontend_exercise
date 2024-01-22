// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn');
const video = document.querySelector(".video-container");



btn.addEventListener('click', function() {
    if (!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
    }else {
        btn.classList.remove('slide');
        video.play();
    } 
    // --> this whole functionality can be done using the toggle function
    // btn.classList.toggle('slide'); but we do not use it so we can pause/play the video
});

//preloader
const preloader = document.querySelector(".preloader");

window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader');
});