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
    operate(num1, num2);
    screenUpdate()
}

// Assign value when number button is clicked
// Combine all into single listener based on class
const sevenBtn = document.querySelector('#b7');
sevenBtn.addEventListener('click', () => {
    let getIDValue = getID(sevenBtn);
    allotNum(getIDValue);
    allotDV();
    screenUpdate();
});

const eightBtn = document.querySelector('#b8');
eightBtn.addEventListener('click', () => {
    let getIDValue = getID(eightBtn);
    allotNum(getIDValue);
    allotDV();
    screenUpdate();
});

const nineBtn = document.querySelector('#b9');
nineBtn.addEventListener('click', () => {
    let getIDValue = getID(nineBtn);
    allotNum(getIDValue);
    allotDV();
    screenUpdate();
});

const fourBtn = document.querySelector('#b4');
fourBtn.addEventListener('click', () => {
    let getIDValue = getID(fourBtn);
    allotNum(getIDValue);
    allotDV();
    screenUpdate();
});

const fiveBtn = document.querySelector('#b5');
fiveBtn.addEventListener('click', () => {
    let getIDValue = getID(fiveBtn);
    allotNum(getIDValue);
    allotDV();
    screenUpdate();
});

const sixBtn = document.querySelector('#b6');
sixBtn.addEventListener('click', () => {
    let getIDValue = getID(sixBtn);
    allotNum(getIDValue);
    allotDV();
    screenUpdate();
});

const oneBtn = document.querySelector('#b1');
oneBtn.addEventListener('click', () => {
    let getIDValue = getID(oneBtn);
    allotNum(getIDValue);
    allotDV();
    screenUpdate();
});

const twoBtn = document.querySelector('#b2');
twoBtn.addEventListener('click', () => {
    let getIDValue = getID(twoBtn);
    allotNum(getIDValue);
    allotDV();
    screenUpdate();
});

const threeBtn = document.querySelector('#b3');
threeBtn.addEventListener('click', () => {
    let getIDValue = getID(threeBtn);
    allotNum(getIDValue);
    allotDV();
    screenUpdate();
});

const zeroBtn = document.querySelector('#b0');
zeroBtn.addEventListener('click', () => {
    let getIDValue = getID(zeroBtn);
    allotNum(getIDValue);
    allotDV();
    screenUpdate();
});

//Function to get value from button id

function getID(btn) {
    let idValue = btn.id;
    idValue = idValue.substr(-1, 1);
    return parseInt(idValue);
}

//Allot inputs into either num1 variable or num2 variable
function allotNum(value) {
    if (num1 == undefined || num1 == null) {
        return num1 = value;
    } else {
        return num2 = value;
    }
}

//Determine whether displayValue is num1 or num2
function allotDV() {
    if (num2 == undefined || num2 == null) {
        return displayValue = num1;
    } else {
       return displayValue = num2;
    }
}

//Assign operation to operator buttons
//Removed num2 option for now due to error
//typeof num1 == 'undefined' ?
//num1 = displayValue : num2 = displayValue;

const dvdBtn = document.querySelector('#dvdBtn');
dvdBtn.addEventListener('click', () => { 
    operator = 'divide';
});
const multBtn = document.querySelector('#multBtn');
multBtn.addEventListener('click', () => {
    operator = 'multiply';
});

const subBtn = document.querySelector('#subBtn');
subBtn.addEventListener('click', () => {
    operator = 'subtract';
});

const addBtn = document.querySelector('#plsBtn');
addBtn.addEventListener('click', () => {
    operator = 'add';
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
    num1 = null
    num2 = null
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