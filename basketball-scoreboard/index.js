let homePoints = 0
let guestPoints = 0
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function addScore(team, points) {
    if (team === 'home') {
        homePoints += points;
        homeScore.textContent = homePoints;
    } else {
        guestPoints += points;
        guestScore.textContent = guestPoints;
    }

    if (homePoints > guestPoints) {
        homeScore.style.color = "#FEF3C7";   // yellowish
        guestScore.style.color = "#F94F6D";  // pinkish
    } else if (guestPoints > homePoints) {
        guestScore.style.color = "#FEF3C7"
        homeScore.style.color = "#F94F6D";    
    } else {
        homeScore.style.color = "#F94F6D";    
        guestScore.style.color = "#F94F6D";
    }
}

function newGame() {
    homePoints = 0;
    guestPoints = 0;
    homeScore.textContent = 0;
    guestScore.textContent=0;
    homeScore.style.color = "#F94F6D";    
    guestScore.style.color = "#F94F6D";
}