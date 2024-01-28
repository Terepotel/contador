let counter = 0;

const valueCounter =document.getElementById("valueCounter");

function renderCounter(){
    valueCounter.innerHTML = counter ;
}
function increase () {
    counter++;
    renderCounter();
}

function decrease(){
    counter--;
    renderCounter()
}

function reset(){
    counter = 0;
    renderCounter() ;
}

const increaseButton = document.getElementById("increaseButton") ;
increaseButton.addEventListener("click", increase);

const decreaseButton = document.getElementById("decreaseButton");
decreaseButton.addEventListener("click", decrease);

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", reset);
