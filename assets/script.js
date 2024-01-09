const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const millisecondsEl = document.querySelector('#milliseconds');
const startBtnEl = document.querySelector('#startBtn');
const pauseBtnEl = document.querySelector('#pauseBtn');
const resumeBtnEl = document.querySelector('#resumeBtn');
const resetBtnEl = document.querySelector('#resetBtn');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let paused = false;

startBtnEl.addEventListener('click', startTimer);
pauseBtnEl.addEventListener('click', pauseTime);
resumeBtnEl.addEventListener('click', resumeTimer);
resetBtnEl.addEventListener('click', resetTimer);

function startTimer() {

    interval = setInterval(() => {
        
        if(!paused) {
            milliseconds += 10;

            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);

        }

    }, 10);

    startBtnEl.style.display = 'none';
    pauseBtnEl.style.display = 'block';
}

function pauseTime(){
    paused = true
    pauseBtnEl.style.display = 'none';
    resumeBtnEl.style.display = 'block';
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    paused = false;

    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    millisecondsEl.textContent = '000';

    startBtnEl.style.display = 'block';
    resetBtnEl.style.display = 'block';
    pauseBtnEl.style.display = 'none';
    resumeBtnEl.style.display = 'none';
}

function resumeTimer() {
    paused = false;
    pauseBtnEl.style.display = 'block';
    resumeBtnEl.style.display = 'none';
}

function formatTime (time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}