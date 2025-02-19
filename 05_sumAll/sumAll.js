const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return 'ERROR'; // Cheking for the ERROR
    }

    if (a > b) {
        [a, b] = [b, a]; 
    }  // Invert a and b
    
    let sum = 0;
    for (let i = a; i <= b; i++) {   //Making the loop to make the 
        sum += i;                    //the loop for the operation
    }
    
    return sum;

};

const result = sumAll(10, [90, 1]) //calling the function
// Do not edit below this line
module.exports = sumAll;
