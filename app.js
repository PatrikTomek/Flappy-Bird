const bird = document.querySelector(".bird");
const gameDisplay = document.querySelector(".game-container");
const ground = document.querySelector(".ground");

let birdLeft = 220;
let birdBottom = 100;
let gravity = 2;
let isGameOver = false;

const startGame = () => {
  birdBottom -= gravity;
  bird.style.bottom = birdBottom + "px";
  bird.style.left = birdLeft + "px";
};

let gameTimerId = setInterval(startGame, 20);

const control = (e) => {
  if (e.keyCode === 32) {
    jump();
  }
};

const jump = () => {
  if (birdBottom < 500) {
    birdBottom += 50;
    bird.style.bottom = birdBottom + "px";
  }
};

addEventListener("keyup", control);

const generateObstacle = () => {
  let obstacleLeft = 500;
  let randomHeight = Math.random() * 60;
  let obstacleBottom = randomHeight;
  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");
  gameDisplay.appendChild(obstacle);
  obstacle.style.left = obstacleLeft + "px";
  obstacle.style.bottom = obstacleBottom + "px";

  const moveObstacle = () => {
    obstacleLeft -= 2;
    obstacle.style.left = obstacleLeft + "px";

    if (obstacleLeft === -60) {
      clearInterval(gameTimerId);
      gameDisplay.removeChild(obstacle);
    }
    if (birdBottom === 0) {
      gameOver();
    }
  };
  let gameTimerId = setInterval(moveObstacle, 20);
  setTimeout(generateObstacle, 3000);
};

generateObstacle();

const gameOver = () => {
  clearInterval(gameTimerId);
  isGameOver = true;
  document.removeEventListener("keyup", control);
};
