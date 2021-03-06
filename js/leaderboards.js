// variables
let highScores = [];
let scoresubmitted = false;

/**
 * Creates leaderboard table
 */
function createLeaderboards() {
    let table = "<tr><th>User</th><th>Score</th></tr>"
    for (let i = 0; i < 10; i++) {
        table += "<tr><td class=\"cellUser\">" + highScores[i].User + "</td><td class=\"cellScore\">" + highScores[i].Score + "</td></tr>";
    }
    document.getElementById("leaderstable").innerHTML = table;
}


/**
 * Updates leaderboard when something is added to the database
 */
db.collection("scores").onSnapshot(function (snapshot) {
    changes = snapshot.docChanges();
    changes.forEach(function (change) {

        console.log(change);
        highScores.push(change.doc.data());

    })
    createLeaderboards();
})

/**
 * Submits a highscore to the database
*/
function submitScore() {
    if (!scoresubmitted) {
        scoresubmitted = true;
        let userScore = {
            User: document.getElementById("userscore").value,
            Score: score
        };
        if (userScore.Score > highScores[9].Score) {
            for (let i = 0; i < 10; i++) {
                if (userScore.Score > highScores[i].Score) {

                    highScores.splice(i, 0, userScore);
                    break;
                }
            }
        } else {
            alert("Your score is not in the top 10")
        }
        for (let i = 0; i < 10; i++) {
            db.collection("scores").doc("" + i).set(highScores[i]);
        }
    }
}