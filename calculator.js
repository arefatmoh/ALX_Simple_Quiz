// Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Event Listener Utility
function setupOperation(buttonId, operationFunction) {
    document.getElementById(buttonId).addEventListener('click', function () {
        const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = operationFunction(number1, number2);
        document.getElementById('calculation-result').textContent = result;
    });
}

// Attach listeners for all buttons
setupOperation('add', add);
setupOperation('subtract', subtract);
setupOperation('multiply', multiply);
setupOperation('divide', divide);
