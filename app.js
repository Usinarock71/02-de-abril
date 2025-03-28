document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("music");
    const songTitle = document.getElementById("songTitle");
    const playPauseBtn = document.getElementById("playPause");
    const nextBtn = document.getElementById("next");
    const volumeControl = document.getElementById("volume");
    const musicContainer = document.querySelector(".music-container");

    const playlist = [
        "assets/songs/Nicki Nicole - Llámame (Audio).mp3",
        "assets/songs/Wos - Okupa",
        "assets/songs/The Neighbourhood - Compass",
        "assets/songs/The Weekend - Die For You",
        "assets/songs/Trueno - SOLO POR VOS",
        "assets/songs/Nicki Nicole - Me Gusta",
        "assets/songs/Shye - Love U.",
        "assets/songs/The Neighbourhood - You Get Me So High",
        "assets/songs/Lady Gaga, Bruno Mars - Die With A Smile",
        "assets/songs/COSMIC KID - COSMIC GIRL",
        "assets/songs/Nicki Nicole - Nos Encontramos",
        "assets/songs/Patrick Watson - Je te laisserai des mots"
    ];
    let index = 0;

    function updateSong() {
        music.src = playlist[index];
        const songName = playlist[index].split('/').pop();
        songTitle.textContent = "Reproduciendo: " + songName;
        musicContainer.setAttribute("data-title", "🎵 " + songName);
        musicContainer.setAttribute("data-title", "🎵 " + playlist[index]);
        music.play();
    }

    function playNext() {
        index = (index + 1) % playlist.length;
        updateSong();
    }

    playPauseBtn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            playPauseBtn.textContent = "Pausar";
        } else {
            music.pause();
            playPauseBtn.textContent = "Reproducir";
        }
    });

    nextBtn.addEventListener("click", playNext);

    volumeControl.addEventListener("input", (e) => {
        music.volume = e.target.value;
    });

    music.addEventListener("ended", playNext);
    updateSong();
});