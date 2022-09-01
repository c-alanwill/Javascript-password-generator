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
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var passwordLength = window.prompt("How many characters would you like your password to contain?");

    // Ask user if they want special characters for their password
    var includeSpecial = window.confirm("Click OK to confirm including special characters.");
    
    // Ask user if they want numeric characters for their password
    var includeNumeric = window.confirm("Click OK to confirm including numeric characters.");
    
    // Ask user if they want numeric characters for their password
    var includeLowerCase = window.confirm("Click OK to confirm including lowercase characters.");
    
    // Ask user if they want numeric characters for their password
    var includeUpperCase = window.confirm("Click OK to confirm including upperrcase characters.");

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

for(i = 0; i < passwordLength; i++) {
    var randomChar = basket[Math.floor(Math.random() * basket.length)];
    password = password + randomChar;
}
    return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

