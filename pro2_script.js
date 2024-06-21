let speech = new SpeechSynthesisUtterance();
let voices = []
let speechSelect = document.querySelector("select")

document.querySelector("textarea").focus();

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    
    voices.forEach((voice, i) => (speechSelect.options[i] = new Option(voice.name, i)));
}

speechSelect.addEventListener("change", () => {
    speech.voice = voices[speechSelect.value];
});

function speak() {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
}
