let operator = 'multiply'
let currentValue = 0
let displayValue
const container = document.querySelector('#main-body')


function operate(num1, num2){
    if (operator == 'add'){
        return currentValue = num1 + num2;
    } else if (operator == 'subtract') {
        return currentValue = num1 - num2;
    } else if (operator == 'multiply') {
        return currentValue = num1 * num2;
    } else if (operator == 'divide') {
        return currentValue = num1 / num2;
    }
}

// Assign value when number button is clicked
const sevenBtn = document.querySelector('#btn7');
sevenBtn.addEventListener('click', () => displayValue = 7) 

const eightBtn = document.querySelector('#btn8');
eightBtn.addEventListener('click', () => displayValue = 8)

const nineBtn = document.querySelector('#btn9');
nineBtn.addEventListener('click', () => displayValue = 9)

const fourBtn = document.querySelector('#btn4');
fourBtn.addEventListener('click', () => displayValue = 4)

const fiveBtn = document.querySelector('#btn5');
fiveBtn.addEventListener('click', () => displayValue = 5)

const sixBtn = document.querySelector('#btn6');
sixBtn.addEventListener('click', () => displayValue = 6)

const oneBtn = document.querySelector('#btn1');
oneBtn.addEventListener('click', () => displayValue = 1)

const twoBtn = document.querySelector('#btn2');
twoBtn.addEventListener('click', () => displayValue = 2)

const threeBtn = document.querySelector('#btn3');
threeBtn.addEventListener('click', () => displayValue = 3)

const zeroBtn = document.querySelector('#btn0');
zeroBtn.addEventListener('click', () => displayValue = 0)