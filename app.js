const game = () => {
  const bird = document.querySelector(".bird");
  const gameDisplay = document.querySelector(".game-container");
  const ground = document.querySelector(".ground");
  const gameOverAlert = document.querySelector(".gameOverAlert");

  let birdLeft = 220;
  let birdBottom = 100;
  let gravity = 2;
  let isGameOver = false;
  let gap = 430;

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

  document.addEventListener("keyup", control);

  const generateObstacle = () => {
    let obstacleLeft = 500;
    let randomHeight = Math.random() * 160;
    let obstacleBottom = randomHeight;
    const obstacle = document.createElement("div");
    const topObstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    topObstacle.classList.add("topObstacle");
    gameDisplay.appendChild(obstacle);
    gameDisplay.appendChild(topObstacle);
    obstacle.style.left = obstacleLeft + "px";
    topObstacle.style.left = obstacleLeft + "px";
    obstacle.style.bottom = obstacleBottom + "px";
    topObstacle.style.bottom = obstacleBottom + gap + "px";

    const moveObstacle = () => {
      if (!isGameOver) {
        obstacleLeft -= 2;
        obstacle.style.left = obstacleLeft + "px";
        topObstacle.style.left = obstacleLeft + "px";
      }

      if (obstacleLeft === -60) {
        clearInterval(TimerId);
        gameDisplay.removeChild(obstacle);
        gameDisplay.removeChild(topObstacle);
      }
      if (
        (obstacleLeft > 200 &&
          obstacleLeft < 280 &&
          birdLeft === 220 &&
          (birdBottom < obstacleBottom + 150 ||
            birdBottom > obstacleBottom + gap - 200)) ||
        birdBottom === 0
      ) {
        gameOver();
      }
    };
    let TimerId = setInterval(moveObstacle, 20);
    setTimeout(generateObstacle, 3000);
  };

  generateObstacle();

  const gameOver = () => {
    clearInterval(gameTimerId);
    isGameOver = true;
    document.removeEventListener("keyup", control);
    gameOverAlert.style.display = "flex";
  };
};

let isGameRunning = false;
const startSign = document.querySelector(".start-sign");

const runGame = (e) => {
  if (e.keyCode === 32 && !isGameRunning) {
    isGameRunning = true;
    startSign.style.display = "none";
    game();
  }
};
document.addEventListener("keyup", runGame);
