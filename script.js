let mins = 00;
let seconds = 00;
let tens = 00;
let interval;  // Variable to store the interval reference

const appendMins = document.querySelector(".mins");
const appendSeconds = document.querySelector(".seconds");
const appendTens = document.querySelector(".tens");
const buttonStart = document.querySelector(".btn-start");
const buttonStop = document.querySelector(".btn-stop");
const buttonReset = document.querySelector(".btn-reset");

function startTimer() {
    tens++;
    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "00";
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        mins++;
        appendMins.innerHTML = "0" + mins;
        seconds = 0;
        appendSeconds.innerHTML = "00";
    }
}

// Start button
buttonStart.onclick = function() {
    clearInterval(interval);  // To prevent multiple intervals being set
    interval = setInterval(startTimer, 10);  // Start the timer
};

// Stop button
buttonStop.onclick = function() {
    clearInterval(interval);  // Stop the timer
};

// Reset button
buttonReset.onclick = function() {
    clearInterval(interval);  // Stop the timer
    mins = "00";
    seconds = "00";
    tens = "00";
    appendMins.innerHTML = mins;
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
};

