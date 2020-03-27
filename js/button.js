// HTML short-hand declaration
let containerKeys = document.getElementById("containerAlphabet");

/**
 * Creates a Button object for alphabet letters.
 * @param {String} ch   alphabet letter 
 */
function Button(ch) {
    this.btn = document.createElement("button");
    this.btn.className = "buttons";
    this.btn.innerHTML = ch;
    containerKeys.appendChild(this.btn);

    let self = this;
    this.btn.onclick = function () {
        self.press(ch);
    }

    /**
     * disable onclick.
     */
    this.disable = function () {
        this.btn.disabled = true;
    }

    /**
     * check if button matches any letters in word.
     * @param {String} letter   to check
     */
    this.press = function (letter) {
        this.disable();
        makeGuess(letter); //gamelogic.js
    }
}