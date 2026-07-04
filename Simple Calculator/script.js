// Select elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");

const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const mulBtn = document.getElementById("mulBtn");
const divBtn = document.getElementById("divBtn");

const result = document.getElementById("result");

// Function to get numbers
function getNumbers(){

    if(num1Input.value === "" || num2Input.value === ""){

        alert("Please enter both numbers!");

        return null;
    }

    return {

        num1: Number(num1Input.value),

        num2: Number(num2Input.value)

    };
}

// Add
addBtn.addEventListener("click", function(){

    const numbers = getNumbers();

    if(numbers === null) return;

    result.textContent =
    `Result: ${numbers.num1 + numbers.num2}`;

});

// Subtract
subBtn.addEventListener("click", function(){

    const numbers = getNumbers();

    if(numbers === null) return;

    result.textContent =
    `Result: ${numbers.num1 - numbers.num2}`;

});

// Multiply
mulBtn.addEventListener("click", function(){

    const numbers = getNumbers();

    if(numbers === null) return;

    result.textContent =
    `Result: ${numbers.num1 * numbers.num2}`;

});

// Divide
divBtn.addEventListener("click", function(){

    const numbers = getNumbers();

    if(numbers === null) return;

    if(numbers.num2 === 0){

        result.textContent =
        "Cannot divide by zero!";

        return;
    }

    result.textContent =
    `Result: ${numbers.num1 / numbers.num2}`;

});