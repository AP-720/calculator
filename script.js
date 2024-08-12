
const display = document.querySelector('.screen');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const allClear = document.querySelector('.all-clear')
const pointButton = document.querySelector('.point')

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
        calcMemory.firstNum = Number(displayValue);
    
        } else if (calcMemory.firstNum !== '' && calcMemory.operator !== '' &&calcMemory.perviousSum !== '') {
        displayValue += button.textContent;
        display.textContent = displayValue;
        calcMemory.secondNum = Number(display.textContent);

        } else if (calcMemory.firstNum !== '' && calcMemory.operator !== '') {
        displayValue += button.textContent;
        display.textContent = displayValue;
        calcMemory.secondNum = Number(displayValue);
        }
        console.log(displayValue)
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
        } else {
        operate(calcMemory.firstNum, calcMemory.operator, calcMemory.secondNum);
        calcMemory.perviousSum = result;
        display.textContent = result + ' ' + button.textContent
        displayValue = '';
        calcMemory.firstNum = calcMemory.perviousSum;
        calcMemory.secondNum = '';
        calcMemory.operator = button.textContent;
        }
    
    }
    
)});

// Point Button
pointButton.addEventListener('click', () => {

    if (calcMemory.firstNum === '' && displayValue === '') {
    displayValue = '0.';
    display.textContent = displayValue;
    calcMemory.firstNum =+ Number(displayValue);
    } else if (calcMemory.secondNum === '' && displayValue === '') {
    displayValue = '0.';
    display.textContent = displayValue;
    calcMemory.secondNum =+ Number(displayValue);
    } else if (calcMemory.firstNum !== '' && calcMemory.operator === ''  &&  (!displayValue.includes('.'))) {
    displayValue = calcMemory.firstNum + '.';
    display.textContent = displayValue;
    calcMemory.firstNum = displayValue;
    } else if (calcMemory.secondNum !== '' &&  (!displayValue.includes('.'))) {
    displayValue = calcMemory.secondNum + '.';
    display.textContent = displayValue;
    calcMemory.secondNum = displayValue;
    }
})

 // Equals button
equalsButton.addEventListener('click', () => {
    
    if (calcMemory.secondNum === '' || calcMemory.operator === '') {
        resetCalMemory();
    } else {
        operate(calcMemory.firstNum, calcMemory.operator, calcMemory.secondNum);
        // result = roundDecimal(result)
        calcMemory.perviousSum = result;
        display.textContent = result;
        displayValue = result;
        calcMemory.firstNum = calcMemory.perviousSum;
        calcMemory.secondNum = '';
        calcMemory.perviousSum = '';
        calcMemory.operator = '';
        }
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

function roundDecimal(num) {
    if (num % 1 !== 0) {
        return num.toFixed(3);
    } else {
        return num;
    }
}

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
    result = roundDecimal(result)
}
// Basic calculator functions
function add(a, b) {
    return (a + b);
};

function subtract(a, b) {
    return (a - b);
};

function multiply(a, b) {
    return (a * b);
};

function divide(a, b) {
    return (a / b);
};