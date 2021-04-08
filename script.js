const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*=-_';

// number length
let lengthOption = document.getElementById("lengthOption");
// complexity options
const symbolCheck = document.getElementById("symbolCheck");
const numberCheck = document.getElementById("numberCheck");
const upperCheck = document.getElementById("upperCheck");

// password generate (one big function)
generate.addEventListener("click", function() {
  // default base character string
  let base = 'abcdefghijklmnopqrstuvwxyz';
  // ternary operators
  (symbolCheck.checked) ? base += symbols: '';
  (numberCheck.checked) ? base += numbers: '';
  (upperCheck.checked) ? base += upperCase: '';
  // password initially set to empty string
  let password = '';
  // password creation happens here bro
  for (let i = 0; i<lengthOption.value; i++) {
      password += base.charAt(Math.floor(Math.random() * base.length));
  }
  // writes to the textarea
  const passwordOut = document.getElementById("magichole");
  passwordOut.value = password;
});



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