function sumNumber() {
    let result = getNumber('numbers');
    setOutput('output', addNumbers(result));
}

function addNumbers(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total += i;
    }
    return total;
}

function getNumber(inputID) {
    let number = parseInt(document.getElementById(inputID).value);
    return number;
}

function setOutput(outputID, result) {
    document.getElementById(outputID).innerHTML = result;
}

// What we did in the team meeting
// function add() {
//     let result = getNumber('number1') + getNumber('number2');
//     setOutput('output2', result);
// }

// let subtract = function() {
//     let result = getNumber('number1') - getNumber('number2');
//     setOutput('output2', result);
// }

// let multiply = () => {
//     let result = getNumber('number1') * getNumber('number2');
//     setOutput('output2', result);
// }

// Same thing but using callbacks
function compute(callback) {
    let result = callback(getNumber('number1'), getNumber('number2'));
    setOutput('output2', result);
}

function add(number1, number2) {
    let result = number1 + number2;
    return result
    
}

function subtract(number1, number2) {
    let result = number1 - number2;
    return result
}

function multiply(number1, number2) {
    let result = number1 * number2;
    return result
}