//total from all the calculations
let total = null;
//the first number to be entered (used for 'start' case, no longer needed after start)
let numA = null;
//second number to be entered and the number that is used with the 'total' for the rest of the calculations
let numB = null;
//which operation must be done
let operation = null;

//list of all buttons
let myButtons = document.querySelectorAll('button');
//what is being displayed on screen
let display = 0;

//adding 'click' function to all buttons
myButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        calculate(button);
    });
});

//Handles all the inputs from the user
function calculate(input) {
    if(input.className == 'button number') {
        if(numA == null) {
            numA = input.textContent; //numA will hold first value
            display = numA;

        }
        else if(operation == null) {
            numA += input.textContent; //will concatenate the string if user enters more values
            display = numA;

        } 
        else {
            if(numB == null) {
                numB = input.textContent; //holds next value if numA is used already and an operation declared that a new (seperate) number must be input
                display = numB;

            }
            else {
                numB += input.textContent; //concatenatese if more inputs are inputted
                display = numB;
 
            }
        }
    }
    else if(input.className == 'button operator') {
        if(numA != null && numB != null && operation != null) {
            if(total == null)
                total = operate(numA, numB, operation); //start case
            else
                total = operate(total, numB, operation); //numB will keep changing total

            numB = null; //after start, numB will now be used along with total 
            display = total; //display value will be the total
        }

        operation = input.id; //changes the operation that must be done
    }
    else if(input.id == 'clear') {
        clear(); //clears calculator
    }
    
    document.getElementById('value').textContent = display.toString(10); //changes value in HTML to be the display value
    if(display == 'Error') clear(); // This is a case if we try to divide by 0
}

//resets the values back to original
function clear() {
    total = null;
    numA = null;
    numB = null;
    operation = null;
    display = 0;
}

//Performs arithmetic operations
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

//A switch statement that controls with operation is going to be done
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