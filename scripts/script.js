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
