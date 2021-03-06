let operator = null
let displayValue = 0 
let num1
let num1Over = false
let num2
let num2Over = false
let snarkTest = false
let multiCalc = false
let sciNot = false
let sciNotValue = 0
const container = document.querySelector('#main-body')

function operate(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operator == 'add'){
        return num1 + num2;
    } else if (operator == 'subtract') {
        return num1 - num2;
    } else if (operator == 'multiply') {
        return num1 * num2;
    } else if (operator == 'divide') {
        if (num2 == 0) {
            return snarkTest = true;
        } else {
            return num1 / num2
        }
    }
}

function calculate() {
    num1 = operate(num1, num2);
    num2 = null;
    operator = null;
    outputChecker();
    allotDV();
    displayValue = decimalRounder(displayValue);
    screenUpdate();
    multiCalc = true;
    num2Over = false;
    sciNot = false;
    sciNotValue = 0;
}

//Round decimals to thousands place
function decimalRounder(value) {
    return value = Math.round((value + Number.EPSILON) * 1000) / 1000;
}

//turn output into scientific notation if too long
function outputChecker() {
    let number = num1.toString().length;
       if (number > 8) {
           num1 = num1.toExponential(2);
           sciNotOn();
           makeSciNotValue();
           return num1;
       }
}

//Same as above function, used for prctBtn with num2 variable
function outputCheckerNum2() {
    let number = num2.toString().length;
       if (number > 8) {
           num2 = num2.toExponential(2);
           sciNotOn();
           makeSciNotValueNum2();
           return num2;
       }
}

//return positive value for sciNot variable
function sciNotOn() {
    return sciNot = true
}

//make a sciNotValue for num1
function makeSciNotValue() {
    return sciNotValue = num1;
}

//make sciNotValue for num2
function makeSciNotValueNum2() {
    return sciNotValue = num2;
}

// Assign value when number button is clicked
// Combine all into single listener based on class
const sevenBtn = document.querySelector('#b7');
sevenBtn.addEventListener('click', () => {
    let getIDValue = getID(sevenBtn);
    allotNum(getIDValue);
    numberLimiter();
    allotDV();
    screenUpdate();
});

const eightBtn = document.querySelector('#b8');
eightBtn.addEventListener('click', () => {
    let getIDValue = getID(eightBtn);
    allotNum(getIDValue);
    numberLimiter();
    allotDV();
    screenUpdate();
});

const nineBtn = document.querySelector('#b9');
nineBtn.addEventListener('click', () => {
    let getIDValue = getID(nineBtn);
    allotNum(getIDValue);
    numberLimiter();
    allotDV();
    screenUpdate();
});

const fourBtn = document.querySelector('#b4');
fourBtn.addEventListener('click', () => {
    let getIDValue = getID(fourBtn);
    allotNum(getIDValue);
    numberLimiter();
    allotDV();
    screenUpdate();
});

const fiveBtn = document.querySelector('#b5');
fiveBtn.addEventListener('click', () => {
    let getIDValue = getID(fiveBtn);
    allotNum(getIDValue);
    numberLimiter();
    allotDV();
    screenUpdate();
});

const sixBtn = document.querySelector('#b6');
sixBtn.addEventListener('click', () => {
    let getIDValue = getID(sixBtn);
    allotNum(getIDValue);
    numberLimiter();
    allotDV();
    screenUpdate();
});

const oneBtn = document.querySelector('#b1');
oneBtn.addEventListener('click', () => {
    let getIDValue = getID(oneBtn);
    allotNum(getIDValue);
    numberLimiter();
    allotDV();
    screenUpdate();
});

const twoBtn = document.querySelector('#b2');
twoBtn.addEventListener('click', () => {
    let getIDValue = getID(twoBtn);
    allotNum(getIDValue);
    numberLimiter();
    allotDV();
    screenUpdate();
});

const threeBtn = document.querySelector('#b3');
threeBtn.addEventListener('click', () => {
    let getIDValue = getID(threeBtn);
    allotNum(getIDValue);
    numberLimiter();
    allotDV();
    screenUpdate();
});

const zeroBtn = document.querySelector('#b0');
zeroBtn.addEventListener('click', () => {
    let getIDValue = getID(zeroBtn);
    allotNum(getIDValue);
    numberLimiter();
    allotDV();
    screenUpdate();
});

const dcmBtn = document.querySelector('#dcmBtn');
dcmBtn.addEventListener('click', () => {
    decimalAdder();
    numberLimiter();
    allotDV();
    screenUpdate();
})

//Function to get value from button id

function getID(btn) {
    let idValue = btn.id;
    idValue = idValue.substr(-1, 1);
    return parseInt(idValue);
}

