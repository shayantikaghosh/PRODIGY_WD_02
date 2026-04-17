let startTime;
let elapsedTime = 0;
let timerInterval;

const minDisplay = document.getElementById("minutes");
const secDisplay = document.getElementById("seconds");
const msDisplay = document.getElementById("milliseconds");
const lapsList = document.getElementById("lapsList");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const lapBtn = document.getElementById("lapBtn");

function timeToString(time) {
    let diffInMin = time / (60 * 1000);
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return { formattedMM, formattedSS, formattedMS };
}

function print(time) {
    let res = timeToString(time);
    minDisplay.innerHTML = res.formattedMM;
    secDisplay.innerHTML = res.formattedSS;
    msDisplay.innerHTML = res.formattedMS;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(elapsedTime);
    }, 10);
    
    showButton("RUNNING");
}

function pause() {
    clearInterval(timerInterval);
    showButton("PAUSED");
}

function reset() {
    clearInterval(timerInterval);
    print(0);
    elapsedTime = 0;
    lapsList.innerHTML = "";
    showButton("STOPPED");
}

function recordLap() {
    let res = timeToString(elapsedTime);
    let lapTime = `${res.formattedMM}:${res.formattedSS}:${res.formattedMS}`;
    let li = document.createElement("li");
    li.classList.add("lap-item");
    li.innerHTML = `<span>Lap ${lapsList.children.length + 1}</span> <span>${lapTime}</span>`;
    lapsList.prepend(li); // Adds new lap to the top
}

function showButton(state) {
    if (state === "RUNNING") {
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        lapBtn.disabled = false;
    } else if (state === "PAUSED") {
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        lapBtn.disabled = true;
    } else {
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        lapBtn.disabled = true;
    }
}