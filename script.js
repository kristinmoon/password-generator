// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  // prompt: what is the length?
  var size = window.prompt("How many characters would you like your password to be? Length must be between 8-128 characters.", "8");
  size = Number.parseInt(size, 10);

  if (Number.isNaN(size)) {
    alert("Invalid format. Password length must be a number between 8-128 characters.");
    return "";
  }

  //    valid values are >=8 && <=128
  if (size < 8 || size > 128) {
    alert("Invalid selection. Password length must be between 8-128 characters.");
    return "";
  }
  console.log("size", size, typeof size);

  // prompt: what character types to be included in password?
  //    lowercase
  var lowercase = confirm("Click OK to include a lowercase character in your password.");
  console.log("lowercase", lowercase, typeof lowercase)

  //    uppercase
  var uppercase = confirm("Click OK to include an uppercase character in your password.");
  console.log("uppercase", uppercase, typeof uppercase)

  //    numeric
  var numeric = confirm("Click OK to include a numeric character in your password.");
  console.log("numeric", numeric, typeof numeric)

  //    special characters
  var special = confirm("Click OK to include a special character in your password.");
  console.log("special", special, typeof special)

  var allDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var generated = "";


  // if user chooses to include a lowercase letter, choose a random lowercase letter
  if (lowercase) {
    var lowercaseIndex = Math.floor(Math.random() * lowercaseLetters.length);
    generated = generated + lowercaseLetters[lowercaseIndex];
    //else
    // ....
  }

  // if user chooses to include an uppercase letter, choose a random uppercase letter
  if (uppercase) {
    var uppercaseIndex = Math.floor(Math.random() * uppercaseLetters.length);
    generated = generated + uppercaseLetters[uppercaseIndex];
    //else
    // ....
  }

  // if user chooses to include a number, choose a random number
  if (numeric) {
    var allDigitsIndex = Math.floor(Math.random() * allDigits.length);
    generated = generated + allDigits[allDigitsIndex];
    //else
    // ....
  }

  // if user chooses to include a special character, choose a random special character
  if (special) {
    var specialIndex = Math.floor(Math.random() * specialCharacters.length);
    generated = generated + specialCharacters[specialIndex];
    //else
    // ....
  }


  // when each prompt is answered, input should be validated and at least one character must be selected

  // generate a password:
  //    size: 8 -> ########, leading number must be one of the nonZeroDigits
  //    lowercase: if true, at least one character should be a lowercase letter
  //               if false, all letters should be uppercase
  //    uppercase: if true, at least one character should be an uppercase letter
  //               if false, all letters should be lowercase
  //    numeric:   if true, at least one character should be a number
  //               if false, no numbers used
  //    special:   if true, at least one character should be special
  //               if false, no special characters used
  //                " !"#$ %& '()*+,-./:;<=>?@[\]^_`{|}~"








  // convert (Jason's) generated to a number
  //  generated = Number.parseInt(generated, 10);
  return generated;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
