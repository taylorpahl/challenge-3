// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character set arrays
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "!#$%&'()*+-./:,<=>?@[]^_`{|}~";

function generatePassword() {

var passwordLength;
var useUppercase;
var useLowercase;
var useNumbers;
var useSpecial;
var charSets;

// 1) Prompt user for password criteria

// 1-a. Password length 8 - 128
passwordLength = window.prompt("How many characters in password?");

// 2) Validate the input
if (!passwordLength) {
  window.alert("Input required");
  return;
}
else if (isNaN(passwordLength)) {
  window.alert("Must input a number between 8 and 128.");
  return;
}
else if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Must input a number between 8 and 128.");
  return;
}
// 1-b. Uppercase, Lowercase, Numbers, Speacial Characters?
else { 
  useUppercase = window.confirm("Do you want uppercase letters in password?");
  useLowercase = window.confirm("Do you want lowercase letters in password?");
  useNumbers = window.confirm("Do you want numbers in password?");
  useSpecial = window.confirm("Do you want special characters in password?");
}

// 2) Validate the input
if (!useUppercase && !useLowercase && !useNumbers && !useSpecial) {
  window.alert("Must choose at least one option.");
  return;
}
// 3) Gather list of characters
else {
  if (useUppercase) {
    charSets += uppercase;
  }
  if (useLowercase) {
    charSets += lowercase;
  }
  if (useNumbers) {
    charSets += numbers;
  }
  if (useSpecial) {
    charSets += special;
  }
}

// 4) Generate password

// 5) Display password on screen
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
