// HTML short-hand declaration
let container = document.getElementById("word");

// variable declarations
let words = [
    "HELLO",
    "WORLD",
    "JIMMY",
    "JASON",
    "SAMUEL",
    "JAEDON",
    "COVID",
    "SAD",
];
let wordIndex;


/**
 * Creates the guessable word.
 */
function WordToFind() {
    this.word = container;
    this.word.answer = ""; // will init
    this.word.size = 0; // will init
    this.word.innerHTML = ""; // will init

    this.init = function () {
        this.getRandomWord();
        this.createQuestion();
    }

    /**
     * get a random word from the list of words.
     */
    this.getRandomWord = function () {
        wordIndex = Math.floor(Math.random() * words.length);
        this.word.answer = words[wordIndex];
        this.word.size = words[wordIndex].length;
        let fontSize = 75 / this.word.size; // 75: style.width from <div id="containerWord">
        this.word.style.fontSize = fontSize + "vw";
    }

    /**
     * converts all letters of the word into blanks.
     */
    this.createQuestion = function () {
        let result = ""
        let underscore = "_ ";
        for (let i = 0; i < this.word.size - 1; i++) {
            result += underscore;
        }
        result += "_";
        //return result;
        this.word.innerHTML = result;
    }

    /**
     * checks if letter is in the answer.
     */
    this.checkGuess = function (letter) {
        // incorrect guess
        if (this.word.answer.indexOf(letter) == -1) {
            badGuess(); // -> gamelogic.js
        } else {
            // correct guess
            for (let index = 0; index < this.word.size; index++) {
                if (letter == this.word.answer.charAt(index)) {
                    addScore(); // -> gamelogic.js
                    this.fillBlank(index, letter);
                }
            }

        }
    }

    /**
     * fills a blank with a correct letter.
     */
    this.fillBlank = function (index, letter) {
        let original = this.word.innerHTML;
        let result = original.substring(0, index * 2) + letter +
            original.substring((index * 2) + 1);
        this.word.innerHTML = result;
        if (!this.word.innerHTML.includes("_")) {
            win(); // -> gamelogic.js
        }
    }
}