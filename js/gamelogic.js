// HTML short-hand declaration

let livesElement = document.getElementById("lives");
let rebutton = document.getElementById("rebutton");
let showscore = document.getElementById("score");
let coin = document.getElementById("coin");
let dead = document.getElementById("dead");

// variables
let word;
let button;
let lives = 7;
let score = 0;

let coin = document.getElementById("coin");
let dead = document.getElementById("dead");
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
}

function addScore() {
    score++;
}

function updateScore() {
    score += x

}

function makeGuess(letter) {
    word.checkGuess(letter);
}

function badGuess() {
    lives -= 1;
    score -= 1;
    dead.load();
    dead.play();
    livesElement.innerHTML = "Lives: " + lives;
    updateHangman();
}

function updateHangman() {
    //TODO
    switch (lives) {
        case 7:
            document.getElementById("hangman").src = "img/pic1.png";
            break;
        case 6:
            document.getElementById("hangman").src = "img/pic2.png";
            break;
        case 5:
            document.getElementById("hangman").src = "img/pic3.png";
            break;
        case 4:
            document.getElementById("hangman").src = "img/pic4.png";
            break;
        case 3:
            document.getElementById("hangman").src = "img/pic5.png";
            break;
        case 2:
            document.getElementById("hangman").src = "img/pic6.png";
            break;
        case 1:
            document.getElementById("hangman").src = "img/pic7.png";
            break;
        default:
            gameOver();
            break;
    }
}

function showScore() {
    showscore.innerHTML = "Your score is: " + score;
}

function win() {
    endpic.src = "img/congra.jpg";
    document.getElementById('wrapper').style.visibility = "hidden";
    document.getElementById('endscreen').style.visibility = "visible";
    restartbutton();
    showScore();
}

function gameOver() {
    endpic.src = "img/gameover.jpg";
    document.getElementById('wrapper').style.visibility = "hidden";
    document.getElementById('endscreen').style.visibility = "visible";
    restartbutton();
    showScore();
}


function restart() {
    score = 0;
    lives = 7;
    document.getElementById("containerAlphabet").innerHTML = "";
    createWord();
    createButtons();
    createGameState();
    updateHangman();
    document.getElementById('wrapper').style.visibility = "visible";
    document.getElementById('endscreen').style.visibility = "hidden";
}

function restartbutton() {
    rebutton.onclick = restart;
}



// invoke
createWord();
createButtons();
createGameState();
updateHangman();