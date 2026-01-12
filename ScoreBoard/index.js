let num1 = 0;
let num2 = 0;


document.getElementById("Home-display").textContent = num1;
document.getElementById("Guest-display").textContent = num2;

let homeDisplay = document.getElementById("Home-display")
let GuestDisplay = document.getElementById("Guest-display")


// Home functions

function Homeadd1() {
    num1 += 1;
    homeDisplay.textContent = num1;
}
function Homeadd2() {
    num1 += 2;
    homeDisplay.textContent = num1;

}
function add3() {
    num1 += 3;
    homeDisplay.textContent = num1;
}

// Guest functions
function Guestadd1() {
    num2 += 1;
    GuestDisplay.textContent = num2;
}
function Guestadd2() {
    num2 += 2;
    GuestDisplay.textContent = num2;

}
function Guestadd3() {
    num2 += 3;
    GuestDisplay.textContent = num2;
}