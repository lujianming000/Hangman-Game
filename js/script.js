let word= "TEST";
function buildButton() {
    for (let i = 65; i < 91; i++) {
        let newButton = document.createElement("input");
        let ch = String.fromCharCode(i)
        newButton.type = "button";
        newButton.value = ch;
        newButton.onclick = buttonPress(ch,newButton);
        document.body.appendChild(newButton);
    }
}

function buttonPress(letter,button) {
    return function () {
        button.disabled="disabled";
        checkLetter(letter);
    }
}

function checkLetter(letter){
    if (word.indexOf(letter) == -1){
        //badGuess();
        console.log(letter);
    } else{
        //goodGuess();
        for(let i = 0; i < word.length; i++){
            if (letter == word.charAt(i)){
                console.log(i);
            }
        }
    }
}

function goodGuess(){
    
}
buildButton();