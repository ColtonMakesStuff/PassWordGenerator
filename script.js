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



// ~~~~~~~~~~~Start Declared Variables~~~~~~~~~~
var possibilities = "";
var numberOfSpecs = 0
var tackOnString = ""
var confirmationMessageToUser = ""
// ~~~~~~~~~~~End Declared Variables~~~~~~~~~~


// ~~~~~~~~~~~Start Main Function~~~~~~~~~~
function generatePassword() {

  // variable that will be the entire password without the mandatory characters
  var mainPassword = ""; 
  var passwordLength = 0
  var confirmationMessageToUser = ""
  // sets length
  var passwordLength = prompt("how many characters in your password? (8-128)") 
  //this resets due to invalid input
  if (passwordLength <8 || passwordLength> 128){
    return "password length of " + passwordLength + " is invalid, please try again"
  } else { confirmationMessageToUser += ", " + passwordLength + " characters" ;
}
  //collects criteria
  var confirmUppercase = confirm("do you want uppercase letters");
  var confirmLowercase = confirm("do you want lowercase letters");
  var confirmNumbers = confirm("do you want numbers");
  var confirmSpecialCharacters = confirm("do you want special characters");
  //this resets due to invalid input
 if (!confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmSpecialCharacters)
 {
  return "please select at least one character type"
 }
  // calls function for each type
    if (confirmUppercase === true){   
      confirmationMessageToUser += "," + " uppercase" ;
      getSet("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }
    if (confirmLowercase === true){
      confirmationMessageToUser += "," + " lowercase" ;
      getSet("abcdefghijklmnopqrstuvwxyz")
    }
    if (confirmNumbers === true){
      confirmationMessageToUser += "," + " numbers" ;
      getSet("1234567890")
    }
    if (confirmSpecialCharacters === true){
      confirmationMessageToUser += "," + " special characters" ;
      getSet("+-!@#$%^&*")
    }
//this resets due to user confirm if incorrect
    var continueToPassword = confirm("you would like" + confirmationMessageToUser + ". if this is correct please press [Confirm] to continue or [Cancel] to restart");
if (continueToPassword === false){
  return "please try again"
}
    //turns the string into an index
 var randomIndex = possibilities.split(""); 

 // for loop for number of characters - the number of mandatory characters
 for (var i = numberOfSpecs; i < passwordLength; i++) { 

  //this takes a random number between 0 and 1 (a fraction of 1 lets say .4567) and then
  //multiplies it by the length of the index of possibilities (lets say 23) (which becomes 10.5041) and then
  //"grounds it" by making it into a whole number (11 in this example)
  var index = Math.floor(Math.random() * randomIndex.length); 

  //this associates that generated number with a item in the index (lets say K)
  mainPassword += randomIndex[index];
 }

//this adds the main password section to the string of mandatory characters
var finalPassswordIndex = mainPassword + tackOnString;

// this sends it to the box
return finalPassswordIndex;
}
// ~~~~~~~~~~~end Main Function~~~~~~~~~~


// ~~~~~~~~~~~Start Internal Functions~~~~~~~~~~
//this is a function that adds to the number of specifications/mandatory characters
function addOneToSpecs(){

  //this adds one for every time its called
  numberOfSpecs ++ 
}

function getSet(set){
// this adds the string in the set to the total possibilities
   possibilities += set;

//this is for associating with the random selection for the mandatory
     var ifSet = "";

// this turns the string into an index
   var setRandomIndex = set.split("");

     //see previous for loop of random generation
   var setIndex = Math.floor(Math.random() * setRandomIndex.length);
   ifSet += setRandomIndex[setIndex];
   tackOnString += ifSet;

// this calls the function to add 1 for each set of parameters
   addOneToSpecs();
}


// ~~~~~~~~~~~End internal functions~~~~~~~~







// ~~~~~~~~~start much much less efficiant code that i upgraded~~~~~~~~~~~
//  if (confirmUppercase === true){
//    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   possibilities += upper;
//   var ifUpper = ""
//   var upperRandomIndex = upper.split("");
//   var upperIndex = Math.floor(Math.random() * upperRandomIndex.length);
//   ifUpper += upperRandomIndex[upperIndex]
//   tackOnString += ifUpper
//   addOneToSpecs()
//  }

//  if (confirmLowercase === true){
//    var lower = "abcdefghijklmnopqrstuvwxyz";
//   possibilities += lower; 
//   var ifLower = ""
//   var lowerRandomIndex = lower.split("");
//   var lowerIndex = Math.floor(Math.random() * lowerRandomIndex.length);
//   ifLower += lowerRandomIndex[lowerIndex]
//   tackOnString += ifLower
//   addOneToSpecs()
//  }

//  if (confirmNumbers === true){
//    var number = "1234567890";
//   possibilities += number;
//     var ifNumber = ""
//   var numberRandomIndex = number.split("");
//   var numberIndex = Math.floor(Math.random() * numberRandomIndex.length);
//   ifNumber += numberRandomIndex[numberIndex]
//   tackOnString += ifNumber
//   addOneToSpecs()
//  }

//  if (confirmSpecialCharacters === true){
//    var special = "+-!@#$%^&*";
//   possibilities += special;
//    var ifSpecial = ""
//   var specialRandomIndex = special.split("");
//   var specialIndex = Math.floor(Math.random() * specialRandomIndex.length);
//   ifSpecial += specialRandomIndex[specialIndex]
//   tackOnString += ifSpecial
//   addOneToSpecs()
//  }
// ~~~~~~~~~end much much less efficiant code i upgraded~~~~~~~~~~~



//~~~Everything below is my thought procces pre-starting to code~~~

//problem: i need a new password
//must generate on button click
//on click - open prompt with password criteria
//choose criteria
//validate that all criteria were chosen on button click
//if all good, say generating password and then generate password
//if not, display error message until corrected and resubmitted
//for length: it will be equal to selected length
//for all other factors it will generate at least one of every selected type 
//for each type it will randomly choose the order
//for each character type it will randomly choose the specific character
// password will return with an option to copy to clipboard or to generate a new password 
// there will also be a message displaying a 1 minute timer before page resets for security

//      structure
//button to open prompt
//
//prompt with same basic properties but with length,character type, and capitalization
//
//then a screen with same structure that relays back the selected criteria and has a confirmation button with option to redo criteria 
//
//screen that has a message diplaying 'password generating...'
//
//password screen that has a copy to clipboard option and a countdown timer to page reset (1 min) and a 'finished, return to home' option 

//      how will I do dropdown menu?
//already did one in portfolio, will reuse and simplify code and styles
//will essentially have a hidden menu of buttons with simple css
//will only include if option is selected

//    how will I do the number of characters selector
//will have an acceptable range of 8-128 that will throw an error message if not within

//script

//      how will I randomize order while still having at least one of each?
//odds aren't enough, it actually needs to be hardwired to always have the proper amounts
//what if I have  the first third sixth and last character be definitivly the selected criteria?
//or I could have it check for each being included and if not it regenerates?
//that would be more elegant but more comlex i think. or would it?
//maybe I could divide up the times a 'dice' is rolled and assign it to each charcter type
//would have to be whole numbers though... i could do it for 8 and have it repeat until met... nah


//~~~~~~~solution~~~~~~~~
//I could always have it run the charcters as the first 1 2 3 or 4 as these and randomize the order, then a different set can run until complete?? I think this could be good. there would be a technically predictable section though...
// but even if known that 1 of each character type will come first guessing those would be a % chance and then the others would have no predicatbility. so essentially it would still be extremely secure as long as the minimum number is 8
// 1/4 that is proper type, then it is 1/8 that the next is right, 
// the chances of getting the order right are roughly 00.39% and the chances of the given character being correct are roughly .0018% and roughly the chances of getting all criteria correct and in the correct order in just 4 characteres is something like .00007%
// or if I let an AI do the math because while I love stats, im not the best in the world at them it says a .00094% chance
// so all in all I am ok with the security of this solution given that 

//regardless given that the chances at worst are about 10 times less likely than me bowling a perfect game... im ok with it (yeah thats real math) especially considering that there will always be more characters that have absolutley no regular pattern. 
//I will also have a password strength estimate displayed that shows more strength when there are more character types and amounts 
//hopefully this will prompt the user to generate a more secure password
//~~~~~~~solution~end~~~~~~~~


//~~~~~~~~~~~~start thoughts about basic structural needs~~~~~~~~~
//      what do I need
//genPassword        f will start proccess
//areYouSure         f will start actual generation

//upperCase           var if (boolean) 
//lowerCase           var if (boolean) 
//characterAmount     var if (boolean)
//numbers             var if (boolean)
//specialCharacters   var if (boolean)

//errorMessage       f if (boolean) not met 'character amount 
//                    invalid'

//randomOrderStart   ƒ choose order of first characters
//upperCaseGen       ƒ choose a random uppercase
//lowerCaseGen       ƒ choose a random lowercase
//numberGen          ƒ choose a random number
//specialGen         ƒ choose a random special character

//randomOrderRest    ƒ choose the order of the rest until 
//                    character amount is met

//resetTimer         f resets after 1 minute
//~~~~~~~~end structure thought proccess~~~~~~~~~~~
// ~~~~~~Pre-coding end~~~~~~~


// ~~~~~start First attempt before better intruction given~~~~~~
// var form = document.getElementById("myForm");
// var uppercaseDropdown = document.getElementById("uppercaseDropdown");
// var specialDropdown = document.getElementById("specialDropdown");
// var numberDropdown = document.getElementById("numberDropdown");
// var numberOfCharacters = document.getElementById("numberOfCharacters");

// let userInput 
// form.addEventListener("click", function(event) {
//   event.preventDefault();

//   if (
//     uppercaseDropdown.value === "" ||
//     specialDropdown.value === "" ||
//     numberDropdown.value === "" ||
//     numberOfCharacters.value === ""
//   ) {
//     console.log("Please select an option for all fields")
//   } 
    
//   }
// );

// alert("here is my alert")
// ~~~~~~End first attempt~~~~~~~~~~~


