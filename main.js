let number = 10369;

let d1 = number % 2;
let d2 = number % 1;
let d3 = ((number % 1000) - (number % 100)) / 100;
let d4 = (number % 100) / 10 - 0.9;
let d5 = number % 10;

console.log(`${d1} ${d2} ${d3} ${d4} ${d5}`);
