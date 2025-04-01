const songs = [
    { name: "Nicki Nicole - Llámame", src: "assets/songs/Nicki Nicole - Llámame.mp3" },
    { name: "Wos - Okupa", src: "assets/songs/Wos - Okupa.mp3" },
    { name: "The Neighbourhood - Compass", src: "assets/songs/The Neighbourhood - Compass.mp3" },
    { name: "The Weekend - Die For You", src: "assets/songs/The Weekend - Die For You.mp3" },
    { name: "Trueno - SOLO POR VOS", src: "assets/songs/Trueno - SOLO POR VOS.mp3" },
    { name: "Nicki Nicole - Me Gusta", src: "assets/songs/Nicki Nicole - Me Gusta.mp3" },
    { name: "Shye - Love U", src: "assets/songs/Shye - Love U.mp3" },
    { name: "The Neighbourhood - You Get Me So High", src: "assets/songs/The Neighbourhood - You Get Me So High.mp3" },
    { name: "Lady Gaga, Bruno Mars - Die With A Smile", src: "assets/songs/Lady Gaga, Bruno Mars - Die With A Smile.mp3" },
    { name: "COSMIC KID - COSMIC GIRL", src: "assets/songs/COSMIC KID - COSMIC GIRL.mp3" },
    { name: "Nicki Nicole - Nos Encontramos", src: "assets/songs/Nicki Nicole - Nos Encontramos.mp3" },
    { name: "Patrick Watson - Je te laisserai des mots", src: "assets/songs/Patrick Watson - Je te laisserai des mots.mp3" }
];

let currentSongIndex = localStorage.getItem("currentSongIndex") 
    ? parseInt(localStorage.getItem("currentSongIndex")) 
    : 0;

let savedTime = localStorage.getItem("currentTime") 
    ? parseFloat(localStorage.getItem("currentTime")) 
    : 0;

const audio = new Audio(songs[currentSongIndex].src);
const songName = document.getElementById("song-name");
const playPauseBtn = document.getElementById("play-pause");
const nextBtn = document.getElementById("next");
const volumeControl = document.getElementById("volume");

audio.currentTime = savedTime;

function updateSong() {
    songName.textContent = songs[currentSongIndex].name;
    audio.src = songs[currentSongIndex].src;
    audio.currentTime = 0;
    audio.play();
    playPauseBtn.textContent = "⏸️";

    localStorage.setItem("currentSongIndex", currentSongIndex);
    localStorage.setItem("currentTime", 0);
}

playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸️";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶️";
    }
});

nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSong();
});

volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
});

setInterval(() => {
    localStorage.setItem("currentTime", audio.currentTime);
}, 1000);

audio.addEventListener("ended", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSong();
});

audio.play();
songName.textContent = songs[currentSongIndex].name;

let currentIndex = [0, 0, 0];

function moveSlide(step, galleryIndex) {
    let slides = document.querySelectorAll(`.slide-${galleryIndex}`);
    
    slides[currentIndex[galleryIndex]].style.display = "none";
    currentIndex[galleryIndex] = (currentIndex[galleryIndex] + step + slides.length) % slides.length;
    slides[currentIndex[galleryIndex]].style.display = "block";
}
