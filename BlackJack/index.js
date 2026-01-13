let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true;

if (sum <= 20) {
    console.log("Do you want to draw a new game!");
}else if ( sum === 21) {
    console.log("Wohoo! you got a BlackJack!");
    hasBlackJack = true;
}else {
    console.log("You're out of the game!");
    isAlive = false;
}

console.log(isAlive);