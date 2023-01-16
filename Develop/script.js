var characterLength = "";

var number;
var specialCharacter;
var lowerCase;
var upperCase;

number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "`", "~", "[", "]", "{", "}", "/", ";", ":", ",", "<", ">", ".", "?"];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

}

function prompts() {

  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be 8 - 128 characters");
    return false;
  }

  if (confirm("Would you like special characters in your password?")) {
    choice = choice.concat(specialCharacter);
  }

  if (confirm("Would you like numbers in your password?")) {
      choice = choice.concat(number);
  }

  if (confirm("Would you like upper case letters in your password?")) {
      choice = choice.concat(upperCase);
  }

  if (confirm("Would you like lower case letters in your password?")) {
    choice = choice.concat(lowerCase);
  }

  return true;

}


generateBtn.addEventListener("click", writePassword);