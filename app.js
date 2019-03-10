
let total = null;
let numA = null;
let numB = null;
let operation = null;

let myButtons = document.querySelectorAll('button');
let display = 0;

myButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        calculate(button);
    });
});

function calculate(input) {
    if(input.className == 'button number') {
        if(numA == null) {
            numA = input.textContent;
            display = numA;

        }
        else if(operation == null) {
            numA += input.textContent;
            display = numA;

        } 
        else {
            if(numB == null) {
                numB = input.textContent;
                display = numB;

            }
            else {
                numB += input.textContent;
                display = numB;
 
            }
        }
    }
    else if(input.className == 'button operator') {
        if(numA != null && numB != null && operation != null) {
            if(total == null)
                total = operate(numA, numB, operation);
            else
                total = operate(total, numB, operation);

            numB = null;
            display = total;
        }

        operation = input.id;
    }
    else if(input.id == 'clear') {
        clear();
    }
    
    document.getElementById('value').textContent = display.toString(10);
    if(display == 'Error') clear();
    console.log(display);
}

function clear() {
    total = null;
    numA = null;
    numB = null;
    operation = null;
    display = 0;
}

function add(a,b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a,b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a,b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a,b) {
    if(b == '0') return 'Error';
    return parseFloat(a) / parseFloat(b);
}

function operate(numA, numB, operation) {
    let result;
    operation = operation.toLowerCase();
    switch(operation) {
        case 'add':
           result = add(numA, numB);
           break;

        case 'subtract':
            result = subtract(numA, numB);
            break;

        case 'multiply':
            result = multiply(numA, numB);
            break;

        case 'divide':
            result = divide(numA, numB);
            break;

        case 'equals':
            result = numA;
            break;

        default:
    }
    return result;
}