// HTML short-hand declaration
let livesElement = document.getElementById("lives");

// variable declarations
let lives = 7;
let score = 100000;
let word;
let button;
let endpic = document.createElement("img");


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

function calculateScore() {
    //TODO
    console.log("score:");
}

function win() {
    endpic.src = "img/congra.jpg";
    endpic.id = "endpic";
    document.body.appendChild(endpic);
    hideworddiv();
    restartbutton();
    

}

function gameOver() {
    endpic.src = "img/gameover.jpg";
    endpic.id = "endpic";
    document.body.appendChild(endpic);
    hideworddiv();
    restartbutton();
    
}

function hideworddiv(){
    document.getElementById('wrapper').style.display = "none";
}

function restart() {
   
}

function restartbutton(){
    let rebutton = document.createElement("button");
    rebutton.id = "rebutton";
    rebutton.innerHTML = "Play Again";
    document.body.appendChild(rebutton);
    rebutton.onclick = restart;
}



// invoke
createWord();
createButtons();
createGameState();
updateHangman();

