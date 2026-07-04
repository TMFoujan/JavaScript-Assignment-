// Select clock element
const clock = document.getElementById("clock");

// Function to update the clock
function updateClock(){

    // Current date and time
    const now = new Date();

    // Get hours, minutes, seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // AM or PM
    let period = "AM";

    if(hours >= 12){
        period = "PM";
    }

    // Convert 24-hour format to 12-hour format
    if(hours > 12){
        hours = hours - 12;
    }

    if(hours === 0){
        hours = 12;
    }

    // Add leading zero
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // Display time
    clock.textContent =
        `${hours}:${minutes}:${seconds} ${period}`;
}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);