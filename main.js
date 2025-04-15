class Calculator {

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}

const calculator = new Calculator();
console.log(calculator.add(5, 3)); // 8

console.log(calculator.subtract(10, 4)); // 6

console.log(calculator.multiply(3, 6)); // 18

console.log(calculator.divide(8, 2)); // 4