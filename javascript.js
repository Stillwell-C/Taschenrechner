let operator
let currentValue = 0
let displayValue = 0
let num1
let num2
const container = document.querySelector('#main-body')

function operate(num1, num2){
    if (operator == 'add'){
        return displayValue = num1 + num2
    } else if (operator == 'subtract') {
        return displayValue = num1 - num2;
    } else if (operator == 'multiply') {
        return displayValue = num1 * num2;
    } else if (operator == 'divide') {
        return displayValue = num1 / num2;
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

//Assign operation to operator buttons
//Removed num2 option for now due to error
//typeof num1 == 'undefined' ?
//num1 = displayValue : num2 = displayValue;

const dvdBtn = document.querySelector('#dvdBtn');
dvdBtn.addEventListener('click', () => { 
    operator = 'divide';
    num1 = displayValue;
});
const multBtn = document.querySelector('#multBtn');
multBtn.addEventListener('click', () => {
    operator = 'multiply';
    num1 = displayValue;
});

const subBtn = document.querySelector('#subBtn');
subBtn.addEventListener('click', () => {
    operator = 'subtract';
    num1 = displayValue;
});

const addBtn = document.querySelector('#plsBtn');
addBtn.addEventListener('click', () => {
    operator = 'add';
    num1 = displayValue;
});

//Make equal button call operate function
const eqlBtn = document.querySelector('#eqlBtn');
eqlBtn.addEventListener('click', () => {
    operate(num1, displayValue);
    });

//Clear button makes num 1, num 2, & display value zero
const clrBtn = document.querySelector('#clrBtn');
clrBtn.addEventListener('click', () => {
    num1 = 'undefined'
    num2 = 'undefined'
    displayValue = 0
})