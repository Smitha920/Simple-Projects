let count = 0;
let countEl = document.getElementById("count-el");
let entryLog = document.getElementById("entries-log");

function increment() {
    count += 1;
    countEl.innerText = count;
}
function save() {
    let countStr = count + " - "
    entryLog.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}


