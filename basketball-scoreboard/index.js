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
}