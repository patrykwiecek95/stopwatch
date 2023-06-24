let buttonStart = document.querySelector(".start");
let buttonStop = document.querySelector(".stop");
let buttonReset = document.querySelector(".reset");
let miliseconds = document.querySelector(".miliseconds");
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");
let timelistHtml = document.querySelector(".timeslist");

let timerInterval = null;
let startTime;
let currentTime;
let elapsedTime;
let timerIsWorking = false;
let stopTime;
let waitingToStart = false;
let h;
let m;
let s;
let ms;
let rank = 0;

const upDateTime = () => {
  if (waitingToStart && stopTime != undefined) {
    currentTime = Date.now() + stopTime;
  } else {
    currentTime = Date.now();
  }
  elapsedTime = currentTime - startTime;
  h = Math.floor(elapsedTime / (1000 * 3600));
  m = Math.floor((elapsedTime % (1000 * 3600)) / (1000 * 60));
  s = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  ms = elapsedTime % 1000;
  hours.innerText = String(h).padStart(2, "0");
  minutes.innerText = String(m).padStart(2, "0");
  seconds.innerText = String(s).padStart(2, "0");
  miliseconds.innerText = String(ms).padStart(3, "0");
};

const listTime = () => {
  if (timerIsWorking) {
    rank += 1;
    const row = document.createElement("div");
    row.classList.add("row");
    row.innerText = `${rank}. ${hours.innerText}  ${minutes.innerText} ${seconds.innerText}  ${miliseconds.innerText} `;
    timelistHtml.appendChild(row);
  }
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
  stopTime = elapsedTime;
  listTime();
  timerIsWorking = false;
  waitingToStart = true;
});

buttonReset.addEventListener("click", () => {
  timerIsWorking = false;
  clearInterval(timerInterval);
  hours.innerText = "00";
  minutes.innerText = "00";
  seconds.innerText = "00";
  miliseconds.innerText = "000";
  timelistHtml.innerHTML = "";
  rank = 0;
  waitingToStart = false;
});
