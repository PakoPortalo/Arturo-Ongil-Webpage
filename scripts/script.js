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
});
