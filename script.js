const sounds = [
  new Audio("assets/sounds/saber1.mp3"),
  new Audio("assets/sounds/saber2.mp3"),
  new Audio("assets/sounds/saber3.mp3"),
  new Audio("assets/sounds/saber4.mp3")
];

window.addEventListener("hashchange", () => {

  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];

  randomSound.currentTime = 0;
  randomSound.play();
});