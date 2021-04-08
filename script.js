let base = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*=-_';

// Assignment Code
// const generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// prompt crap


let lengthOption = document.getElementById("lengthOption");



// choice logic
const symbolCheck = document.getElementById("symbolCheck");
const numberCheck = document.getElementById("numberCheck");
const upperCheck = document.getElementById("upperCheck");

// if (wannaSymbols == 1) {
//   base = base.concat(symbols); 
// }

let save = document.getElementById("save");
save.addEventListener("click", function() {
  (symbolCheck.checked) ? base = base.concat(symbols): base;
  (numberCheck.checked) ? base = base.concat(numbers): base;
  (upperCheck.checked) ? base = base.concat(upperCase): base;
  // return(base);

})

// console.log(base);

// password generate
generate.addEventListener("click", function(event) {
    event.preventDefault();
    
    let password = '';

    for (let i = 0; i<lengthOption.value; i++) {
        password += base.charAt(Math.floor(Math.random() * base.length));
    }

    console.log(password);

    // writes to the textarea
    const passwordOut = document.getElementById("magichole");
    passwordOut.value = password;
});

const close = document.getElementById("close");
close.addEventListener("click", function() {
  console.log(lengthOption.value);
})