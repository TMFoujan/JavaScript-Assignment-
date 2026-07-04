// Store the current counter value
let count = 0;

// Select HTML elements
const countDisplay = document.getElementById("count");

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// Function to update the displayed number
function updateCounter() {
    countDisplay.textContent = count;
}

// Increment button
incrementBtn.addEventListener("click", function () {
    count++;
    updateCounter();
});

// Decrement button
decrementBtn.addEventListener("click", function () {
    count--;
    updateCounter();
});

// Reset button
resetBtn.addEventListener("click", function () {
    count = 0;
    updateCounter();
});