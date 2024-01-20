const pianoKeys = document.querySelectorAll(".pianoKeys .key");;

let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();
}

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
})