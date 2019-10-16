// These are my variables I know I'll have to use

var myDogs = ["pomeranian", "beagle", "corgi", "vizsla", "greyhound", "husky"];

var wins = 0;
var wordElement = document.getElementById("the-word");
var wordBlanks = [];
var chosenWord;

// When game starts
window.onload = function() {
  // Computer picks random dog name
  chosenWord = myDogs[Math.floor(Math.random() * myDogs.length)];

  // Loop over the chosen word
  for (var i = 0; i < chosenWord.length; i++) {
    // Display every character at every index of chosenWord
    console.log(chosenWord[i]);
    // Add a new item ("_") to the wordBlanks array
    wordBlanks.push("_");
    // Join the elements of the array into a string and display it on the screen
    document.getElementById("the-word").textContent = wordBlanks.join(" ");
  }
};

// When user presses a key
document.onkeydown = function(event) {
  // If the entry exists within the alphabet array (must be a letter)
  if (chosenWord.includes(event.key)) {
    console.log(event.key);
    var indexPosition = chosenWord.indexOf(event.key); // Or i could write a for-loop here to replace this

    wordBlanks[indexPosition] = event.key;
    document.getElementById("the-word").textContent = wordBlanks.join(" "); // and the for-loop would end here
  }
};

// Computer randomly picks word
// Computer presents user with "_" representing each letter of the word
// User inputs letter
// If any letter matches, the "_" is replaced with that letter
// If letter doesn't match, letter is shown under letters already guessed
// If letter doesn't match, number of guesses remaining decreases by one
// When number of guesses remaining = 0, user is presented with "Game over"
// Once all _ are replaced with letters, user alerts 'You win'
// When user wins, "wins" increases by one
// When user wins, game resets to new
