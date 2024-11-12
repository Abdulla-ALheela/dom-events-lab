/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let numberEl 
let firstNumber = ""
/*------------------------ Cached Element References ------------------------*/

const buttonsEl = document.querySelectorAll('.button');

const calculator = document.querySelector('#calculator');

const displayEl = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
buttonsEl.forEach((button) => {
    button.addEventListener('click', (event) => {
        
        numberEl = event.target.innerText
        displayEl.append(numberEl);
        
    });
  });
  
/*-------------------------------- Functions --------------------------------*/
// calculator.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     // You have to click a button to see this log
    
  
//     // Example
//     if (numberEl.contains('number')) {
//       // Do something with a number
//     }
  
//     // Example
//     if (event.target.innerText === '*') {
//       // Do something with this operator
//     }
//   });
  