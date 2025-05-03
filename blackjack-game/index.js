// let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
// let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
// let sum = firstCard + secondCard;

let firstCard = 10;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

if (sum <= 20) {
  console.log('Do you want to draw a new card? 🙂');
} else if (sum === 21) {
  console.log("Woohoo! You've got Blackjack! 🥳");
  hasBlackJack = true;
} else {
  console.log("You're out of the game! 😭");
  isAlive = false;
}

// CASH OUT!
console.log('hasBlackJack: ', hasBlackJack);

// OUT OF GAME!
console.log('isAlive: ', isAlive);
