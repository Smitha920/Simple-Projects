let firstCard = 5;
let secondCard = 11;
let cards = [firstCard, secondCard];
let message = "";
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true;

let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");


function startGame() {
    renderGame();
}
function renderGame() {
    //reder out firstCard and secondCard
    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    //render out ALL th cards we have
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new game!";
    }else if (sum === 21) {
        message = "you got a BlackJack!";
        hasBlackJack = true;
    }else {
        message = "You're out of the game!";
        isAlive = false;
    }  
    messageEl.textContent = message     ;
}

function newCard() {
    let card = 5;
    sum += card;
    renderGame();
}