// array for character length
var characterLength = "";

// array for the choice based on prompt answers
var choice = [];
// arrays for numbers available
var number;
// array for special characters available
var specialCharacter;
// array for lower case letters
var lowerCase;
// array for upper case letters
var upperCase;

// all values for arrays
// separated for spacing
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "`", "~", "[", "]", "{", "}", "/", ";", ":", ",", "<", ">", ".", "?"];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var generateBtn = document.querySelector("#generate");

// function for writing password
function writePassword() {
   // for mulitple prompts that show based on password requirements
  var completedPrompts = prompts();
  var passwordText = document.querySelector("#password");

// if-statement stating if correct prompts are met (using prompt function) then you generate password
// if prompts are not met then error message appears
if (completedPrompts) {
  var userPassword = generatePassword();
  passwordText.value = userPassword;
} else {
  passwordText.value = "Please try again!";
}
}

// function for generating password
function generatePassword() {
  var password = "";
   // var i = 0 is an initializer statement where we declare a variable i with value 0
  // i++ (postfix operator) - this means that the value of the variable is incremented after it is used in the expression
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choice.length);
    password = password + choice[randomIndex];
  }
   
return password;
}

// function for displaying prompts and their questions
function prompts() {
  choice = [];

  // parseInt converts argument to a strong then analyzes string to be returned as an integer
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters)"));

    // || is an Or Operator - it keeps evaluating expressions until it finds on that is true, and then stops
    // isNaN represents a value which is not a valid number. It can be used to check whether a number entered is a valid number or not a number
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be 8 - 128 characters");
    
    // The return statement ends function execution and specifies a value to be returned to the function caller.
    // return false if requirement is not met so error message can appear
    return false;
  }

  if (confirm("Would you like special characters in your password?")) {
    // concat combines two or more items and returns them as a single item
    // concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
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

  if (choice.length == 0) {
    // .length property returns the length of a string
    // if length of choice is set to 0 then no options were selected then error message pops up
    alert("Please confirm at least one prompt.")
    // return false if no prompt is selected so error message can appear
    return false;
  }

  // return true if any prompt is selected to be included in password
  return true;

}

generateBtn.addEventListener("click", writePassword);