// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Select elements
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const result = document.getElementById("result");

// Button click event
guessBtn.addEventListener("click", function(){

    // Get user input
    const guess = Number(guessInput.value);

    // Check empty input
    if(guessInput.value === ""){
        result.textContent = "Please enter a number!";
        return;
    }

    // Compare numbers
    if(guess > randomNumber){

        result.textContent = "Too High!";

    }else if(guess < randomNumber){

        result.textContent = "Too Low!";

    }else{

        result.textContent = "🎉 Correct Answer!";

    }

});