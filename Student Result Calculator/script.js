// Select input fields
const banglaInput = document.getElementById("bangla");
const englishInput = document.getElementById("english");
const mathInput = document.getElementById("math");

// Select button
const calculateBtn = document.getElementById("calculateBtn");

// Select result elements
const totalText = document.getElementById("total");
const averageText = document.getElementById("average");
const gradeText = document.getElementById("grade");

// Button click event
calculateBtn.addEventListener("click", function(){

    // Get marks
    const bangla = Number(banglaInput.value);
    const english = Number(englishInput.value);
    const math = Number(mathInput.value);

    // Check empty input
    if(
        banglaInput.value === "" ||
        englishInput.value === "" ||
        mathInput.value === ""
    ){
        alert("Please enter all marks!");
        return;
    }

    // Calculate total and average
    const total = bangla + english + math;
    const average = total / 3;

    // Calculate grade
    let grade;

    if(average >= 80){
        grade = "A+";
    }
    else if(average >= 70){
        grade = "A";
    }
    else if(average >= 60){
        grade = "A-";
    }
    else if(average >= 50){
        grade = "B";
    }
    else if(average >= 40){
        grade = "C";
    }
    else if(average >= 33){
        grade = "D";
    }
    else{
        grade = "F";
    }

    // Display result
    totalText.textContent = `Total: ${total}`;
    averageText.textContent = `Average: ${average.toFixed(2)}`;
    gradeText.textContent = `Grade: ${grade}`;

});