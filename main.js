// const minusButton= document.getElementById('minus-btn');
// const plusButton = document.getElementById('plus-btn');

function increment(event) {
   const clickedBtn = event.target
   const inputField = clickedBtn.previousElementSibling
   inputField.stepUp();
}

function decrement(event) {
   const clickedBtn = event.target
   const inputField = clickedBtn.nextElementSibling
   inputField.stepDown();
}

//  minusButton.addEventListener('click',decrement)
//  plusButton.addEventListener('click',increment)
