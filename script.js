
const firstNum = '';
const secondNum = '';
const operator = '';
let displayValue = '';

const display = document.querySelector('.screen');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelectorAll('.equals');


const calcMemory = {
    firstNum: '',
    operator: '',
    secondNum: '',
};

// Number buttons 
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {

        if (calcMemory.secondNum === '' && calcMemory.operator === '') {    
        displayValue += button.textContent;
        display.textContent = displayValue;
        calcMemory.firstNum = displayValue;
        }
        
        if (calcMemory.operator !== ''){
        displayValue += button.textContent;
        display.textContent = displayValue;
        calcMemory.secondNum = displayValue;
        }
    })
});

// Operator buttons 
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // displayValue = "";
        displayValue += ' ' + button.textContent;
        display.textContent = displayValue;
        calcMemory.operator = button.textContent;
        displayValue = '';
    })
});

// Equals button
equalsButton.forEach((button) => {
    button.addEventListener("click", () => {
        let numOne = calcMemory.firstNum;
        let operatorSign = calcMemory.operator;
        let numTwo = calcMemory.secondNum;
        display.textContent = operate(numOne, operatorSign, numTwo);
    })
});


function operate(numOne, operatorSign, numTwo) {
    if (operatorSign === '+') {
        return add(numOne, numTwo);
    }
    if (operatorSign === '-') {
        return subtract(numOne, numTwo);
    }
    if (operatorSign === 'x') {
        return multiply(numOne, numTwo);
    }
    if (operatorSign === '÷') {
        return divide(numOne, numTwo);
    }
}

// Basic calculator functions
function add(a, b) {
    return parseInt(a) + parseInt(b);
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

