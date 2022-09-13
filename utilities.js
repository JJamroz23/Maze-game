///////// LOCAL STORAGE //////

const scoreValueStorage = Number(localStorage.getItem("score")) || 0;
const levelValueStorage = Number(localStorage.getItem("level")) || 1;

const setLSItem = (key, value) => {
  if (key === "score") {
    localStorage.setItem("score", value);
  }
  if (key === "level") {
    localStorage.setItem("level", value);
  }
};

// Buttons
const startBtn = document.querySelector(".start-btn");
const nextBtn = document.querySelector(".next");

// Inputs
const timer = document.querySelector(".timer");
const scoreBoard = document.querySelector(".scoreboard");
const levelElement = document.querySelector(".level");
levelElement.innerHTML = levelValueStorage;
scoreBoard.innerHTML = scoreValueStorage;

// Start button
startBtn.addEventListener("click", (event) => {
  Body.setStatic(ball, false);
  startBtn.classList.add("hidden");
  timerStart();
});

// next game start
nextBtn.addEventListener("click", (event) => {
  location.reload();
});

// after win message
const winnerMeassage = () => {
  document.querySelector(".winner").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector(".winner").classList.add("hidden");
    nextBtn.classList.remove("hidden");
  }, 7000);
};

//// GAME MOVEMENT  ////

// TIMER START
let timeLeft;
let interval;
const timerStart = () => {
  timer.innerHTML = timer.innerHTML - 1;

  interval = setInterval(() => {
    timeLeft = timer.innerHTML;
    if (timeLeft > 0) {
      timer.innerHTML = timeLeft - 1;
    } else {
      clearInterval(interval);
    }
  }, 1000);
};

// TIMER STOP
const timerStop = () => {
  clearInterval(interval);
};

// New game
const newGame = () => {
  location.reload();
  localStorage.clear();
};

//  level value upgrade
const saveLevel = () => {
  setLSItem("level", levelValueStorage + 1);
};

// score value upgrade
const saveScore = () => {
  setLSItem("score", scoreValueStorage + parseFloat(timeLeft));
};
