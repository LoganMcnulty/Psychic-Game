
// global variables defined
var alphabet = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userWins = 0;
var userLosses = 0;
var guessesRemaining = 10;
var guessesSoFar = [];

// Eqution for picking secret letter 
var secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

//variables for replacing text in HTML
var userWinsText = document.getElementById("wins");
var userLossesText = document.getElementById("losses");
var guessesRemainingText = document.getElementById("guessesRemaining");
var guessesSoFarText = document.getElementById("guessesSoFar");

alert("use your keyboard to guess what letter i'm thinking of")

//peak at the log if you want to cheat! 
console.log(secretLetter);

// game begins
document.onkeyup = function(event) {
    //store user choice to key selected, and console to log to confirm
    var userGuess = event.key;
    console.log(secretLetter);

//Only execute the following if the user's guess = secret letter
    if (userGuess === secretLetter){
        //add 1 to user wins
        userWins++;
        //store new user wins to "userWinsText"
        userWinsText.textContent = userWins;
        // update guessees remaining to 10 (so the variable knows), and replace starting text with 10 
        //(there is a difference between the two, hence the two lines)
        guessesRemaining = 10;
        guessesRemainingText.textContent = 10;
        // clear the guessed letters variable, and store to text
        guessesSoFar=[];
        guessesSoFarText.textContent = guessesSoFar;
        //update the secret letter, log to console
        secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    //otherwise (if user guess does not = computer guess)
    else{
        //reduce guesses remaining by 1, and store to text
        guessesRemaining--;
        guessesRemainingText.textContent = guessesRemaining;
        //add to guessed letters, we use push in order to add to an array
        guessesSoFar.push(userGuess);
        guessesSoFarText.textContent = guessesSoFar;

    }
    //this line is for adding to losses and resetting the game when guessesRemaining = 0
    if(guessesRemaining === 0){
        //add to losses by 1, and store to text
        userLosses++;
        userLossesText.textContent = userLosses;
        //update guesses remaining to 10 and store to text
        guessesRemaining = 10;
        guessesRemainingText.textContent = 10;
        //update the secret letter, log to console
        secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(secretLetter);
        //clear the guesses so far array, and store to text
        guessesSoFar=[];
        guessesSoFarText.textContent = guessesSoFar;
    }
}
