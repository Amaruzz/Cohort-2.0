const noteMap = {
  "C": "a",
  "C#": "d",
  "D": "e",
  "D#": "f",
  "E": "g",
  "F": "i",
  "F#": "o",
  "G": "p",
  "G#": "q",
  "A": "r",
  "A#": "s",
  "B": "t",
  "Cc":"u",
  "Dd":"w",
  "Ff":"y",
  "Gg":"a",
  "Aa":"d",
};

function playNote(note) {
  const audio = new Audio(`${noteMap[note]}.mp3`);
  audio.currentTime = 0;
  audio.play();
}

// Select all piano keys
const keys = document.querySelectorAll('.key');

// Add click event listener to each key
keys.forEach(key => {
  key.addEventListener('click', function() {
    const note = this.getAttribute('data-note');
    playNote(note);
  });
});
