const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*=-_';

// number length
let lengthOption = document.getElementById("lengthOption");
// complexity options
const symbolCheck = document.getElementById("symbolCheck");
const numberCheck = document.getElementById("numberCheck");
const upperCheck = document.getElementById("upperCheck");
const lowerCheck = document.getElementById("lowerCheck");
// password
const passwordOut = document.getElementById("magichole");

// password generate (one big function)
generate.addEventListener("click", function() {
        // default base character string
    let base = '';
    // ternary operators
    (symbolCheck.checked) ? base += symbols: '';
    (numberCheck.checked) ? base += numbers: '';
    (upperCheck.checked) ? base += upperCase: '';
    (lowerCheck.checked) ? base += lowerCase: '';
    // password initially set to empty string
    let password = '';
    // password creation happens here bro
    for (let i = 0; i<lengthOption.value; i++) {
        password += base.charAt(Math.floor(Math.random() * base.length));
    }
    // writes to the textarea
    passwordOut.value = password;
    // if no options selected
    const defaultSay = 'please select at least one option . . .';
    if (base == '') {
        passwordOut.value = defaultSay;
    }
});

// clears selections and clears textarea
reset.addEventListener("click", function() {
    const inputs = document.querySelectorAll(".form-check-input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
	}
	passwordOut.value = "";
	lengthOption.value = 9;
});


// Assignment Code
// const generateBtn = document.querySelector("#generate");
// Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");
//     passwordText.value = password;
// }
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);