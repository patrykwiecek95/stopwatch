let buttonStart = document.querySelector(".start");
let buttonStop = document.querySelector(".stop");
let buttonReset = document.querySelector(".reset");
let miliseconds = document.querySelector(".miliseconds");
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");

let timerInterval = null;
let startTime;
let currentTime;
let elapsedTime;
let timerIsWorking = false;

const upDateTime = () => {
  currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let h = Math.floor(elapsedTime / (1000 * 3600));
  let m = Math.floor((elapsedTime % (1000 * 3600)) / (1000 * 60));
  let s = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  let ms = elapsedTime % 1000;

  hours.innerText = h <= 10 ? `0${h}` : `${h}`;
  minutes.innerText = m <= 10 ? `0${m}` : `${m}`;
  seconds.innerText = s <= 10 ? `0${s}` : `${s}`;
  miliseconds.innerText = ms <= 10 ? `0${ms}` : `${ms}`;
};

buttonStart.addEventListener("click", () => {
  if (!timerIsWorking) {
    startTime = Date.now();
    timerInterval = setInterval(upDateTime, 1);
    timerIsWorking = true;
  }
});

buttonStop.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerIsWorking = false;
});

buttonReset.addEventListener("click", () => {
  timerIsWorking = false;
  clearInterval(timerInterval);
  hours.innerText = "00";
  minutes.innerText = "00";
  seconds.innerText = "00";
  miliseconds.innerText = "00";
});
