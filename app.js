document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("music");
    const playlist = [
        "cancion1.mp3",
        "cancion2.mp3",
        "cancion3.mp3"
    ];
    let index = 0;

    function playNext() {
        index = (index + 1) % playlist.length;
        music.src = playlist[index];
        music.play();
    }

    music.src = playlist[index];
    music.play();
    music.addEventListener("ended", playNext);
});