function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
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

        default:
    }
    return result;
}

