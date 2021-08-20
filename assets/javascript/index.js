//DOM element for generate password button
var generateBtn = document.querySelector("#generate");

// Write password to the password text input field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add click event listener to generate button/call the write password function
generateBtn.addEventListener("click", writePassword);

// DOM elements - don't know if I need this because we aren't referencing HTML elements to collect the password parameters





//Creating array object for character functions

const passwordFunc = {
  lower: getLowerChar,
  upper: getUpperChar,
  number: getNumber,
  symbol: getSymbol
};

const userChoices = {

}

//Functions to generate random uppercase/lowercase/numbers/special chars. Charset table used: https://www.w3schools.com/html/html_charset.asp

function getLowerChar() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpperChar() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbol() {
  const symbols = '!@#$%&*+~\/?';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


//Prompts to gather users selected password criteria
function generatePassword() {
  var passwordLength = prompt('How many characters would you like your password to contain?');
  var optionUpper = confirm('Click OK if you would like your password to include uppercase characters.');
  var optionLower = confirm('Click OK if you would like your password to include lowercase characters.');
  var optionNumber = confirm('Click OK if you would like your password to include numeric characters.');
  var optionSpecial = confirm('Click OK if you would like your password to include special characters.');
}

//Function for user input to passwordLength var

function lengthChoice() {
  var length = passwordLength.prompt;

  if (length < 8 || length > 128) {
    alert('Password must be between 8-128 characters.');
    return;
  }
}

