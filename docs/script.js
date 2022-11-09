// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
// 1) Prompt user for password criteria
  // 1-a. Password length 8 - 128
var passwordLength;
passwordLength = window.prompt("How many characters in password?");
// 2) Validate the input

  // 1-b. Uppercase, Lowercase, Numbers, Speacial Characters?
window.confirm("Do you want uppercase letters in password?");
// 2) Validate the input
window.confirm("Do you want lowercase letters in password?");
// 2) Validate the input
window.confirm("Do you want numbers in password?");
// 2) Validate the input
window.confirm("Do you want special characters in password?");
// 2) Validate the input

// 3) Generate password

// 4) Display password on screen
  return "Generated password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
