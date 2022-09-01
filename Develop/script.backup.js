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



 // If user pressed Cancel, immediately end function
 if (!userChoice) {
  return;
}

var generatePassowrd = function() {
// Ask user how many characters for password
var userChoice = window.prompt("How many characters would you like your password to contain?");


// Ask user if they want special characters for their password
var userChoice = window.prompt("Click OK to confirm including special characters.");

// Ask user if they want numeric characters for their password
var userChoice = window.prompt("Click OK to confirm including numeric characters.");

// Ask user if they want numeric characters for their password
var userChoice = window.prompt("Click OK to confirm including lowercase characters.");

// Ask user if they want numeric characters for their password
var userChoice = window.prompt("Click OK to confirm including upperrcase characters.");


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

How many characters would you like your password to contain?

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}
