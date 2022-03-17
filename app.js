const bird = document.querySelector(".bird");
const gameDisplay = document.querySelector(".game-container");

let birdLeft = 220;
let birdBottom = 200;
let gravity = 2;

const startGame = () => {
  birdBottom -= gravity;
  bird.style.bottom = birdBottom + "px";
  bird.style.left = birdLeft + "px";
};

let timerId = setInterval(startGame, 20);

const control = (e) => {
  if (e.keyCode === 32) {
    jump();
  }
};

const jump = () => {
  if (birdBottom < 640) {
    birdBottom += 50;
    bird.style.bottom = birdBottom + "px";
  }
};

addEventListener("keyup", control);
