// HTML short-hand declaration
let scoreLabel = document.getElementById("lives");
let finalScoreLabel = document.getElementById("score");
let hangman = document.getElementById("hangman");
let containerAlphabet = document.getElementById("containerAlphabet");
let wrapperGame = document.getElementById("wrapper");
let wrapperEnd = document.getElementById("endscreen");
let wrapperLeaderBoards = document.getElementById("leaderboards");
let endpic = document.getElementById("endpic");
let restartButton = document.getElementById("rebutton");
let leaderboadsButton = document.getElementById("viewleaderboard");
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
    coin.load();
    coin.play();
}

/**
 * play SFX for incorrect guess.
 */
function incorrectSFX() { 
    dead.load();
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
    endpic.style.display = "block";
    finalScoreLabel.innerHTML = "Your score is: " + score;
    wrapperGame.style.display = "none";
    wrapperEnd.style.display = "block";
    restartButton.onclick = restart;
    leaderboadsButton.onclick = showLeaderboard;
}

/**
 * show lose screen.
 */
function gameOver() {
    endpic.src = "img/gameover.jpg";
    endpic.style.display = "block";
    finalScoreLabel.innerHTML = "Your score is: " + score;
    wrapperGame.style.display = "none";
    wrapperEnd.style.display = "block";

    restartButton.onclick = restart;
    leaderboadsButton.onclick = showLeaderboard;
}

/**
 * reset the game.
 */
function restart() {
    createGameState();
    wrapperGame.style.display = "flex";
    wrapperLeaderBoards.style.display = "none";
    wrapperEnd.style.display = "none";
    endpic.style.display = "none";
}

/**
 * view leaderboard page.
 */
function showLeaderboard(){
    scoresubmitted = false;
    wrapperEnd.style.display = "none";
    endpic.style.display = "none";
    wrapperLeaderBoards.style.display = "flex";
    document.getElementById("submitscore").onclick = submitScore;
}

/**
 * Resizes the word based on screen size.
 */
function wordResize() {
    let fontSizeBase = 75;

    let screenWidthMultiplier = 1;
    if (window.innerWidth >= 1200){
        screenWidthMultiplier = 0.5;
    } else if (window.innerWidth >= 768) {
        screenWidthMultiplier = 0.75;
    }
    let fontSize = (fontSizeBase * screenWidthMultiplier) / word.word.size;
    word.word.style.fontSize = fontSize + "vw";
}

// invoke
createGameState();
window.onresize = wordResize;