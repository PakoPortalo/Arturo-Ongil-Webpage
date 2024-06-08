document.addEventListener("DOMContentLoaded", function() {
    var videos = [
        'img/bg-video1.mp4',
        'img/bg-video2.mp4',
        'img/bg-video3.mp4',
        'img/bg-video4.mp4'
    ];

    var randomVideo = videos[Math.floor(Math.random() * videos.length)];
    var videoElement = document.getElementById('bg-video');
    videoElement.setAttribute('src', randomVideo);

    // Espera hasta que el video esté cargado para iniciar el fade-in
    videoElement.addEventListener('canplaythrough', function() {
        videoElement.classList.add('fade-in');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var navMenu = document.getElementById('nav-menu');
    
    var navHeight = document.getElementById('nav-height');

    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        navHeight.classList.toggle('show');
    });
    

    // Solicitar pantalla completa en dispositivos compatibles
    function requestFullscreen() {
        var el = document.documentElement;
        var rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        if (rfs) {
            rfs.call(el);
        }
    }

    // Solicitar pantalla completa al cargar la página en dispositivos móviles
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        requestFullscreen();
    }
});
