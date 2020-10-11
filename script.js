// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function push(fromArray, toArray) {
  for (i = 0, len = fromArray.length; i < len; i++) {
    toArray.push(fromArray[i]);
  }
  return toArray;
};


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

  if (!lowercase && !uppercase && !numeric && !special) {
    alert("Invalid selection. Password must contain at least one of the prompted characters. Please make your selections again.");
    generatePassword();
  }

  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var charCombined = [].concat(numericCharacters, specialCharacters, uppercaseLetters, lowercaseLetters);

  var generated = "";
  var charset = [];

  // charset array

  if (lowercase) {
    push(lowercaseLetters, charset);
  }

  if (uppercase) {
    push(uppercaseLetters, charset);
  }

  if (numeric) {
    push(numericCharacters, charset);
  }

  if (special) {
    push(specialCharacters, charset);
  }


  //  creates password of selected length (initialize)
  for (var i = 0; i < size; i++) {
    var allIndex = Math.floor(Math.random() * charset.length);
    generated = generated + charset[allIndex];
  }


  // // if user wants lowercase letters, add lowercaseLetters
  // if (lowercase) {
  //   var lowercaseIndex = Math.floor(Math.random() * lowercaseLetters.length);
  //   console.log(lowercaseIndex);

  // }

  // // if user does not want an uppercase letter, exclude uppercaseLetters
  // if (!uppercase) {
  //   var charCombined = charCombined.filter(el => !uppercaseLetters.includes(el));
  // }


  // // if user chooses to include a number, choose a random number
  // if (!numeric) {
  //   var charCombined = charCombined.filter(el => !numericCharacters.includes(el));
  // }


  // // if user chooses to include a special character, choose a random special character
  // if (special) {
  //   var specialIndex = Math.floor(Math.random() * specialCharacters.length);
  //   generated = generated + specialCharacters[specialIndex];
  //   //else
  //   // ....



  // when each prompt is answered, input should be validated and at least one character must be selected

  // generate a password:
  //    size: 8 -> ########
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
