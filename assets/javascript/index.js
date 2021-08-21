//DOM element for generate password button
var generateBtn = document.querySelector("#generate");



// Add click event listener to generate button/call the write password function
generateBtn.addEventListener("click", writePassword);

// Write password to the password text input field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// If/then for if confirm true





//Functions to generate random uppercase/lowercase/numbers/special chars. Charset table used: https://www.w3schools.com/html/html_charset.asp

function getLowerChar() {
  var lowerChar;

  //set i equal to the starting charcode number for lower case chars, and will continue to loop through until i is 122
  for (let i = 97; i < 123; i++) {

    //giving lowerChar the values the loop is pulling
    lowerChar += String.fromCharCode(i)
  }

  passwordChars += lowerChar;
}


function getUpperChar() {
  var upperChar;

  //set i equal to the starting charcode number for upper case chars, and will continue to loop through until i is 89
  for (let i = 65; i < 90; i++) {

    //giving upperChar the values the loop is pulling
    upperChar += String.fromCharCode(i)
  }

  //passwordChars are the users selected character options. Will add upperChar's. use pw length to iterate through
  passwordChars += upperChar;

}


function getNumber() {
  var numberChar;

  for (let i = 48; i < 58; i++) {
    numberChar += String.fromCharCode(i)
  }

  passwordChars += numberChar;
}

function getSymbol() {
  const symbols = '!@#$%&*+~\/?';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


let passwordLength;
let optionUpper;
let optionLower;
let optionNumber;
let optionSpecial;

//Prompts to gather users selected password criteria

function generatePassword() {
  passwordLength = prompt('How many characters would you like your password to contain?');
  valueChecks();
  optionUpper = confirm('Click OK if you would like your password to include uppercase characters.');
  optionLower = confirm('Click OK if you would like your password to include lowercase characters.');
  optionNumber = confirm('Click OK if you would like your password to include numeric characters.');
  optionSpecial = confirm('Click OK if you would like your password to include special characters.');


}

//Function for user input

let passwordChars;

function valueChecks() {
  var length = passwordLength;

  while (length < 8 || length > 128) {
    alert('Password must be between 8-128 characters.');

    generatePassword();

    // var passwordLength = prompt('How many characters would you like your password to contain?');

  }

  if (optionUpper) {
    getUpperChar();
  }

  if (optionLower) {
    getLowerChar();
  }

  if (optionNumber) {
    getNumber();
  }

  if (optionSpecial) {
    getSymbol();
  }
}

