let display = document.getElementById('display');
let currentDisplay = '';

function toDisplay(value) {
    if (currentDisplay == '0' && value != '.') {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = '';
    updateDisplay();
}

function deleteLast() {
    if (currentDisplay.length > 1) {
        currentDisplay = currentDisplay.slice(0, -1);
    } else {
        currentDisplay = '0';
    }
    updateDisplay();
}


function calculate() {
    try {
        currentDisplay = String(eval(currentDisplay));
    } catch {
        currentDisplay = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    if (currentDisplay === '') {
        display.innerText = '0';
    } else {
        display.innerText = currentDisplay;
    }
}
