function addWithClosure () {
    let a = 0;
    return function (num) {
        a = num + a;
        return a;
    } ;
}

const sum = addWithClosure();

console.log(sum(2));

console.log(sum(4)); //6

console.log(sum(8)); //14

console.log(sum(16)); //30

console.log(sum(32)); //62

