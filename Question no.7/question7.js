document.write ("<h1> Guess game:<br> Store a secret number (ranging from 1 to 10) in a variable.<br> Prompt user to guess the secret number. <br> a. If user guesses the same number, show “Bingo! Correct answer”.<br> b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. </h1>")

var secretNumber = 7
var guessTheNumber = +prompt ("Guess the Secret Number from 1 to 10")

if (secretNumber === guessTheNumber) {
    document.write ("<h2> 'Bingo! Correct Answer' </h2>")
} else if (guessTheNumber === 6) {
    document.write ("<h2> 'Close enough to the Correct Answer!' </h2>")
} else if (guessTheNumber === 8) {
    document.write ("<h2> 'Close enough to the Correct Answer!' </h2>")
} else if (guessTheNumber) {
    document.write ("<h2> 'Try Again!' </h2>")
}