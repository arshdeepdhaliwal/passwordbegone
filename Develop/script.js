// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var passwordLength = prompt ("Enter password length (between 8 and 128):");
  passwordLength = parseInt(passwordLength);
  
  //checks if passwordLength is valid
  if (isNaN(passwordLength)|| passwordLength < 8|| passwordLength > 128){
    alert("Please enter a valid number between 8 and 128 for password length.");
    return "";
  }

  //var with confirms
  var lowercase = confirm("Would you like to include lowercase?");
  var uppercase = confirm("Would you like to include uppercase?");
  var numericals = confirm("Would you like to include numericals?");
  var special = confirm("Would you like to include special characters?");

  var characterSet = ("");

  if (lowercase){
    characterSet += "abcdefghijklmnopqrstuvwxyz"
  }
  if (uppercase){
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (numericals){
    characterSet += "0123456789"
  }
  if (special){
    characterSet += "!@#$%^&*?"
  }

  //if none character is selected alert to select a valid value
  if (characterSet === ""){
    alert("Please select at least one character type.");
    return "";
  }

  //stores password after generated in empty string
  var password = "";

  //generates password from selected characters in random order
  for(var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(random)
  }

  return password;

}

//write the random new password to the password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
