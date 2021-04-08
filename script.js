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

// const incoming = promp()

length = 19;



// choice logic
const wannaSymbols = 1;
const Wnumbers = 1;
const Wupper = 1;

if (wannaSymbols == 1) {
  base = base.concat(symbols); 
  
}

console.log(base);

// password generate
generate.addEventListener("click", function(event) {
    event.preventDefault();
    
    let password = '';

    for (let i = 0; i<length; i++) {
        password += base.charAt(Math.floor(Math.random() * base.length));
    }

    console.log(password);


    // writes to the textarea
    const passwordOut = document.getElementById("magichole");
    passwordOut.value = password;
});
