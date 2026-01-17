let player = {
    name: "Smitha",
    chips: 133
    
}

let cards = [];
let message = "";
let sum = 0;
let hasBlackJack = false
let isAlive = false;
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");


let playerEL = document.getElementById("player-el");
playerEL.textContent  = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13) + 1;
    if(randomNumber === 1) {
        return 11;
    }else if (randomNumber > 10) {
        return 10;
    }else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame() {  
    //reder out firstCard and secondCard
    cardEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }


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
    if(isAlive && !hasBlackJack){
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }

}  