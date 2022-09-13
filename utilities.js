///////// LOCAL STORAGE //////

const score = Number(localStorage.getItem("score")) || 0;
const level = Number(localStorage.getItem("level")) || 1;

const setLSItem = (key, value) => {
  localStorage.setItem(key, value);
};

// Buttons
const startBtn = document.querySelector("#start-btn");
const nextBtn = document.querySelector("#next");
const overBtn = document.querySelector("#over-btn");
const menuBtn = document.querySelector("#menu-btn");
const newBtn = document.querySelector("#new");
const instBtn = document.querySelector("#inst");
const instBackBtn = document.querySelector("#inst-back");
// Inputs
const timer = document.querySelector(".timer");
const menuContainer = document.querySelector(".menu-container");
const instContainer = document.querySelector(".inst-container");
const scoreBoard = document.querySelector(".scoreboard");
const levelElement = document.querySelector(".level");
levelElement.innerHTML = level;
scoreBoard.innerHTML = score;

// Start button
startBtn.addEventListener("click", () => {
  Body.setStatic(ball, false);
  startBtn.classList.add("hidden");
  timerStart();
});

// next level button
nextBtn.addEventListener("click", () => {
  location.reload();
});

// game over button
overBtn.addEventListener("click", () => {
  newGame();
});

// new game button
newBtn.addEventListener("click", () => {
  newGame();
});

// instruction button
instBtn.addEventListener("click", () => {
  if (instContainer.classList.contains("hidden")) {
    instContainer.classList.remove("hidden");
  }
});

// go back button
instBackBtn.addEventListener("click", () => {
  instContainer.classList.add("hidden");
});

// menu button
menuBtn.addEventListener("click", () => {
  if (menuContainer.classList.contains("hidden")) {
    menuContainer.classList.remove("hidden");
  } else {
    menuContainer.classList.add("hidden");
  }
});

// after win message
const winnerMeassage = () => {
  document.querySelector(".winner").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector(".winner").classList.add("hidden");
    nextBtn.classList.remove("hidden");
  }, 4000);
};

/////// GAME MOVEMENT  //////

// Timer start
let timeLeft;
let interval;
const timerStart = () => {
  timer.innerHTML = timer.innerHTML - 1;

  interval = setInterval(() => {
    timeLeft = timer.innerHTML;
    if (timeLeft > 0) {
      timer.innerHTML = timeLeft - 1;
    } else {
      overBtn.classList.remove("hidden");
      clearInterval(interval);
    }
  }, 1000);
};

// Timer stop
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
  localStorage.setItem("level", level + 1);
};

// score value upgrade
const saveScore = () => {
  localStorage.setItem("score", score + parseFloat(timeLeft));
};
