//dice randomizer

// Generate random number between 1 and 6
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Update dice image source
function updateDiceImage(diceElement, randomNumber) {
    var diceImage = "images/dice" + randomNumber + ".png";
    diceElement.setAttribute("src", diceImage);
}

// Get random numbers for both dice
var randomNumber1 = getRandomNumber();
var randomNumber2 = getRandomNumber();

// Select dice image elements
var diceImages = document.querySelectorAll("img");

// Update dice images
updateDiceImage(diceImages[0], randomNumber1);
updateDiceImage(diceImages[1], randomNumber2);

// Determine winner and update header text
var headerText;
if (randomNumber1 > randomNumber2) {
    headerText = "Winner! 🚩Player 1!";
} else if (randomNumber2 > randomNumber1) {
    headerText = "Winner!🚩 Player 2!";
} else {
    headerText = "Draw, everyone loses! 😭";
}

document.querySelector("h1").innerHTML = headerText;

// This is a test