//Allot inputs into either num1 variable or num2 variable
function allotNum(value) {
    if (snarkTest == true) {
        clearAll();
        return num1 = value;
    } else if (operator == null && multiCalc == false && num1Over != true) {
        if (num1 != undefined || num1 != null) {
         let numValue = `${num1}${value}`
         return num1 = numValue;
        } else {
            return num1 = value;
        }
    } else if (operator == null && multiCalc == true) {
        mCalOff();
        return num1 = value;
    } else if ((num2 != undefined || num2 != null) && num2Over != true) {
        let numValue = `${num2}${value}`
        return num2 = numValue;
    } else if ((num2 == undefined || num2 == null) && operator != null) {
        return num2 = value;
    }
}

function mCalOff() {
    return multiCalc = false;
}

//Determine whether displayValue is num1 or num2
function allotDV() {
    if (num2 == undefined || num2 == null) {
        return displayValue = num1;
    } else {
       return displayValue = num2;
    }
}

//Allows decimal point to be added only once to each number
function decimalAdder() {
    if (operator == null && multiCalc ==false) {
        if ((num1 != undefined || num1 != null) && ((num1 + '').includes('.') == false)) {
                return num1 = num1+'.';
        } else if (num1 == undefined || num1 == null) {
            return num1 = 0+'.';
    } 
} else {
        if ((num2 != undefined || num2 != null) && ((num2 + '').includes('.') == false)) {
            return num2 = num2+'.';
        } else if (num2 == undefined || num1 == null) {
        return num2 = 0+'.';
    }
}}

//Limits input of numbers to 8 characters/numbers
function numberLimiter() {
    if (operator == null) {
       let number = num1;
       number = number.toString().length;
       if (number < 8) {
           return num1Over = false;
       } else if (number > 7) {
           return num1Over = true;
       }
    } else {
        let number = num2;
        number = number.toString().length;
        if (number < 8) {
            return num2Over = false;
        } else if (number > 7) {
           return num2Over = true;
        }
    }
}

//Assign operation to operator buttons

const dvdBtn = document.querySelector('#dvdBtn');
dvdBtn.addEventListener('click', () => { 
    operator = 'divide';
    testCalculate();
    return operator = 'divide';
});
const multBtn = document.querySelector('#multBtn');
multBtn.addEventListener('click', () => {
    operator = 'multiply';
    testCalculate();
    return operator = 'multiply';
});

const subBtn = document.querySelector('#subBtn');
subBtn.addEventListener('click', () => {
    operator = 'subtract';
    testCalculate();
    return operator = 'subtract';
});

const addBtn = document.querySelector('#plsBtn');
addBtn.addEventListener('click', () => {
    operator = 'add';
    testCalculate();
    return operator = 'add';
});

//Make function to test whether operator button should run calculation
function testCalculate() {
    if ((num1 != undefined || num1 != null) && 
    (num2 != undefined || num2 != null))
        calculate();
    }

//Make equal button call operate function
const eqlBtn = document.querySelector('#eqlBtn');
eqlBtn.addEventListener('click', () => {
    if ((num1 != undefined && num1 != null) && (num2 != undefined && num1 != null)) {
        calculate();
    }
})

//Clear button makes num 1, num 2, & display value zero
const clrBtn = document.querySelector('#clrBtn');
clrBtn.addEventListener('click', () => clearAll())

//Clear all variables to reset calculator and update screen
function clearAll() {
    num1 = null
    num2 = null
    num1Over = false;
    num2Over = false;
    operator = null;
    displayValue = 0
    snarkTest = false;
    multiCalc = false;
    screenUpdate();
}

const prctBtn = document.querySelector('#prctBtn');
prctBtn.addEventListener('click', () => {
    if (num1 == undefined || num1 == null) {
        
    } else if (num2 == undefined || num2 == null) {
        num1 = (parseFloat(num1))*0.01
        num1 = decimalRounder(num1)
        outputChecker()
        allotDV();
        screenUpdate();
        sciNot = false;
        sciNotValue = 0;
        return num1;
    } else {
        num2 = (parseFloat(num2))*0.01
        num2 = decimalRounder(num2)
        outputCheckerNum2();
        allotDV();
        screenUpdate();
        sciNot = false;
        sciNotValue = 0;
        return num2;
    }
})

//Make claculations appear on screen
const screenContainer = document.querySelector('#screen')

const screenDisplay = document.createElement('div');
screenDisplay.classList.add('screenDisplay');
screenDisplay.textContent = displayValue;
screenContainer.appendChild(screenDisplay);

//Function to update screen content
function screenUpdate() {
    if (snarkTest == true) {
    screenDisplay.textContent = 'Not so fast, buster. ';
    screenDisplay.setAttribute('style', 'font-size: 37px');
    screenContainer.appendChild(screenDisplay);
    } else if (sciNot == true) {
        screenDisplay.textContent = sciNotValue;
        screenDisplay.setAttribute('style', 'font-size: 70px');
        screenContainer.appendChild(screenDisplay);
    } else {
    screenDisplay.textContent = displayValue;
    screenDisplay.setAttribute('style', 'font-size: 70px');
    screenContainer.appendChild(screenDisplay);
    }
}