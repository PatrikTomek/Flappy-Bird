const bird = document.querySelector(".bird");
const gameDisplay = document.querySelector(".game-container");

let birdLeft = 220;
let birdBottom = 200;

const startGame = () => {
  bird.style.bottom = birdBottom + "px";
  bird.style.left = birdLeft + "px";
};

startGame();
