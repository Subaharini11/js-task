const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let timer = null;
let time = 0;

function formatTime(ms) {
  let hours = Math.floor(ms / 3600000);
  let minutes = Math.floor((ms - (hours * 3600000)) / 60000);
  let seconds = Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  return `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  if (timer === null) {
    timer = setInterval(() => {
      time += 10;
      display.textContent = formatTime(time);
    }, 10);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  time = 0;
  display.textContent = formatTime(time);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);