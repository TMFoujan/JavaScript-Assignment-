// Array of quotes
const quotes = [

    "The best way to predict the future is to create it.",

    "Success is the sum of small efforts repeated day after day.",

    "Believe you can and you're halfway there.",

    "Dream big and dare to fail.",

    "Stay hungry, stay foolish."

];

// Select elements
const quote = document.getElementById("quote");
const generateBtn = document.getElementById("generateBtn");

// Button click event
generateBtn.addEventListener("click", function(){

    // Generate random index
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Display random quote
    quote.textContent = quotes[randomIndex];

});