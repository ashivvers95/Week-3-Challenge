// Assignment code here

var passwordLength ;
var numberConfirm ;
var alphabetConfirm ;
var alphaUpperConfirm ;
var specialCharConfirm ;

var number = "1234567890";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "~`!@#$%^&*()_+-={}|[]:;<>,.?/";
var alphaUpper= alphabet.toUpperCase();

var passwordObject = {
numberArray: number.split(""),
alphabetArray: alphabet.split(""),
alphaUpperArray:  alphaUpper.split(""),
specialCharArray: specialChar.split(""),
}
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element

// if true add number/alphabet/specialChar/upper else don't
function generatePassword (){
var passwordArray = []
while (passwordArray.length < passwordLength) {

  if (numberConfirm) {
    var randomNumber = passwordObject.numberArray[Math.floor(Math.random()*passwordObject.numberArray.length)]
    passwordArray.push(randomNumber);
  }

  if (alphabetConfirm) {
    var randomAlphabet = passwordObject.alphabetArray[Math.floor(Math.random()*passwordObject.alphabetArray.length)]
    passwordArray.push(randomAlphabet);
  }

  if (alphaUpperConfirm) {
    var randomAlphaUpper = passwordObject.alphaUpperArray[Math.floor(Math.random()*passwordObject.alphaUpperArray.length)]
    passwordArray.push(randomAlphaUpper);
}
  if (specialCharConfirm) {
    var randomSpecialChar = passwordObject.specialCharArray[Math.floor(Math.random()*passwordObject.specialCharArray.length)]
    passwordArray.push(randomSpecialChar);

  }
}

passwordArray = passwordArray.slice(0, passwordLength)
passwordArray = passwordArray.join("")
console.log(passwordArray);
return passwordArray;
}
// Write password to the #password input
function writePassword() {
  
  passwordLength = window.prompt("How long do you need the password to be?");
  numberConfirm = window.confirm("Should it contain numbers?");
  alphabetConfirm = window.confirm("Should it contain lowercase letters?");
  alphaUpperConfirm = window.confirm("Should it contain uppercase letters?");
  specialCharConfirm = window.confirm("Should it contain special characters?");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

