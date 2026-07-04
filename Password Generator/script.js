// Select elements
const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");

// Characters used for password generation
const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

// Password length
const passwordLength = 8;

// Generate password function
function generatePassword(){

    let password = "";

    for(let i = 0; i < passwordLength; i++){

        const randomIndex =
            Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }

    passwordInput.value = password;
}

// Button click event
generateBtn.addEventListener("click", generatePassword);