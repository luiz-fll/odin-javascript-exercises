function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "DIVISION BY 0 ERROR";
    return a / b;
}

function operate(a, b, operator) {
    let result = 0;

    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        
        case '-':
            result = subtract(a, b);
            break;

        case '*':
            result = multiply(a, b);
            break;

        case '/':
            result = divide(a, b);
            break;

        default:
            result = 'ERROR';
            break;
    }

    return result;
}

function updateNumber(number, value) {
    return number * 10 + value;
}

function clearState(calculator) {
    calculator.a = 0;
    calculator.b = 0;
    calculator.operator = '';
    calculator.currentResult = 0;
    calculator.state = 'a';
}

const calculator = { a: 0, b: 0, operator: '', currentResult: 0, state:'a' };
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const executeButton = document.querySelector(".execute");
const expressionDiv = document.querySelector(".expression");
const clearButton = document.querySelector(".clear");

numberButtons.forEach(button => button.addEventListener('click', () => {
    switch (calculator.state) {
        case 'a':
            calculator.a = updateNumber(calculator.a, Number.parseInt(button.textContent));
            expressionDiv.textContent = calculator.a;
            break;

        case 'operator':
            calculator.b = Number.parseInt(button.textContent);
            calculator.state = 'b';
            expressionDiv.textContent = calculator.b;
            break;
        
        case 'b':
            calculator.b = updateNumber(calculator.b, Number.parseInt(button.textContent));
            expressionDiv.textContent = calculator.b;
            break;

        case 'result':
            clearState(calculator);
            calculator.a = updateNumber(calculator.a, Number.parseInt(button.textContent));
            expressionDiv.textContent = calculator.a;
            break;

        default:
            console.log('ERROR');
            break;
    }
}));

operatorButtons.forEach(button => button.addEventListener('click', () => {
    let result = 0;

    switch (calculator.state) {
        case 'a':
        case 'operator':
            calculator.operator = button.textContent;
            calculator.state = 'operator';
            expressionDiv.textContent = calculator.a;
            break;

        case 'b':
            result = operate(calculator.a, calculator.b, calculator.operator);
            clearState(calculator);
            if (!isNaN(result)) {
                calculator.a = result;
                calculator.operator = button.textContent;
                calculator.state = 'operator';
                expressionDiv.textContent = calculator.a;
            } else {
                expressionDiv.textContent = result;
            }
            break;

        case 'result':
            result = calculator.currentResult;
            if (!isNaN(result)) {
                clearState(calculator);
                calculator.a = result;
                calculator.operator = button.textContent;
                calculator.state = 'operator';
                expressionDiv.textContent = calculator.a;
            }
            break;
    
        default:
            break;
    }
}));

executeButton.addEventListener('click', () => {
    let result = 0;
    switch (calculator.state) {
        case 'a':
        case 'operator':
            result = calculator.a;
            clearState(calculator);
            calculator.currentResult = result;
            calculator.state = 'result';
            break;
        
        case 'b':
            result = operate(calculator.a, calculator.b, calculator.operator);
            clearState(calculator);
            calculator.currentResult = result;
            calculator.state = 'result';
            break;

        case 'result':
            break;

        default:
            break;
    }

    expressionDiv.textContent = calculator.currentResult;
});

clearButton.addEventListener('click', () => {
    clearState(calculator);
    expressionDiv.textContent = calculator.a;
})
