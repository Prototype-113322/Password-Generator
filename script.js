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
let clipboardButton = document.querySelector(".clipboard-image");
let copiedText = document.querySelector(".copied-modal");
let checkboxLabel = document.querySelectorAll(".label");

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
  for (let i = 0; i < charLength; i++) {
    let test = Math.floor(Math.random() * parameter.length);
    storeValue = storeValue + parameter[test];
  }
  passwordValue.textContent = storeValue;
}

function randomTwoCharGen(parameter1, parameter2) {
  let charLength = Number(lengthOfCharacters.textContent);
  let charLengthHalf = Math.ceil(charLength / 2);

  let firstHalfValue = "";
  let secondHalfValue = "";

  // Randomly Picking Characters from parameter1 and then add it into firstHalfValue
  for (let i = 0; i < charLengthHalf; i++) {
    let randomCharPicker = Math.floor(Math.random() * parameter1.length);
    firstHalfValue = firstHalfValue + parameter1[randomCharPicker];
  }

  // Randomly Picking Characters from parameter2 and then add it into secondHalfValue
  for (let i = 0; i < charLength - charLengthHalf; i++) {
    let randomCharPicker = Math.floor(Math.random() * parameter2.length);
    secondHalfValue = secondHalfValue + parameter2[randomCharPicker];
  }

  // Combine Both Halves and then randomize it
  let combined = firstHalfValue + secondHalfValue;
  let shuffled = combined.split("");
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  passwordValue.textContent = shuffled.slice(0, charLength).join("");
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
  let shuffled = combined.split("");
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  passwordValue.textContent = shuffled.slice(0, charLength).join("");
}

function randomFourCharGen(parameter1, parameter2, parameter3, parameter4) {
  let charLength = Number(lengthOfCharacters.textContent);

  // Ensure at least one character from each selected type
  let firstPart = parameter1[Math.floor(Math.random() * parameter1.length)];
  let secondPart = parameter2[Math.floor(Math.random() * parameter2.length)];
  let thirdPart = parameter3[Math.floor(Math.random() * parameter3.length)];
  let fourthPart = parameter4[Math.floor(Math.random() * parameter4.length)];

  // Remaining characters to be distributed randomly
  let remainingLength = charLength - 4;
  let allChars = parameter1 + parameter2 + parameter3 + parameter4;
  let remainingChars = "";

  for (let i = 0; i < remainingLength; i++) {
    let randomCharPicker = Math.floor(Math.random() * allChars.length);
    remainingChars += allChars[randomCharPicker];
  }

  // Combine all parts and shuffle
  let combined =
    firstPart + secondPart + thirdPart + fourthPart + remainingChars;
  let shuffled = combined.split("");

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  passwordValue.textContent = shuffled.slice(0, charLength).join("");
}

function generatePassword() {
  // PASSWORD RELATED DETAILS
  let selectedSets = [];
  // CHECKED CONDITIONS OF EACH CHECKBOX
  let checkedLowerCaseBox = includeLowerCase.checked;
  let checkedUpperCaseBox = includeUpperCase.checked;
  let checkedNumberBox = includeNumbers.checked;
  let checkedSymbols = includeSymbols.checked;

  // RESETTING CLIPBOARD MESSAGE
  copiedText.classList.add("hidden");

  for (let i = 0; i < securityBar.length; i++) {
    securityBar[i].style.background = "#24232b";
  }

  // IF CHARACTER LENGTH IS ZERO THEN ADD
  let charLength = Number(lengthOfCharacters.textContent);
  if (charLength === 0) {
    passwordValue.textContent = "Kindly select character length!";
    passwordValue.style.fontSize = "1.2rem";
    return;
  } else {
    passwordValue.style.fontSize = "1.5rem";
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

  if (selectedSets.length == 0) {
    passwordValue.textContent = "Please Select Atleast One Option";
    passwordValue.style.fontSize = "1.2rem";
  }
  if (selectedSets.length == 1) {
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

// CLIPBOARD FUNCTIONALITY
clipboardButton.addEventListener("click", function () {
  let storeValue = passwordValue.textContent;
  navigator.clipboard
    .writeText(storeValue)
    .then(function () {
      // ERROR HANDLING
      console.log("Copied Successfully");
      copiedText.classList.remove("hidden");
    })
    .catch(function () {
      console.log("Copied Unsuccessfully");
    });
});

for (let i = 0; i < checkboxLabel.length; i++) {
  checkboxLabel[i].addEventListener("click", function () {
    checkboxInput[i].toggleAttribute("checked");
  });
}

generateButton.addEventListener("click", generatePassword);
characterLengthIdentifier();
