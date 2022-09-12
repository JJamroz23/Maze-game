// Buttons
const startBtn = document.querySelector(".start-btn");
const nextBtn = document.querySelector(".next");

// Inputs
const timer = document.querySelector(".timer");
const scoreBoard = document.querySelector(".scoreboard");
const level = document.querySelector(".level");

// start button
startBtn.addEventListener("click", (event) => {
  Body.setStatic(ball, false);
  startBtn.classList.add("hidden");
  timerStart();
});

// after win message
const winnerMeassage = () => {
  document.querySelector(".winner").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector(".winner").classList.add("hidden");
    nextBtn.classList.remove("hidden");
  }, 7000);
};

// next game start
nextBtn.addEventListener("click", (event) => {
  location.reload();
});

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
