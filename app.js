/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let operatorEl = ""
let fNumberEl = ""
let sNumberEl = "" 
let firstNumber = ""
/*------------------------ Cached Element References ------------------------*/

const buttonsEl = document.querySelectorAll('.button');

const numberButton = document.querySelectorAll(".number")

const resetButton = document.querySelector(".reset")

const equalsButton = document.querySelectorAll(".equals")

const operatorButton = document.querySelectorAll(".operator")

const calculator = document.querySelector('#calculator');

const displayEl = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
  
function secondNumber(event){
  if(sNumberEl === ""){
        sNumberEl += event.target.innerText
        displayEl.append(sNumberEl);
  }
}
  const first = numberButton.forEach((number) => {
    number.addEventListener('click', (event) => {
       if(operatorEl === "/" || operatorEl === "*" || operatorEl === "+" || operatorEl === "-"){
       
       secondNumber(event)
       }else if(fNumberEl === ""){
        fNumberEl += event.target.innerText
        displayEl.append(fNumberEl);
       }
    });
  });


  operatorButton.forEach((operator) => {
    operator.addEventListener('click', (event) => {
       
      if(operatorEl === ""){
      operatorEl = event.target.innerText
        displayEl.append(operatorEl);
      }
    });
  });

    resetButton.addEventListener('click', reset)
       
    
   
    equalsButton.forEach((equlas) => {
      equlas.addEventListener('click', () => {
        
        if(operatorEl === "+"){
          
          displayEl.textContent = Number(fNumberEl) + Number(sNumberEl)
         }else if(operatorEl === "-") {
          displayEl.textContent = Number(fNumberEl) - Number(sNumberEl)
          
         }else if(operatorEl === "/") {
          displayEl.textContent = Number(fNumberEl) / Number(sNumberEl)
         }else if(operatorEl === "*") {
          displayEl.textContent = Number(fNumberEl) * Number(sNumberEl)
         }

    });})

  
/*-------------------------------- Functions --------------------------------*/

const reset = () => {

  displayEl.textContent = ""
  operatorEl = ""
  fNumberEl = ""
  sNumberEl = ""
}