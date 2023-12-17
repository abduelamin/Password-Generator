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
let userInputToNumber = 0;
let userPasswordArray = [];
let options = ['lowercase', 'uppercase', 'number', 'special'];
let selectedOptions = []

let objectOfFunctions = {
      
  // I need a return value for userInputToNumber so that I can use it to give the correct length of the password. As of right now I can't add a return just yet as it needs its own code block or it will jump out of the function.
userInputOptions(){
  
  selectedOptions = options.filter(function(option) {
    return confirm(`Do you want to include ${option} characters?`);
  })

    this.userInputCall();
},
 
  userInputCall() {

    this.getPasswordOptions(selectedOptions);
  

  },

  getPasswordOptions (arr) {
    
    const characterLimit = userInputToNumber // This sets the limit for the length of the array. Since this function is pushing the items into the new array I placed it here so that we know there is a limit to the array length.

    let passwordOptions = {

      'lowercase': lowerCasedCharacters,
      'uppercase': upperCasedCharacters,
      'number': numericCharacters,
      'special': specialCharacters
    };

    
        while (userPasswordArray.length <= characterLimit) {
          arr.forEach(function (value) {
            userPasswordArray.push(getRandom(passwordOptions[value]));
          });
        }
      
       
        userPasswordArray = userPasswordArray.slice(0, characterLimit);
        
        this.convertArrayToString()
        
      },

      convertArrayToString(){
        
        return console.log(userPasswordArray.join(``));
      }
    };




  




// Function for getting a random element from an array
function getRandom(arr) {
      let randomItemIndex = Math.floor(Math.random()* arr.length);
      return arr[randomItemIndex]; 
}

// Function to generate password with user input
function generatePassword(finalArray) {

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  
  let startingPoint = prompt(`Select how many characters you want for your password`)
  userInputToNumber = parseInt(startingPoint)
      if (userInputToNumber < 8 || userInputToNumber > 128) {
        alert(`Password should ONLY be between 8 - 128 characters`);
      } else if (isNaN(userInputToNumber)){       //isNaN() is a useful method for testing if something is a number or not. Just insert the variable you want to test inside the (). It will return a boolean value. Basically this method is asking, is what is inside the() not a number? If its not a number it will return true. however, if it is a number it will return false.
        alert(`You did not enter a number. Please enter a number between 8 - 128`)
      } else {objectOfFunctions.userInputOptions()}
    
  
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);




let array =[]


function test(){
 return array.push(`sonic`, `tails`)
}

test()
console.log(array);



