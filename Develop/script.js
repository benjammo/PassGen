// Assignment Code
var generateBtn = document.querySelector("#generate");

let passArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let passLength = prompt("Specify length of password 8-128:", "8-128");
let passUppers = prompt("Should your password include uppercase letters?", "enter yes or no");
let passNums = prompt("Should your password include numbers?", "yes or no");
let passSpecial = prompt("Should your password include special characters?", "yes or no");

if (passLength < 8 || passLength > 128) {
  alert("Your length does not meet the criteria. Refresh the page, and try again.");
};

if (passUppers.toLowerCase() === "yes") {
  passArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
};

if (passNums.toLowerCase() === "yes") {
  passArray.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
};

if (passSpecial.toLowerCase() === "yes") {
  passArray.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")")
};

console.log(passArray);

function generatePassword() {
  let finishedPass = '';
  for (let i = 0; i < passLength; i++) {
    let character = Math.floor(Math.random() * passArray.length);
    console.log(passArray[character]);
    finishedPass += passArray[character];
  }
  console.log(finishedPass);
  return finishedPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


