/* Scripts Go Here */

let word = "apple";
let showWord = ["*","*","*","*","*"];
let guesses = [];


function getLetter(guess) {
    let numberOfLetters = 0;

    for (let i=0; i < word.length; i++) {
        if (word.charAt(i) == guess) {
            numberOfLetters++;
            showWord[i] = word.charAt(i);
        }
    }

}

function updateWord() {

    let value = "";
    for (let i=0; i < showWord.length; i++) {
        value += showWord[i];
    }
    document.getElementById("word").innerHTML = value;
}