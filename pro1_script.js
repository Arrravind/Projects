let letter, inputField, outputField, tries = 0, guessedCorrectly = false;
let image = document.getElementById("about")
const asciiLetters = "abcdefghijklmnopqrstuvwxyz";
const message = 'Welcome to "Guess the Letter"!\n\nHere are the rules:\n\n1. A random letter from a to z has been chosen.\n2. Enter your guess in the text box and click "Guess" or press Enter.\n3. The game will tell you if your guess is too low, too high, or correct.\n4. Keep guessing until you find the correct letter.\n5. The total number of tries will be displayed once you guess correctly.\n\nHave fun and good luck!';
let randLetter = generateRandomLetter();
console.log(randLetter);

inputField = document.getElementById("letter");
outputField = document.getElementById("result");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");

inputField.focus();

function guess() {
    outputField.classList.add("fade");
    letter = inputField.value.toLowerCase();

    if (letter.length !== 1 || !asciiLetters.includes(letter)) {
        outputField.innerHTML = "Please enter a single letter from a to z.";
        setTimeout(function() {
            outputField.classList.remove("fade");
        }, 500);
        return; 
    }

    inputField.value = '';
    tries++;
    setTimeout(function() {
        outputField.classList.remove("fade");
        if (letter === randLetter) {
            outputField.innerHTML = 'Correct! Total number of tries: ' + tries;
            guessedCorrectly = true;
            document.getElementById("guess").disabled = true;
            inputField.disabled = true;
        } else if (letter < randLetter) {
            outputField.innerHTML = "Too low";
        } else {
            outputField.innerHTML = "Too high";
        }
        if (guessedCorrectly) {
            b1.style.display = 'inline-block';
        }
    }, 500);

}


function generateRandomLetter() {
    let randomIndex = Math.floor(Math.random() * 26);
    return asciiLetters[randomIndex];
}

inputField.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("guess").click();
    }
});

image.addEventListener("click", function(){
    alert(message);
})
