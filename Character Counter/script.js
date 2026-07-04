// Select elements
const textInput = document.getElementById("textInput");

const characterCount = document.getElementById("characterCount");

const wordCount = document.getElementById("wordCount");

// Listen for user input
textInput.addEventListener("input", function () {

    // Get textarea value
    const text = textInput.value;

    // Character count
    characterCount.textContent = text.length;

    // Word count
    const words = text.trim();

    if(words === ""){

        wordCount.textContent = 0;

    }else{

        wordCount.textContent = words.split(/\s+/).length;

    }

});