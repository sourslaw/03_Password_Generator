const base = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*=-_';

// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

length = 7;


generate.addEventListener("click", function(event) {
    event.preventDefault();
    
    let password = '';

    for (let i = 0; i<length; i++) {
        password += base.charAt(Math.floor(Math.random() * base.length));
    }
    console.log(password);
    const passwordOut = document.getElementById("password");
    passwordOut.value = password;
});
