///////// LOCAL STORAGE //////

const scoreStorage = Number(localStorage.getItem("scoreBoard"));
const levelValueStorage = Number(localStorage.getItem("level")) || 1;

const setLSItem = (key, value) => {
  if (key === "scoreBoard") {
    localStorage.setItem("scoreBoard", value);
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
const timerStart = () => {
  timer.innerHTML = timer.innerHTML - 1;

  const interval = setInterval(() => {
    let timeLeft = timer.innerHTML;
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
