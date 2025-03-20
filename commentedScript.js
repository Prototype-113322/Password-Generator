"use strict";

// SELECTING ELEMENTS
let passwordValue = document.querySelector(".random-number-input");
let includeUpperCase = document.querySelector("#uppercase-checkbox");
let includeLowerCase = document.querySelector("#lowercase-checkbox");
let includeNumbers = document.querySelector("#numbers-checkbox");
let includeSymbols = document.querySelector("#symbols-checkbox");
let rangeOfCharacters = document.querySelector(".range-bar");
let lengthOfCharacters = document.querySelector(".character-length");
let checkboxInput = document.querySelectorAll(".checkbox-class");
let generateButton = document.querySelector(".generate-btn");
let securityBar = document.querySelectorAll(".vertical-bar");

// console.log(generateButton);
// console.log(passwordValue);
// console.log(includeLowerCase);
// console.log(includeUpperCase);
// console.log(includeNumbers);
// console.log(includeSymbols);
// console.log(rangeOfCharacters);
// console.log(lengthOfCharacters);

// CHARACTER SETS
let rangePercent = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseLetters = lowerCaseLetters.toUpperCase();
let digits = "0123456789";
let symbols = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

// CHARACTER LENGTH IDENTIFIER

function characterLengthIdentifier() {
  rangeOfCharacters.value = 0;
  rangeOfCharacters.addEventListener("input", function (event) {
    let currentRangeValue = parseInt(event.target.value) / 10;
    if (rangePercent.includes(currentRangeValue)) {
      lengthOfCharacters.textContent = Number(currentRangeValue);
    }
  });
}

function randomCharGen(parameter) {
  let storeValue = "";
  let charLength = Number(lengthOfCharacters.textContent);
  // console.log(charLength, typeof charLength);
  for (let i = 0; i < charLength; i++) {
    let test = Math.floor(Math.random() * parameter.length);
    storeValue = storeValue + parameter[test];
  }
  passwordValue.textContent = storeValue;
}

function randomTwoCharGen(parameter1, parameter2) {
  let charLength = Number(lengthOfCharacters.textContent);
  let charLengthHalf = Math.ceil(charLength / 2);
  console.log("Character Length: " + charLength);
  console.log("Half Character Length: " + charLengthHalf);
  console.log(parameter1 + "  HELLO");

  let firstHalfValue = "";
  let secondHalfValue = "";

  // Randomly Picking Characters from parameter1 and then add it into firstHalfValue
  for (let i = 0; i < charLengthHalf; i++) {
    let randomCharPicker = Math.floor(Math.random() * parameter1.length);
    // console.log(randomCharPicker);
    firstHalfValue = firstHalfValue + parameter1[randomCharPicker];
  }
  // console.log("First Half => " + firstHalfValue);

  // Randomly Picking Characters from parameter2 and then add it into secondHalfValue
  for (let i = 0; i < charLength - charLengthHalf; i++) {
    let randomCharPicker = Math.floor(Math.random() * parameter2.length);
    // console.log(randomCharPicker);
    secondHalfValue = secondHalfValue + parameter2[randomCharPicker];
  }
  // console.log("Second Half => " + secondHalfValue);

  // Combine Both Halves and then randomize it
  let combineBothHalf = firstHalfValue + secondHalfValue;
  let shuffle = combineBothHalf
    .split("")
    .sort(() => Math.random() - 0.5)
    .join(""); // Shuffle result
  // console.log(shuffle);
  let finalResult = shuffle.slice(0, charLength);

  passwordValue.textContent = finalResult;
}
function randomThreeCharGen(parameter1, parameter2, parameter3) {
  let charLength = Number(lengthOfCharacters.textContent);
  let charLengthOneThird = Math.ceil(charLength / 3);

  let firstPart = "";
  let secondPart = "";
  let thirdPart = "";

  // Ensure the total length remains charLength
  let remainingLength = charLength - 2 * charLengthOneThird;

  // Randomly picking characters from parameter1
  for (let i = 0; i < charLengthOneThird; i++) {
    let randomCharPicker = Math.floor(Math.random() * parameter1.length);
    firstPart += parameter1[randomCharPicker];
  }

  // Randomly picking characters from parameter2
  for (let i = 0; i < charLengthOneThird; i++) {
    let randomCharPicker = Math.floor(Math.random() * parameter2.length);
    secondPart += parameter2[randomCharPicker];
  }

  // Randomly picking characters from parameter3 (remaining characters)
  for (let i = 0; i < remainingLength; i++) {
    let randomCharPicker = Math.floor(Math.random() * parameter3.length);
    thirdPart += parameter3[randomCharPicker];
  }

  // Combine all parts and shuffle
  let combined = firstPart + secondPart + thirdPart;
  let shuffled = combined
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  // Get the final result
  let finalResult = shuffled.slice(0, charLength);
  passwordValue.textContent = finalResult;
}

