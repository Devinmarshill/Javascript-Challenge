// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// window.alert("invalid")

// var userlength = window.prompt("Please provide the length of your Password")

// var isLowerCase = window.confirm("Include Lowercase")


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var password = "";

  // Prompt for password length
  var passwordLength = parseInt(prompt("Please provide the length of your Password between 8 and 128 characters:"));

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a valid number between 8 and 128.");
    return ""; // the empty "" will alert the user that they have to select a number
  }

  // The following "var"s will prompt for character types to include
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  // This will run an IF/ELSE and validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
    alert("Please select at least one character type.");
    return ""; 
    
    // the empty "" will alert the user that no character type is selected
  }


  var allChars = "";
  if (includeLowercase) {
    allChars += lowercaseChars;
  }
  if (includeUppercase) {
    allChars += uppercaseChars;
  }
  if (includeNumeric) {
    allChars += numericChars;
  }
  if (includeSpecialChars) {
    allChars += specialChars;
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

// this will run the if statements and generate a pw for the user


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

