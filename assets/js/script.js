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

// The function called to determine what to write to password input
function generatePassword() {
  // initialization of password variable to be returned
  var password = "";
  // variable to help determine the length of the password
  var passSize = 0;

  // ask the user how long the password should be
  passSize = promptLength();
  // if they press cancel, return nothing
  if (!passSize) return password;

  // ask the user what characters they want in the password of the length they specified
  password = promptCharacters(passSize);

  //returns the password to be written
  return password;
}

// Helper function for getting the length of the password
function promptLength() {
  // asks the user for their input
  var pLength = prompt(
    "How long would you like your password? Please choose a length between 8 and 128 (inclusive)."
  );

  // conditional statements to determine viability of input
  // if the input exceeds the upper limit
  if (parseInt(pLength) > 128) {
    alert("Your password can be no longer than 128 characters");
    //recursive call to the function
    pLength = promptLength();
    return pLength;

    // if the input is under the limit
  } else if (parseInt(pLength) < 8) {
    alert("Your password can be no fewer than 8 characters");
    // recursive call to the function
    pLength = promptLength();
    return pLength;

    // if the user enters something not a number
  } else if (isNaN(pLength)) {
    alert("Please enter a number");
    // recursive call to the function
    pLength = promptLength();
    return pLength;

    // if the user presses cancel
  } else if (!pLength) {
    // return the empty variable
    return pLength;

    // if the input fits the criteria
  } else {
    // returns the input as a number
    pLength = parseInt(pLength);
    return pLength;
  }
}

// Helper function for asking what kinds of characters you want to be in the password, with parameter length of the password you want
function promptCharacters(passwordLength) {
  // Ask the user for characters wanted for the password
  var lowercase = confirm("Would you like to use lowercase characters?");
  var uppercase = confirm("Would you like to use uppercase characters?");
  var numeric = confirm("Would you like to use numeric characters?");
  var special = confirm("Would you like to use special characters?");

  // initialization of pword variable to be returned
  var pword;

  // if at least one of the characters were chosen, create the password
  if (lowercase || uppercase || numeric || special) {
    pword = createPassword(
      lowercase,
      uppercase,
      numeric,
      special,
      passwordLength
    );
    return pword;

    // If no characters were chosen
  } else {
    alert("Please select at least one character type");
    // recursive call to the function
    pword = promptCharacters(passwordLength);
    return pword;
  }
}

// After getting all the specifics for the password, generate the actual string
function createPassword(lower, upper, num, spec, pwl) {
  // initialization of password variable to be returned
  var password = "";
  // initialization of the strings that will hold whatever characters the user wanted
  var chars = "";

  // if the user wanted lowercase characters
  if (lower) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  // if the user wanted uppercase characters
  if (upper) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  // if the user wanted any numerical characters
  if (num) {
    chars += "0123456789";
  }
  // if the user wanted any special characters
  if (spec) {
    chars += "!@#$%^&*()_+-=,./;'[]<>?:{}`~\"";
  }

  // for loop that iterates based on the length of the password
  for (let i = 0; i < pwl; i++) {
    // gets an individual character and adds it to the end of the password variable
    // Math.random() gets a number between 0 and 1, when multiplied by chars.length it returns a number < chars.length
    // Math.floor() sets the number to an integer
    // charAt() gets the individual character at specified index
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  //returns the password generated from the for loop
  return password;
}

/* code borrowed from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

 function makeid(length) {
   let result = "";
   const characters =
     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   const charactersLength = characters.length;
   let counter = 0;
   while (counter < length) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
     counter += 1;
   }
   return result;
 } */
