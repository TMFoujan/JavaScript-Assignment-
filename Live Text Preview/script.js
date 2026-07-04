// Select elements
const textInput = document.getElementById("textInput");
const preview = document.getElementById("preview");

// Listen for typing
textInput.addEventListener("input", function(){

    // Get the input value
    const text = textInput.value;

    // Check if input is empty
    if(text.trim() === ""){

        preview.textContent = "Type Something...";

    }else{

        preview.textContent = text;

    }

});