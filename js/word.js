// HTML short-hand declaration
let container = document.getElementById("word");
let definition = document.getElementById("wordDefinition");

// variable declarations
let words = [
    ['HELLO', 'used to express a greeting, answer a telephone, or attract attention.'],
    ['WORLD', 'the earth or globe, considered as a planet.'],
    ['COMMITTEE', 'a group of people appointed for a specific function.'],
    ['COVID', 'a system for transmitting voices over a distance using wire or radio.'],
    ['APPLE', 'the round fruit of a tree, which has thin red or green skin and crisp flesh.'],
    ['BANANA', 'a long curved fruit which has soft pulpy flesh and yellow skin when ripe.'],
    ['TATTOO', 'an artistic mark on a part of a body of a person.'],
    ['ELECTRICITY', 'a form of energy resulting from the existence of charged particles.'],
    ['HANGMAN', 'the name of this game.'],
    ['DEVELOPMENT', 'a specified state of growth or advancement.'],
    ['COMMENT', 'a verbal or written remark expressing an opinion or reaction.'],
    ['MUSIC', 'an art form, and cultural activity, whose medium is sound.'],
    ['THEATER', 'a building or outdoor area in which plays are given.'],
    ['GAMING', 'the action or practice of playing video games.'],
    ['REPAIR', 'fix or mend (a thing suffering from damage or a fault).'],
    ['COLLABORATE', 'work jointly on an activity, especially to create something.'],
    ['ZEBRA', 'an African wild horse with black-and-white stripes and an erect mane.'],
    ['XYLOPHONE', 'a musical instrument played by striking a row of wooden bars with mallets.'],
    ['YETI', 'a large hairy creature resembling a human or bear, said to live in the Himalayas.'],
    ['HOUND', 'a dog of a breed used for hunting, especially one able to track by scent.'],
    ['QUEEN', 'the female ruler of an independent state; inherits the position by right of birth.'],
    ['TWITTER', '(of a bird) give a call consisting of repeated light tremulous sounds.'],
    ['EMOJI', 'a small digital image or icon used to express an idea or emotion.'],
    ['PROGRAMMING', 'the action or process of writing computer programs.'],
    ['SAFE', 'protected from or not exposed to danger or risk.'],
    ['RACCOON', 'a grayish-brown mammal that has a foxlike face with a black mask and a ringed tail.'],
    ['BEACH', 'a pebbly or sandy shore, usually by the ocean.'],
    ['VIDEO', 'the recording, reproducing, or broadcasting of moving visual images.'],
    ['BOOK', 'a long writtenor printed work of fiction or nonfiction on sheets of paper.'],
    ['LIBRARY', 'a building or room containing collections of books.'],
    ['CREDIT', 'the ability of a customer to obtain goods or services before payment.'],
    ['TRAIN', 'a series of railroad cars moved as a unit by a locomotive or by integral motors.'],
    ['QUARANTINE', 'impose isolation on (a person, animal, or place).'],
    ['WASHING', 'clean with water and, typically, soap or detergent.'],
    ['RABBIT', 'a small plant-eating mammal with long ears, long hind legs, and a short tail.']
];
// let words = [
//     ['HELLO', 'used to express a greeting, answer a telephone, or attract attention.'],
//     "HELLO", "WORLD", "JIMMY", "JASON", "SAMUEL", "JAEDON", "COVID",
//     "TELEPHONE", "APPLE", "BANANA", "TATTOO", "ELECTRICITY", "HANGMAN",
//     "DEVELOPMENT", "COMMENT", "MUSIC", "THEATER", "GAMING", "REPAIR",
//     "COLLABORATE", "ZEBRA", "XYLOPHONE", "YETI", "HOUND", "QUEEN",
//     "TWITTER", "EMOJI", "PROGRAMMING", "SAFE", "RACCOON", "BEACH",
//     "VIDEO", "BOOK", "LIBRARY", "CREDIT", "TRAIN", "VIRUS",
//     "QUARANTINE", "WASHING", "INSIDE", "OUTSIDE", "RABBIT"
// ];
let wordIndex;

let wordHint;

let fontSizeBase = 75;
let fontSizeMax = 20;


/**
 * Creates the guessable word.
 */
function WordToFind() {
    this.word = container;
    this.word.answer = ""; // will init
    this.word.size = 0; // will init
    this.word.innerHTML = ""; // will init
    this.word.hint = definition;
    this.word.hint.innerHTML = ""; // will init

    this.init = function () {
        this.getRandomWord();
        this.createQuestion();
    }

    /**
     * get a random word from the list of words.
     */
    this.getRandomWord = function () {
        wordIndex = Math.floor(Math.random() * words.length);
        this.word.answer = words[wordIndex][0];
        this.word.size = words[wordIndex][0].length;
        this.word.hint.innerHTML = words[wordIndex][1];

        let screenWidthMultiplier = 1;
        if (window.innerWidth >= 1200){
            screenWidthMultiplier = 0.5;
        } else if (window.innerWidth >= 768) {
            screenWidthMultiplier = 0.75;
        }

        let fontSize = (fontSizeBase * screenWidthMultiplier) / this.word.size; // 50: style.width from <div id="containerWord">
        if (fontSize >= fontSizeMax) {
            fontSize = fontSizeMax;
        }
        
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