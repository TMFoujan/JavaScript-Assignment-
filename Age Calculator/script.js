// Select elements
const dobInput = document.getElementById("dob");
const calculateBtn = document.getElementById("calculate");
const result = document.getElementById("result");

// Button Click Event
calculateBtn.addEventListener("click", function () {

    if (dobInput.value === "") {
        result.textContent = "Please select your Date of Birth!";
        return;
    }

    // User's birth date
    const birthDate = new Date(dobInput.value);

    // Today's date
    const today = new Date();

    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();

    // Check if birthday has occurred this year
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
            today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    result.textContent = `Your Age: ${age} Years`;
});