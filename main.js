function multiply (a) {
    return function (b) {
        return a * b;
    };
}

console.log(multiply(1)(1)); //1

console.log(multiply(4)(5)); //20

console.log(multiply(9)(9)); //81