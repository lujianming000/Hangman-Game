// HTML short-hand declaration
let livesElement = document.getElementById("lives");

// variable declarations
let lives = 7;
let score = 100000;
let word;
let button;

/**
 * create the guessable word.
 */
function createWord() {
    word = new WordToFind();
    word.init();
}

/**
 * create all the alphabet buttons.
 */
function createButtons() {
    // ASCII A = 65, Z = 90
    for (let i = 65; i <= 90; i++) {
        let ch = String.fromCharCode(i);
        button = new Button(ch);
    }
}

function createGameState() {
    livesElement.innerHTML = "Lives: " + lives;
    calculateScore();
}


function makeGuess(letter) {
    word.checkGuess(letter);
}

function badGuess() {
    lives -= 1;
    livesElement.innerHTML = "Lives: " + lives;
    updateHangman();
}

function updateHangman() {
    //TODO
    switch(lives) {
        case 7:
            console.log("pic: 7");
            break;
        case 6:
            console.log("pic: 6");
            break;
        case 5:
            console.log("pic: 5");
            break;
        case 4:
            console.log("pic: 4");
            break;
        case 3:
            console.log("pic: 3");
            break;
        case 2:
            console.log("pic: 2");
            break;
        case 1:
            console.log("pic: 1");
            break;
        default:
            console.log("pic: 0");
            gameOver();
            break;
    }
}

function calculateScore() {
    //TODO
    console.log("score:");
}

function win() {
    //TODO
    console.log("win");
}

function gameOver() {
    //TODO
    console.log("game over");
}

// invoke
createWord();
createButtons();
createGameState();
updateHangman();