

let scoreEl = document.getElementById('scoreEl');

let count = 0;

function increment1 () {
    
    count = count + 1;

    scoreEl.textContent = count;


}
function increment2 () {
    
    count = count + 2;

    scoreEl.textContent = count;


}

function increment3 () {
    
    count = count + 3;

    scoreEl.textContent = count;


}

function reset () {
    
    count = 0;

    scoreEl.textContent = count;


}

let guestEl = document.getElementById('guestEl');

let countguest = 1;

function incrementG1 () {
    countguest = countguest + 1;

    guestEl.textContent = countguest;
}


function incrementG2 () {
    countguest = countguest + 2;

    guestEl.textContent = countguest;
}

function incrementG3 () {
    countguest = countguest + 3;

    guestEl.textContent = countguest;
}

function resetGuest () {
    
    countguest = 0;

    guestEl.textContent = countguest;


}


