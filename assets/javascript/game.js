
// global variables defined

var alphabet = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userWins = 0;
var userLosses = 0;
var guessesRemaining = 9;
var guessesSoFar = " ";

//variables for replacing text in HTML

var userWinsText = document.getElementById("wins");
var userLossesText = document.getElementById("losses");
var guessesRemainingText = document.getElementById("guessesRemaining");
var guessesSoFarText = document.getElementById("guessesSoFar");

// alert("use your keyboard to guess what letter i'm thinking of")

// game begins

document.onkeyup = function(event) {
    var newGuessesRemaining = guessesRemaining--;
    var userGuess = event.key;
    var secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(newGuessesRemaining);

    // A loop that says, stop making these changes once guesses remaining reaches 0
        // while (newGuessesRemaining > 0) {
            if (userGuess === secretLetter) {
                userWins++;
            }
                else {
                    // userLosses++; <-- I know that this is wrong because it shouldn't be updated until guesses remaining reaches 0.
                    var newGuessText = document.createElement("p");
                }
            guessesRemainingText.textContent = guessesRemaining;
            userWinsText.textContent = userWins;
            userLossesText.textContent = userLosses;
            newGuessText.textContent=(" ," + userGuess);
            console.log(newGuessText);
            guessesSoFarText.appendChild(newGuessText);
// }
}
}
