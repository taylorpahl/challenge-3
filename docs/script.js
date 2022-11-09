// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
// 1) Prompt user for password criteria
  // 1-a. Password length 8 - 128
var passwordLength;
var useUppercase;
var useLowercase;
var useNumbers;
var useSpecial;
var charSets;
passwordLength = window.prompt("How many characters in password?");
// 2) Validate the input
if (!passwordLength) {
  alert("Input required");
  return;
}
if (passwordLength === null) {
  window.alert("Input required");
  return;
}
if (isNaN(passwordLength)) {
  window.alert("Must input a number between 8 and 128.");
  return;
}
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Must input a number between 8 and 128.");
  return;
}
  // 1-b. Uppercase, Lowercase, Numbers, Speacial Characters?
  else {
    useUppercase = window.confirm("Do you want uppercase letters in password?");
    // 2) Validate the input
    if (!useUppercase) {
      charSets = "abcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else {
      charSets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
  }

    useLowercase.window.confirm("Do you want lowercase letters in password?");
    // 2) Validate the input
    if (!useLowercase) {
      charSets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else {
      charSets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
  
    useNumbers.window.confirm("Do you want numbers in password?");
    // 2) Validate the input
    if (!useNumbers) {
      charSets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else {
      charSets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }

    window.confirm("Do you want special characters in password?");
    // 2) Validate the input
    if (!useSpecial) {
      charSets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      charSets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
// 3) Generate password

// 4) Display password on screen
  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
