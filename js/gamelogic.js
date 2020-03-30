// HTML short-hand declaration
let scoreLabel = document.getElementById("lives");
let finalScoreLabel = document.getElementById("score");
let hangman = document.getElementById("hangman");
let containerAlphabet = document.getElementById("containerAlphabet");
let wrapperGame = document.getElementById("wrapper");
let wrapperEnd = document.getElementById("endscreen");
let endpic = document.getElementById("endpic");
let restartButton = document.getElementById("rebutton");
let coin = document.getElementById("coin");
let dead = document.getElementById("dead");

// constants
const TAB = "&nbsp;&nbsp;&nbsp;&nbsp;"

// variables
let word;
let alphabet;
let lives = 7;
let score = 0;

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
    // when game is reset - make sure container is empty
    containerAlphabet.innerHTML = ""

    // ASCII A = 65, Z = 90
    for (let i = 65; i <= 90; i++) {
        let ch = String.fromCharCode(i);
        alphabet = new Button(ch);
    }
}

/**
 * initialize (or reset) game screen.
 */
function createGameState() {
    lives = 7;
    score = 0;
    showScore();
    updateHangman();

    createWord();
    createButtons();
}

/**
 * increment score.
 */
function addScore() {
    score++;
    showScore();
    correctSFX();
}

/**
 * decrement score.
 */
function minusScore() {
    score--;
    lives--;
    showScore();
    incorrectSFX();
}

/**
 * update html for score label.
 */
function showScore() {
    scoreLabel.innerHTML = "Lives: " + lives + TAB + "Score: " + score;
}

/**
 * play SFX for correct guess.
 */
function correctSFX() {
    coin.play();
}

/**
 * play SFX for incorrect guess.
 */
function incorrectSFX() { 
    dead.play();
}

/**
 * check if letter is a correct guess.
 * @param {String} letter   to check
 */
function makeGuess(letter) {
    word.checkGuess(letter);
}

/**
 * decrement score and update hangman sprite.
 */
function badGuess() {
    minusScore();
    updateHangman();
}

/**
 * update hangman sprite.
 */
function updateHangman() {
    //TODO
    switch (lives) {
        case 7:
            hangman.src = "img/pic7.png";
            break;
        case 6:
            hangman.src = "img/pic6.png";
            break;
        case 5:
            hangman.src = "img/pic5.png";
            break;
        case 4:
            hangman.src = "img/pic4.png";
            break;
        case 3:
            hangman.src = "img/pic3.png";
            break;
        case 2:
            hangman.src = "img/pic2.png";
            break;
        case 1:
            hangman.src = "img/pic1.png";
            break;
        default:
            gameOver();
            break;
    }
}

/**
 * show win screeen.
 */
function win() {
    endpic.src = "img/congra.jpg";
    finalScoreLabel.innerHTML = "Your score is: " + score;
    wrapperGame.style.visibility = "hidden";
    wrapperEnd.style.visibility = "visible";
    restartButton.onclick = restart;
}

/**
 * show lose screen.
 */
function gameOver() {
    endpic.src = "img/gameover.jpg";
    finalScoreLabel.innerHTML = "Your score is: " + score;
    wrapperGame.style.visibility = "hidden";
    wrapperEnd.style.visibility = "visible";
    restartButton.onclick = restart;
}

/**
 * reset the game.
 */
function restart() {
    createGameState();
    wrapperGame.style.visibility = "visible";
    wrapperEnd.style.visibility = "hidden";
}

// invoke
createGameState();