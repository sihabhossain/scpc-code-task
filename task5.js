function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Cannot divide by zero.";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operator.";
    }
}

// Test the calculator function
const num1 = 5;
const operator = '+';
const num2 = 3;
console.log(`Result: ${calculate(num1, operator, num2)}`);

const num3 = 10;
const operator2 = '/';
const num4 = 2;
console.log(`Result: ${calculate(num3, operator2, num4)}`);

const num5 = 4;
const operator3 = '*';
const num6 = 3;
console.log(`Result: ${calculate(num5, operator3, num6)}`); 
