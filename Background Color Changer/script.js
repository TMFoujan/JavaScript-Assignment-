// Select button
const button = document.getElementById("changeColor");

// Select text that shows the color code
const colorCode = document.getElementById("colorCode");

// Function to generate a random HEX color
function randomColor(){

    const letters = "0123456789ABCDEF";

    let color = "#";

    for(let i = 0; i < 6; i++){

        const randomIndex = Math.floor(Math.random() * 16);

        color += letters[randomIndex];
    }

    return color;
}

// Button click event
button.addEventListener("click", function(){

    const newColor = randomColor();

    document.body.style.backgroundColor = newColor;

    colorCode.textContent = newColor;

});