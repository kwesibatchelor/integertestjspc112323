function isInteger(num) {
    return num % 1 === 0;
}

console.log(isInteger(5));
console.log(isInteger(5.5));
console.log(isInteger(0.5));