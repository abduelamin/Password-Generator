// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
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
  'Z'
];

let userPasswordArray = [];
// Function to prompt user for password options

let objectOfFunctions = {
      
  // I need a return value for userInputToNumber so that I can use it to give the correct length of the password. As of right now I can't add a return just yet as it needs its own code block or it will jump out of the function.
  userInput(){
      let lowercase = confirm(`Do you want to include lower case letters?`);
      let uppercase = confirm(`Do you want to include upper case letters?`);
      let num = confirm(`Do you want to include numbers?`);
      let specialchar = confirm(`Do you want to include special characters?`);
      if (lowercase && uppercase && num && specialchar){
        this.getPasswordOptions()
      } else if (lowercase && uppercase && num && specialchar === false){
        this.getPasswordOptions2
      } else if (lowercase && uppercase && num === false && specialchar){
        this.getPasswordOptions3
      } else if (lowercase && uppercase === false && num && specialchar){
        this.getPasswordOptions4
      } else if (){}
      
  },

  getPasswordOptions1() {

    userPasswordArray.push(getRandom(lowerCasedCharacters), getRandom(upperCasedCharacters),getRandom(numericCharacters),getRandom(specialCharacters));
},
  getPasswordOptions2() {

  userPasswordArray.push(getRandom(lowerCasedCharacters), getRandom(upperCasedCharacters),getRandom(numericCharacters));
},
  getPasswordOptions3() {

  userPasswordArray.push(getRandom(lowerCasedCharacters), getRandom(upperCasedCharacters),getRandom(specialCharacters));
},
  getPasswordOptions4() {

  userPasswordArray.push(getRandom(lowerCasedCharacters), getRandom(upperCasedCharacters),getRandom(numericCharacters),getRandom(specialCharacters));
}

}
objectOfFunctions.getPasswordOptions()
console.log(userPasswordArray); // I've reached this point whereby I want to add the return value of each of these functions to an array.

// Function for getting a random element from an array
function getRandom(arr) {
      let randomItemIndex = Math.floor(Math.random()* arr.length);
      return arr[randomItemIndex];
      
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  
  let startingPoint = prompt(`Select how many characters you want for your password`)
  let userInputToNumber = parseInt(startingPoint)
      if (userInputToNumber < 8 || userInputToNumber > 128) {
        alert(`Password should ONLY be between 8 - 128 characters`);
      } else if (isNaN(userInputToNumber)){
        alert(`You did not enter a number. Please enter a number between 8 - 128`)
      } else {objectOfFunctions.userInput()}
    
  
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);





/*
next create a function to prompt to select if stateent (yes then allow for sleection from lower case array .ask for upper case etc) if no then move to up case*/1

let array =[]


function test(){
 return array.push(`sonic`, `tails`)
}

test()
console.log(array);

