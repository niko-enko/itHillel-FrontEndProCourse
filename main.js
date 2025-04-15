class Calculator {
    constructor(digA, digB) {
        this.digA = digA;
        this.digB = digB;
    }

    sum() {
        return this.digA + this.digB;
    }

    subtract() {
        return this.digA - this.digB;
    }

    multiply() {
        return this.digA * this.digB;
    }

    divide() {
        return this.digA / this.digB;
    }
}

const calculator = new Calculator(5, 2);

console.log(calculator.sum())

const calculator2 = new Calculator(10, 5);

console.log(calculator2.divide())