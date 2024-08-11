
const display = document.querySelector('.screen');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const allClear = document.querySelector('.all-clear')

let displayValue = '';

const calcMemory = {
    firstNum: '',
    operator: '',
    secondNum: '',
    perviousSum: '',
};


// Number buttons 
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {

        if (calcMemory.operator === '' && calcMemory.secondNum === '') {    
        displayValue += button.textContent;
        display.textContent = displayValue;
        calcMemory.firstNum = parseInt(displayValue);
    
        console.log(calcMemory.firstNum)
        
        } else if (calcMemory.firstNum !== '' && calcMemory.operator !== '' &&calcMemory.perviousSum !== '') {
        displayValue += button.textContent;
        display.textContent = displayValue;
        calcMemory.secondNum = parseInt(display.textContent);
        console.log(calcMemory.secondNum)
        console.log(displayValue)

        } else if (calcMemory.firstNum !== '' && calcMemory.operator !== '') {
        displayValue += button.textContent;
        display.textContent = displayValue;
        calcMemory.secondNum = parseInt(displayValue);
        console.log(calcMemory.secondNum);
        } 
        console.table(calcMemory)
    })
});


// Operator buttons 
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        
        if (calcMemory.secondNum === '') {
        calcMemory.operator === ''
        displayValue += ' ' + button.textContent;
        display.textContent = displayValue;
        calcMemory.operator = button.textContent;
        displayValue = '';
        console.log(displayValue)
        console.log(calcMemory.operator)
        } else {
        operate(calcMemory.firstNum, calcMemory.operator, calcMemory.secondNum);
        calcMemory.perviousSum = result;
        display.textContent = result + ' ' + button.textContent
        displayValue = '';
        calcMemory.firstNum = calcMemory.perviousSum;
        calcMemory.secondNum = '';
        // calcMemory.perviousSum = '';
        calcMemory.operator = button.textContent;
        console.table(calcMemory)
        console.log(displayValue)
        }
    
    }
    
)});


 

// Equals button
equalsButton.addEventListener('click', () => {
    
    if (calcMemory.secondNum === '' || calcMemory.operator === '') {
        resetCalMemory();
    } else {
        operate(calcMemory.firstNum, calcMemory.operator, calcMemory.secondNum);
        calcMemory.perviousSum = result;
        display.textContent = result;
        displayValue = result;
        calcMemory.firstNum = calcMemory.perviousSum;
        calcMemory.secondNum = '';
        calcMemory.perviousSum = '';
        calcMemory.operator = '';
        }
        console.table(calcMemory)
    });



// All Clear Button
allClear.addEventListener('click', () => {
                resetCalMemory();
                return;
    });

function resetCalMemory() {
    calcMemory.firstNum = '';
    calcMemory.operator = '';
    calcMemory.secondNum = '';
    calcMemory.perviousSum = '';
    display.textContent = '';
    displayValue = '';
};

// calculate function 
function operate(numOne, operatorSign, numTwo) {
    if (operatorSign === '+') {
        result = add(numOne, numTwo);
    }
    if (operatorSign === '-') {
        result = subtract(numOne, numTwo);
    }
    if (operatorSign === 'x') {
        result = multiply(numOne, numTwo);
    }
    if (operatorSign === '÷') {
        result = divide(numOne, numTwo);
    }
}

// Basic calculator functions
function add(a, b) {
    return a + b;
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