// let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
// let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
// let sum = firstCard + secondCard;

let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Woohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }  
  messageEl.textContent = message;
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  sumEl.textContent = "Sum: " + sum;  // `Sum: ${sum}`
}

function newGame() {
  console.log('Drawing a new card from the deck!');
}