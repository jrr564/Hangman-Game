//define some global variables
//bank of words to guess
var wordList = [
        "drakeposting",
        "jordan",
        "success",
        "girlfriend",
        "arthur",
        "futurama",
        "spongebob",
        "wonka",    
        "aliens"
];

var word=""; // the word we want someone to guess
var target = []; // where we put the answer
var guessesLeft = 8;
var guessedLetters = [];

//so everything can load
function shell(){ // Pick a random word
  word = wordList[Math.floor(Math.random() * wordList.length)];
  // Set up the answer array
  target = [];
  for (var i = 0; i < word.length; i++) {
    target[i] = "_";
  }
  document.getElementById("answer").innerHTML= target.join(" ");
  document.getElementById("pic").src= "Aliens.jpg";
  document.getElementById("message").innerHTML= "Pick a letter. Hit Guess.";
  document.getElementById("guessed").innerHTML= guessedLetters;
}
shell();

//request input and game starts
function guessOne() {
    // Get a guess from the player
    var guess = document.getElementById("guess").value;
    var showThisMessage = "";
        if (guess.length !== 1) {
         showThisMessage ="Please enter only a single letter";
        }  else {
        // Update the game with the guess
        var i=0; // an indexer into the array 
        for (i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                target[i] = guess;
                showThisMessage = "Booyah! "+guess+" is in the answer"
            }
        }

        // Update the game for remaining unknowns
        var remaining_letters = target.length;
        // recount the remaining letters
        for (i = 0; i < target.length; i++) {
            if (target[i] !== '_') {
                remaining_letters -= 1;
            }
        }

        // if no remaining letters, hurray, you won
        if (remaining_letters == 0) {
            showThisMessage = "YES! You guessed the word";
        }

        // (otherwise) if we have no message, wrong guess 
        if (showThisMessage === "") {
            showThisMessage = "Sorry, no "+guess;
            guessedLetters.push(guess);
            document.getElementById("guessed").innerHTML= guessedLetters;

        }

        // Update the puzzle
        document.getElementById("answer").innerHTML = target.join(" ");

        // Lend a hand by clearing out their last guess
        document.getElementById("guess").value = "";
  }
  document.getElementById("message").innerHTML = showThisMessage;
}



 


