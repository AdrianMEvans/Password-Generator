//create variables
let passwordEl = document.querySelector("#password");
let btncreateEl = document.querySelector("#generate");

//Create EventListener for clicking on button
btncreateEl.addEventListener("click", function () {
   
//First Prompt to obtain the required character length that must be between 8 - 128 characters
let charLength = prompt("Select the length of your desired password - must be value between 8 and 128.");

//If the Character length specified is correct then run the function
    if ((charLength < 8) || (charLength > 128)) {
        alert("Please select value 8 - 128");
    } else { ((charLength > 7) && (charLength < 129)) 

        //variables available for the Password Generator TextArea 
        let lowerCase = "abcdefghijklmnopqrstuvwxyz";
        let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let numbers = "1234567890";
        let symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";  

        //set a blank string for the new password to be generated in
        let newPassword = "";

        //create variables that embody all the possible different combinations 
        let allCharacters = symbols + numbers + lowerCase + upperCase;
        let combo1 = symbols + numbers + lowerCase;
        let combo2 = symbols + numbers + upperCase;
        let combo3 = symbols + lowerCase + upperCase;
        let combo4 = numbers + lowerCase + upperCase;
        let combo5 = symbols + numbers;
        let combo6 = symbols + lowerCase;
        let combo7 = symbols + upperCase;
        let combo8 = numbers + lowerCase;
        let combo9 = numbers + upperCase;
        let combo10 = lowerCase + upperCase;

        //prompt user with what character types they wish their password to include
        let includeLowerCase = confirm("Shall we include lower case letters in your Password?");
        let includeUpperCase = confirm("Shall we include UPPER CASE LETTERS in your Password?");
        let includeNumbers = confirm("Shall we include Numbers in your Password?");
        let includeSymbols = confirm("Shall we include Symbols in your Password?");

        //create if statments that loops for every combination of passwords characters
        if ((includeSymbols === true) && (includeNumbers === true) && (includeLowerCase === true) && (includeUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * allCharacters.length);
                newPassword += allCharacters.charAt(character, character + 1);
            }
        // create if statememts that loops for single character sets selected ie symbols || numbers || lowercase || uppercase    
        }
        else if ((includeSymbols === false) && (includeNumbers === false) && (includeLowerCase === true) && (includeUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * lowerCase.length);
                newPassword += lowerCase.charAt(character, character + 1);
            }
        }
        else if ((includeSymbols === false) && (includeNumbers === false) && (includeLowerCase === false) && (includeUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * upperCase.length);
                newPassword += upperCase.charAt(character, character + 1);
            }
        }
        else if ((includeSymbols === false) && (includeNumbers === true) && (includeLowerCase === false) && (includeUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * numbers.length);
                newPassword += numbers.charAt(character, character + 1);
            }
        }
        else if ((includeSymbols === true) && (includeNumbers === false) && (includeLowerCase === false) && (includeUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * symbols.length);
                newPassword += symbols.charAt(character, character + 1);
            }

})

/* PseudoCode
// Need to create var setting the Elements that will be used to create NewPassword and that will be used to Start the prompts for the EventListener.
// Create an EventListener based on the clicking of the button that will then initiate a serious of promtps.
// The First Prompt will be used to to obtain the required character length for the password. This must be between 8 - 128 characters.
// If the Character length specified is within specified parameters then run the function to prompt the user on what types of characters are to be included.
// Set the variables that will be available for the Password Generator to be inlcued in the TextArea 
// Set a blank string for the new password to be generated into that will then become the content of the #password textarea.
// Create variables that embody all the possible different combinations 
// Call out 4 Prompts so that the user can confirm what character types they wish their password to include
// Create if statments that loops for every combination of passwords characters using random.math and limit to character length as per var from first prompt and made up from relevant variable or variable combo.
// Create if statememts that loops for single character sets selected ie symbols || numbers || lowercase || uppercase    
// Create if statememts that loops for Combo Character options selected ie combo 1 || combo 2 || combo 3 etc.
// The results from the function will then be used to create the newPassword to be displayed in the textArea */