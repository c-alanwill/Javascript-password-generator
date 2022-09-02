// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '&',
    '*',
    '+',
    '=',
    '\\',
    '/',
    "'",
    '"',
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '{',
    '}',
    '[',
    ']',
    '~',
    '`',
    '-',
    '_',
    '.',
    '|',
    ':',
    ';',
    '<',
    '>',
    ];
    
    // Array of numeric characters to be inluded in password
    var numericCharacters = ['0', '1', '2','3','4','5','6','7','8','9'];
    
    // Array of lowercase characters to be included in password
    var lowerCaseCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    ];
    
    // Array of uppercase characters to be included in password
    var upperCaseCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    ];

var basket = []


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 console.log(password);

}

function generatePassword() {
    var passwordLength = parseInt(
        prompt('How many characters would you like your password to contain?')
      );
      if (Number.isNaN(passwordLength)) {
        alert('Please enter a number');
        return null;
      }
      if (passwordLength < 8 || passwordLength > 128) {
        window.alert('Please choose a number betweem 8 and 128 characters.');
        return null;
      }


    // Ask user if they want special characters for their password
    var includeSpecial = confirm("Click OK to confirm including special characters.");
    console.log(includeSpecial)
    // Ask user if they want numeric characters for their password
    var includeNumeric = confirm("Click OK to confirm including numeric characters.");
    console.log(includeNumeric)
    // Ask user if they want numeric characters for their password
    var includeLowerCase = confirm("Click OK to confirm including lowercase characters.");
    console.log(includeLowerCase)
    // Ask user if they want numeric characters for their password
    var includeUpperCase = confirm("Click OK to confirm including uppercase characters.");
    console.log(includeUpperCase)
    basket = [];
    
if (includeSpecial == true) {
    basket = basket.concat(specialCharacters);
}

if (includeNumeric == true) {
    basket = basket.concat(numericCharacters);
}

if (includeLowerCase == true) {
    basket = basket.concat(lowerCaseCharacters);
}
if (includeUpperCase == true) {
    basket = basket.concat(upperCaseCharacters);
}

console.log(basket);

var password = "";

console.log(password);
for(i = 0; i < passwordLength; i++) {
    console.log(basket.length)
    var randomIndex = Math.floor(Math.random() * basket.length)
    var randomChar = basket[randomIndex];
    password = password + randomChar;
    console.log(password);
    var passwordText = document.getElementById("password");
    passwordText.textContent = password;

}
}
console.log(password);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

