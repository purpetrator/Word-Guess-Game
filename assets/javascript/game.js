// These are my variables I know I'll have to use

var myDogs = ["pomeranian", "beagle", "corgi", "vizsla", "greyhound", "husky"];

var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var wins = 0;
var remaining = 10;
var guessedLetters = [];
var wordBlanks = [];
var chosenWord;

// Create variables that hold references to the places in the HTML
var directionsText = document.getElementById("directions-text");
var guessDog = document.getElementById("guess-dog-text");
var wordElement = document.getElementById("the-word");

var winsText = document.getElementById("totalWins");
var guessesLeft = document.getElementById("guessesRemaining");
var guessedAlready = document.getElementById("alreadyGuessed");

// Game Over and Reset
// I need to reset all my variables except Wins
function resetGame() {
  remaining = 10;
  guessedLetters = [];
  wordBlanks = [];
  // Computer picks random dog name
  chosenWord = myDogs[Math.floor(Math.random() * myDogs.length)];

  // Loop over the chosen word
  for (var i = 0; i < chosenWord.length; i++) {
    // Log every character at every index of chosenWord
    console.log(chosenWord[i]);
    // Add a new item ("_") to the wordBlanks array
    wordBlanks.push("_");
    // Join the elements of the array into a string and display it on the screen
    wordElement.textContent = wordBlanks.join(" ");
    guessedAlready.textContent = guessedLetters.join(" ");
    guessesLeft.textContent = remaining;
  }
}

// When game starts
window.onload = function() {
  // Computer picks random dog name
  resetGame();
};

// When user presses a key
document.onkeydown = function(event) {
  if (alphabet.includes(event.key)) {
    // If the entry exists within the alphabet array (must be a letter)
    if (chosenWord.includes(event.key)) {
      console.log(event.key);
      // Check to see how many times letter shows up in word
      for (var i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === event.key) {
          wordBlanks[i] = event.key;
        }
      }
      wordElement.textContent = wordBlanks.join(" "); // and the for-loop would end here

      // If the entry DOES NOT exist within the alphabet array
    } else {
      // If it DOES NOT already exist in the guessed letters array (This prevents duplicate guessed letters)
      if (!guessedLetters.includes(event.key)) {
        remaining--;

        // Add incorrectly guessed letters to guessedLetters array
        guessedLetters.push(event.key);
        // Join letters with a space
        guessedAlready.textContent = guessedLetters.join(" ");
      }
    }

    // Hide the directions
    directionsText.textContent = "";
    guessDog.textContent = "Guess the dog breed!";

    // Display the wins and guesses on the screen
    guessesRemaining.textContent = " " + remaining;

    // End game message
    if (remaining == 0) {
      console.log("you suck");
      alert("Sorry! You're Out Of Guesses!");
      resetGame();
    }

    // Define what a win is and what happens when the word is guessed
    if (!wordBlanks.includes("_")) {
      wins++;
      totalWins.textContent = " " + wins;
      console.log("You Win!");
      // Delays alert by half a second after increasing wins
      setTimeout(function() {
        alert("You Win!");
      }, 500);
      resetGame();
    }
  }
};
