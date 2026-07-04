// Select elements
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

// Variables
let seconds = 0;
let timer = null;

// Update display
function updateDisplay(){
    timeDisplay.textContent = `${seconds} Seconds`;
}

// Start timer
function startTimer(){

    // Prevent multiple intervals
    if(timer !== null){
        return;
    }

    timer = setInterval(function(){

        seconds++;

        updateDisplay();

    },1000);

}

// Stop timer
function stopTimer(){

    clearInterval(timer);

    timer = null;

}

// Reset timer
function resetTimer(){

    stopTimer();

    seconds = 0;

    updateDisplay();

}

// Button Events
startBtn.addEventListener("click", startTimer);

stopBtn.addEventListener("click", stopTimer);

resetBtn.addEventListener("click", resetTimer);