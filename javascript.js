let operator
let currentValue = 0
let displayValue = 0 //Make array?
let num1
let num2
const container = document.querySelector('#main-body')

function operate(num1, num2){
    if (operator == 'add'){
        return displayValue = num1 + num2;
    } else if (operator == 'subtract') {
        return displayValue = num1 - num2;
    } else if (operator == 'multiply') {
        return displayValue = num1 * num2;
    } else if (operator == 'divide') {
        return displayValue = num1 / num2;
    }
}

function calculate() {
    operate(num1, displayValue);
    screenUpdate()
}

// Assign value when number button is clicked
const sevenBtn = document.querySelector('#b7');
sevenBtn.addEventListener('click', () => {
    displayValue = getID(sevenBtn);
    screenUpdate();
    return displayValue;
});

const eightBtn = document.querySelector('#b8');
eightBtn.addEventListener('click', () => {
    displayValue = getID(eightBtn);
    screenUpdate();
    return displayValue;
});

const nineBtn = document.querySelector('#b9');
nineBtn.addEventListener('click', () => {
    displayValue = getID(nineBtn);
    screenUpdate();
    return displayValue;
});

const fourBtn = document.querySelector('#b4');
fourBtn.addEventListener('click', () => {
    displayValue = getID(fourBtn);
    screenUpdate();
    return displayValue;
});

const fiveBtn = document.querySelector('#b5');
fiveBtn.addEventListener('click', () => {
    displayValue = getID(fiveBtn);
    screenUpdate();
    return displayValue;
});

const sixBtn = document.querySelector('#b6');
sixBtn.addEventListener('click', () => {
    displayValue = getID(sixBtn);
    screenUpdate();
    return displayValue;
});

const oneBtn = document.querySelector('#b1');
oneBtn.addEventListener('click', () => {
    displayValue = getID(oneBtn);
    screenUpdate();
    return displayValue;
});

const twoBtn = document.querySelector('#b2');
twoBtn.addEventListener('click', () => {
    displayValue = getID(twoBtn);
    screenUpdate();
    return displayValue;
});

const threeBtn = document.querySelector('#b3');
threeBtn.addEventListener('click', () => {
    displayValue = getID(threeBtn);
    screenUpdate();
    return displayValue;
});

const zeroBtn = document.querySelector('#b0');
zeroBtn.addEventListener('click', () => {
    displayValue = getID(zeroBtn);
    screenUpdate();
    return displayValue;
});

//Function to get value from button id

function getID(btn) {
    let idValue = btn.id;
    idValue = idValue.substr(-1, 1);
    return parseInt(idValue);
}

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
    // operate(num1, displayValue);
    calculate();
    });

//Clear button makes num 1, num 2, & display value zero
const clrBtn = document.querySelector('#clrBtn');
clrBtn.addEventListener('click', () => {
    num1 = 'undefined'
    num2 = 'undefined'
    displayValue = 0
    screenUpdate();
})

//Make claculations appear on screen
const screenContainer = document.querySelector('#screen')

const screenDisplay = document.createElement('div');
screenDisplay.classList.add('screenDisplay');
screenDisplay.textContent = displayValue;
screenContainer.appendChild(screenDisplay);

//Function to update screen content
function screenUpdate() {
    screenDisplay.textContent = displayValue;
    screenContainer.appendChild(screenDisplay);
}