document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const progressBar = document.querySelector('.progress-bar');
    const progress = document.querySelector('.progress');
    const progressDot = document.querySelector('.progress-dot');

    function togglePlay() {
        if (audio.paused) {
            audio.play().catch((error) => {
                console.error('Error al intentar reproducir el audio:', error);
                alert("No se pudo reproducir el audio. Intenta nuevamente.");
            });
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    }
    

    playPauseButton.addEventListener('click', togglePlay);

    audio.addEventListener('timeupdate', () => {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progress.style.width = percentage + '%';
        progressDot.style.left = percentage + '%';
    });

    audio.addEventListener('ended', () => {
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        progress.style.width = '0%';
        progressDot.style.left = '0%';
    });

    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const pos = e.clientX - rect.left;
        const percentage = pos / progressBar.offsetWidth;
        audio.currentTime = percentage * audio.duration;
    });
});
