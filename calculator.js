// Arithmetic operation functions
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
    // Avoid division by zero
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

// Helper to get inputs safely and parse to float
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

// Update result display
function updateResult(value) {
    document.getElementById('calculation-result').textContent = value;
}

// Event listeners for buttons
document.getElementById('add').addEventListener('click', function() {
    const [n1, n2] = getInputValues();
    const result = add(n1, n2);
    updateResult(result);
});

document.getElementById('subtract').addEventListener('click', function() {
    const [n1, n2] = getInputValues();
    const result = subtract(n1, n2);
    updateResult(result);
});

document.getElementById('multiply').addEventListener('click', function() {
    const [n1, n2] = getInputValues();
    const result = multiply(n1, n2);
    updateResult(result);
});

document.getElementById('divide').addEventListener('click', function() {
    const [n1, n2] = getInputValues();
    const result = divide(n1, n2);
    updateResult(result);
});
