const startBtn = document.querySelector(".start-btn");
const nextBtn = document.querySelector(".next");

// start button
startBtn.addEventListener("click", (event) => {
  startBtn.classList.add("hidden");
});

// after win
const winnerMeassage = () => {
  document.querySelector(".winner").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector(".winner").classList.add("hidden");
    nextBtn.classList.remove("hidden");
  }, 7000);
};
