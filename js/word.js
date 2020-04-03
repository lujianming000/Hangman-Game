// HTML short-hand declaration
let container = document.getElementById("word");

// variable declarations
let words = [
    "HELLO", "WORLD", "JIMMY", "JASON", "SAMUEL", "JAEDON", "COVID",
    "TELEPHONE", "APPLE", "BANANA", "TATTOO", "ELECTRICITY", "HANGMAN",
    "DEVELOPMENT", "COMMENT", "MUSIC", "THEATER", "GAMING", "REPAIR",
    "COLLABORATE", "ZEBRA", "XYLOPHONE", "YETI", "HOUND", "QUEEN",
    "TWITTER", "EMOJI", "PROGRAMMING", "SAFE", "THE", "RACCOON", "BEACH",
    "VIDEO", "BOOK", "LIBRARY", "CREDIT", "BUS", "TRAIN", "VIRUS",
    "QUARANTINE", "WASHING", "INSIDE", "OUTSIDE", "RABBIT"
];
let wordIndex;

let fontSizeBase = 75;


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

        let screenWidthMultiplier = 1;
        if (window.innerWidth >= 1200){
            screenWidthMultiplier = 0.5;
        } else if (window.innerWidth >= 768) {
            screenWidthMultiplier = 0.75;
        }

        let fontSize = (fontSizeBase * screenWidthMultiplier) / this.word.size; // 50: style.width from <div id="containerWord">
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
     * @param {String} letter   to check
     */
    this.checkGuess = function (letter) {
        // incorrect guess
        if (this.word.answer.indexOf(letter) == -1) {
            badGuess(); // -> gamelogic.js
        } else {
            // correct guess
            // coin.load();
            // coin.play();
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