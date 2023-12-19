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
      
userInputOptions(){
  
  selectedOptions = options.filter(function(option) {
    return confirm(`Do you want to include ${option} characters?`) === true; 
  })


 
  // filter method is used to return a boolean value (true or false), it will only include elements for which the function returns true. For some reason this above filter was displaying the values I clicked 'cancel' i.e. false. So the best way to counter it is that I set out === true to ensure that only selected options with a true value are included in the array. This is a very good learning point that sometimes you need to manually validate if reuslts aren't showing as intended.

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

    
        for (let i = 0; i < characterLimit; i++) {
          arr.forEach(function (value) {
            userPasswordArray.push(getRandom(passwordOptions[value]));
          });
        }
      
       
        userPasswordArray = userPasswordArray.slice(0, characterLimit);  // Reason I added this is because for some reason my password would exceed the characterlimit even though the loop is supposed to stop. I need to later on find out why this was the case to prevent future loops from continously running.
        
        this.convertArrayToString()
        
      },

      convertArrayToString(){
        
        let textarea = document.querySelector('#password');
            textarea.value = userPasswordArray.join('');
            return alert(`Your new password is ${userPasswordArray.join('')}`)
      }
    };




  




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
  userInputToNumber = parseInt(startingPoint)
      if (userInputToNumber < 8 || userInputToNumber > 128) {
        alert(`Password should ONLY be between 8 - 128 characters`);
      } else if (isNaN(userInputToNumber)){       
        alert(`You did not enter a number. Please enter a number between 8 - 128`)
      } else {objectOfFunctions.userInputOptions()}
    
  
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);







