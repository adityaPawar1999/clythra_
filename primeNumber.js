// primeNumber.js

// Checks if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Print the first 20 prime numbers
let count = 0;

let num = 2;
while (count < 20) {
    if (isPrime(num)) {
        console.log(num);
        count++;
    }
    num++;
}

module.exports = { isPrime };