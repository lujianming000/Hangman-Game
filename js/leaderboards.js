let highScores = [];

function createLeaderboards() {
    let table = "<tr><th>User</th><th>Score</th></tr>"
    for (let i = 0; i < 10; i++) {
        table += "<tr><td>" + highScores[i].User + "</td><td>" + highScores[i].Score + "</td></tr>";
    }
    document.getElementById("leaderstable").innerHTML = table;
}


db.collection("scores").onSnapshot(function (snapshot) {
    changes = snapshot.docChanges();
    changes.forEach(function (change) {
        
            console.log(change);
            highScores.push(change.doc.data());


        

    })
    createLeaderboards();
})

function submitScore(){
    let userScore = {User: document.getElementById("userscore").value, Score: score};
    if (userScore.Score > highScores[9].Score){
        for(let i = 0; i < 10; i++){
            if(userScore.Score > highScores[i].Score){
                
                highScores.splice(i, 0, userScore);
                break;
            }
        }
    } else{
        alert("Your score is not in the top 10")
    }
    for(let i = 0; i < 10; i++){
        db.collection("scores").doc("" + i).set(highScores[i]);
    }
}