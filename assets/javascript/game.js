// For now these are just some variable I know i'll have to use

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
var wordElement = document.getElementById("the-word");

// When game starts
window.onload = function() {
  // Computer picks random dog name
  var chosenWord = myDogs[Math.floor(Math.random() * myDogs.length)];

  // 1 Loop over the chosen word
  for (var i = 0; i < chosenWord.length; i++) {
    console.log("I hate you, ", chosenWord[i]);
    var letter = chosenWord[i]; // I'm using the index from the for loop to find the letter of the word

    var node = document.createElement("span");
    node.innerText = "_ ";
    wordElement.appendChild(node);
  }
  // 2 Create an HTML element for each part of the word

  // 3 Attach node element into DOM
};

// When user presses a key
document.onkeydown = function(event) {
  // If the entry exists within the alphabet array (must be a letter)
  if (alphabet.includes(event.key)) {
    console.log(event.key);
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
