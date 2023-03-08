// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = "";
  // THEN I am presented with a series of prompts for password criteria

  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = prompt("How long would you like your password?");

  if (parseInt(passwordLength) > 128) {
    alert("Your password can be no longer than 128 characters");
    password = generatePassword();
    return password;
  } else if (parseInt(passwordLength) < 8) {
    alert("Your password can be no fewer than 8 characters");
    password = generatePassword();
    return password;
  } else if (isNaN(passwordLength)) {
    alert("Please enter a number");
    password = generatePassword();
    return password;
  } else if (!passwordLength) {
    password = "";
    return password;
  } else {
    passwordLength = parseInt(passwordLength);
  }

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var lowercase = confirm("Do you want lowercase?");
  var uppercase = confirm("Do you want uppercase?");
  var numeric = confirm("Do you want numeric?");
  var special = confirm("Do you want special?");

  // THEN my input should be validated and at least one character type should be selected
  if (lowercase || uppercase || numeric || special) {
    password = createPassword(
      lowercase,
      uppercase,
      numeric,
      special,
      passwordLength
    );
  } else {
    alert("Please select at least one character type");
    password = generatePassword();
    return password;
  }

  // THEN a password is generated that matches the selected criteria

  // THEN the password is either displayed in an alert or written to the page
  return password;
}

function createPassword(lower, upper, num, spec, pwl) {
  var password = "";
  var chars = "";

  if (lower) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (upper) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (num) {
    chars += "0123456789";
  }
  if (spec) {
    chars += "!@#$%^&*()_+-=,./;'[]<>?:{}";
  }

  for (let i = 0; i < pwl; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}

// code borrowed from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// function makeid(length) {
//   let result = "";
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   const charactersLength = characters.length;
//   let counter = 0;
//   while (counter < length) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     counter += 1;
//   }
//   return result;
// }

// console.log(makeid(8));
