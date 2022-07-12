const minusButton= document.getElementById('minus-btn');
const plusButton = document.getElementById('plus-btn');


function increment() {
    document.getElementById('field').stepUp();
 }
 function decrement() {
    document.getElementById('field').stepDown();
 };

 function increment() {
   document.getElementById('field1').stepUp();
}
function decrement() {
   document.getElementById('field1').stepDown();
};

function increment() {
   document.getElementById('field2').stepUp();
}
function decrement() {
   document.getElementById('field2').stepDown();
};

function increment() {
   document.getElementById('field3').stepUp();
}
function decrement() {
   document.getElementById('field3').stepDown();
}

function increment() {
   document.getElementById('field4').stepUp();
}
function decrement() {
   document.getElementById('field4').stepDown();
}

function increment() {
   document.getElementById('field5').stepUp();
}
function decrement() {
   document.getElementById('field5').stepDown();
}

function increment() {
   document.getElementById('field6').stepUp();
}
function decrement() {
   document.getElementById('field6').stepDown();
}
function increment() {
   document.getElementById('field7').stepUp();
}
function decrement() {
   document.getElementById('field7').stepDown();
}
 minusButton.addEventListener('click',decrement)
 plusButton.addEventListener('click',increment)
