let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true;
let message = " ";


function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new game!"
    }else if ( sum === 21) {
        message = "Wohoo! you got a BlackJack!";
        hasBlackJack = true;
    }else {
        message = "You're out of the game!";
        isAlive = false;
    }       
}





console.log(message);