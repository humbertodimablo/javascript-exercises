const fibonacci = function(input) {
    const n = Number(input);
    if (n < 0){
        return `OOPS`
    }

    if (n === 1 || n === 2){
        return 1; //to set the first two fibonacci number that are 1
    }

    let a = 1;
    let b = 1;
    let fib = 0; //instalize the Fibonacci number

    for (let i = 3; i <= n; i++) {
        fib = a + b;
        a = b; 
        b = fib;
    }

    return fib; 

};

const fibonacciResult = fibonacci(`8`);
console.log(fibonacciResult);
// Do not edit below this line
module.exports = fibonacci;