function randomFourCharGen(parameter1, parameter2, parameter3, parameter4) {
  let charLength = Number(lengthOfCharacters.textContent);
  let charLengthOneFourth = Math.ceil(charLength / 4);

  let firstPart = "";
  let secondPart = "";
  let thirdPart = "";
  let fourthPart = "";

  // Remaining characters after distributing three-fourths
  let remainingLength = charLength - 3 * charLengthOneFourth;

  // Randomly picking characters from parameter1
  for (let i = 0; i < charLengthOneFourth; i++) {
    let randomCharPicker = Math.floor(Math.random() * parameter1.length);
    firstPart += parameter1[randomCharPicker];
  }

  // Randomly picking characters from parameter2
  for (let i = 0; i < charLengthOneFourth; i++) {
    let randomCharPicker = Math.floor(Math.random() * parameter2.length);
    secondPart += parameter2[randomCharPicker];
  }

  // Randomly picking characters from parameter3
  for (let i = 0; i < charLengthOneFourth; i++) {
    let randomCharPicker = Math.floor(Math.random() * parameter3.length);
    thirdPart += parameter3[randomCharPicker];
  }

  // Randomly picking characters from parameter4 (remaining characters)
  for (let i = 0; i < remainingLength; i++) {
    let randomCharPicker = Math.floor(Math.random() * parameter4.length);
    fourthPart += parameter4[randomCharPicker];
  }
  console.log(fourthPart);
  // Combine all parts and shuffle
  let combined = firstPart + secondPart + thirdPart + fourthPart;
  let shuffled = combined
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  // Get the final result
  let finalResult = shuffled.slice(0, charLength);
  passwordValue.textContent = finalResult;
}

function generatePassword() {
  // PASSWORD RELATED DETAILS
  let selectedSets = [];
  // CHECKED CONDITIONS OF EACH CHECKBOX
  let checkedLowerCaseBox = includeLowerCase.checked;
  let checkedUpperCaseBox = includeUpperCase.checked;
  let checkedNumberBox = includeNumbers.checked;
  let checkedSymbols = includeSymbols.checked;

  for (let i = 0; i < securityBar.length; i++) {
    securityBar[i].style.background = "#24232b";
  }

  if (checkedLowerCaseBox) {
    selectedSets.push(lowerCaseLetters);
  }

  if (checkedUpperCaseBox) {
    selectedSets.push(upperCaseLetters);
  }

  if (checkedNumberBox) {
    selectedSets.push(digits);
  }

  if (checkedSymbols) {
    selectedSets.push(symbols);
  }
  console.log(selectedSets);

  if (selectedSets.length == 0) {
    passwordValue.textContent = "Please Select Atleast One Option";
  }
  if (selectedSets.length == 1) {
    console.log("Only one element");
    randomCharGen(selectedSets[0]);
    securityBar[0].style.background = "#a4ffaf";
  }
  if (selectedSets.length == 2) {
    randomTwoCharGen(selectedSets[0], selectedSets[1]);
    for (let i = 0; i < selectedSets.length; i++) {
      securityBar[i].style.background = "#a4ffaf";
    }
  }

  if (selectedSets.length == 3) {
    randomThreeCharGen(selectedSets[0], selectedSets[1], selectedSets[2]);
    for (let i = 0; i < selectedSets.length; i++) {
      securityBar[i].style.background = "#a4ffaf";
    }
  }
  if (selectedSets.length == 4) {
    randomFourCharGen(
      selectedSets[0],
      selectedSets[1],
      selectedSets[2],
      selectedSets[3]
    );

    for (let i = 0; i < selectedSets.length; i++) {
      securityBar[i].style.background = "#a4ffaf";
    }
  }
}

generateButton.addEventListener("click", generatePassword);
characterLengthIdentifier();
