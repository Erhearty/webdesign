document.addEventListener("DOMContentLoaded", () => {
    const playPauseButton = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeElement = document.getElementById('current-time');
    const totalDurationElement = document.getElementById('total-duration');
    const currentTrackElement = document.getElementById('current-track');
    const willPlayNext = document.getElementById('will-play-next');
    const nextTracks = document.getElementById('next-tracks');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');

    let isPlaying = false;
    let progressInterval;
    let currentIndex = 0;

    // Retrieve selected media from localStorage
    const selectedMedia = JSON.parse(localStorage.getItem('selectedMedia')) || [];

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function updatePlayback() {
        if (selectedMedia.length === 0) return;

        const currentMedia = selectedMedia[currentIndex];
        currentTrackElement.textContent = `Now Playing: ${currentMedia.name}`;
        totalDurationElement.textContent = `/ ${currentMedia.duration}`;
        progressBar.value = 0;
        currentTimeElement.textContent = "0:00";

        // Update "Will Play Next" section
        nextTracks.innerHTML = '';
        if (currentIndex + 1 < selectedMedia.length) {
            willPlayNext.classList.remove('hidden');
            selectedMedia.slice(currentIndex + 1).forEach((item) => {
                const listItem = document.createElement('li');
                listItem.textContent = item.name;
                nextTracks.appendChild(listItem);
            });
        } else {
            willPlayNext.classList.add('hidden');
        }

        // Enable/disable Next and Previous buttons
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === selectedMedia.length - 1;
    }

    playPauseButton.addEventListener('click', () => {
        if (selectedMedia.length === 0) return;

        const [minutes, seconds] = selectedMedia[currentIndex].duration.split(':').map(Number);
        const totalSeconds = minutes * 60 + seconds;

        if (isPlaying) {
            playPauseButton.classList.remove('playing');
            clearInterval(progressInterval);
        } else {
            playPauseButton.classList.add('playing');

            let elapsedSeconds = Math.floor((progressBar.value / 100) * totalSeconds);

            progressInterval = setInterval(() => {
                if (elapsedSeconds < totalSeconds) {
                    elapsedSeconds++;
                    currentTimeElement.textContent = formatTime(elapsedSeconds);
                    progressBar.value = (elapsedSeconds / totalSeconds) * 100;
                } else {
                    clearInterval(progressInterval);
                    isPlaying = false;
                    playPauseButton.classList.remove('playing');

                    // Move to the next track
                    if (currentIndex + 1 < selectedMedia.length) {
                        currentIndex++;
                        updatePlayback();
                        playPauseButton.click(); // Automatically start the next track
                    }
                }
            }, 1000);
        }
        isPlaying = !isPlaying;
    });
    playPauseButton.click();

    // Event listener for Next button
    nextButton.addEventListener('click', () => {
        if (currentIndex + 1 < selectedMedia.length) {
            currentIndex++;
            updatePlayback();
            if (isPlaying) {
                playPauseButton.click(); // Restart playback for the next track
                playPauseButton.click(); // Restart playback from the new position

            }
        }
    });

    // Event listener for Previous button
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updatePlayback();
            if (isPlaying) {
                playPauseButton.click(); // Restart playback for the previous track
                playPauseButton.click(); // Restart playback from the new position

            }
        }
    });

    // Event listener for progress bar click
    progressBar.addEventListener('input', () => {
        if (selectedMedia.length === 0) return;

        const [minutes, seconds] = selectedMedia[currentIndex].duration.split(':').map(Number);
        const totalSeconds = minutes * 60 + seconds;

        const newElapsedSeconds = Math.floor((progressBar.value / 100) * totalSeconds);
        currentTimeElement.textContent = formatTime(newElapsedSeconds);

        if (isPlaying) {
            clearInterval(progressInterval);
            playPauseButton.click(); // Restart playback from the new position
            playPauseButton.click(); // Restart playback from the new position

        }
    });

    // Initialize playback
    updatePlayback();
});