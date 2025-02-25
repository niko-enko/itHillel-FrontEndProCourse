let number = 21456;

let d1 = ((number % 100000) - (number % 10000)) / 10000;
let d2 = ((number % 10000) - (number % 1000)) / 1000;
let d3 = ((number % 1000) - (number % 100)) / 100;
let d4 = ((number % 100) - (number % 10)) / 10;
let d5 = number % 10;

console.log(`${d1} ${d2} ${d3} ${d4} ${d5}`);
