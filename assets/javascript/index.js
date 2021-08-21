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



//Prompts to gather users selected password criteria

function generatePassword() {

  var passwordLength = prompt('How many characters would you like your password to contain?');
  var charSet = '';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var symbols = '!@#$%&*+\/~';
  var password = '';

  if (passwordLength < 8) {
    alert("Password length must be greater than 8 characters.")
    return generatePassword();
  } else if (passwordLength > 129) {
    alert("Password length must be less than 129 characters.")
    return generatePassword();
  }


  if (passwordLength >= 8 && passwordLength <= 128) {
    var optionUpper = confirm("Click OK if you would like your password to include uppercase characters.")
    var optionLower = confirm("Click OK if you would like your password to include lowercase characters.")
    var optionNumber = confirm("Click OK if you would like your password to include numberic characters.")
    var optionSpecial = confirm("Click OK if you would like your password to include special characters.")

    if (optionUpper) {
      charSet += upperCase;
    }

    if (optionLower) {
      charSet += lowerCase;
    }

    if (optionNumber) {
      charSet += numbers;
    }

    if (optionSpecial) {
      charSet += symbols;
    }

    if (optionUpper === false && optionLower === false && optionNumber === false && optionSpecial === false) {
      alert("At least one character must be selected.")
      generatePassword();
    }



    var charSetLength = charSet.length;
    for (var i = 0; i < passwordLength; i++) {
      password += charSet.charAt(Math.floor(Math.random() * charSetLength));

    }

    return password;


  }
}

