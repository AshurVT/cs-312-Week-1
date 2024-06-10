//dice randomizer

// randomizer command, only way i know how to do this
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateDiceImage(diceElement, randomNumber) {
    var diceImage = "images/dice" + randomNumber + ".png";
    diceElement.setAttribute("src", diceImage);
}

// two dice of course requires 2 numbers
var numtest = {r1: getRandomNumber(), r2: getRandomNumber()
}



// Select dice image elements
var diceImages = document.querySelectorAll("img");

// update the object i made for the random numbers to match the dice image
updateDiceImage(diceImages[0], numtest.r1);
updateDiceImage(diceImages[1], numtest.r2);

// Determine winner and update header text
var headerText;
if (numtest.r1 > numtest.r2) {
    headerText = "Player 1 wins! FATALITY!!!";
} else if (numtest.r2 > numtest.r1) {
    headerText = "Player 2 wins! Get good scrub.";
} else {
    headerText = "Draw, everyone loses! 😭";
}

document.querySelector("h1").innerHTML = headerText;


