//dice randomizer
// version like.. 4? 5?

// randomizer command, only way i know how to do this
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateDiceImage(diceElement, randomNumber) {
    var diceImage = "images/dice" + randomNumber + ".png";
    diceElement.setAttribute("src", diceImage);
}

// two dice of course requires 2 numbers
var numtest = {r1: getRandomNumber(), 
               r2: getRandomNumber() // split this into multiple lines in case i need to add more random number in future.
}



// Select dice image elements
var diceImages = document.querySelectorAll("img");

// update the object i made for the random numbers to match the dice image
updateDiceImage(diceImages[0], numtest.r1);
updateDiceImage(diceImages[1], numtest.r2);

// Determine winner and update header text
// because i changed the numtest to be objects I needed to change it here as well.
var headerText;
const { r1, r2} = numbertest;

//trying to use a ternary operator
headerText = r1 > r2 ? "Player 1 wins! FATALITY!!!" : r2 > r1 ? "Player 2 wins! Get good scrub." : "Draw, everyone loses! 😭";

// discontinued code - leaving for visibility can be erased.
// if (r1 > r2) {
//    headerText = "Player 1 wins! FATALITY!!!";
// } 
// else if (r2 > r1) {
//    headerText = "Player 2 wins! Get good scrub.";
// } else {
//    headerText = "Draw, everyone loses! 😭";
//}

document.querySelector("h1").innerHTML = headerText;


