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

  // when each prompt is answered, input should be validated and at least one character must be selected

  // generate a password:
  //    size: 8 -> ########, leading number must be nonzero
  //    lowercase: if true, at least one character should be a lowercase letter
  //               if false, all letters should be uppercase
  //    uppercase: if true, at least one character should be an uppercase letter
  //               if false, all letters should be lowercase
  //    numeric:   if true, at least one character should be a number
  //               if false, no numbers used
  //    special:   if true, at least one character should be special
  //               if false, no special characters used
  //                " !"#$ %& '()*+,-./:;<=>?@[\]^_`{|}~"



  return 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
