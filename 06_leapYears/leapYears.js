const leapYears = (year) => {
        // Check if the year is divisible by 4
        if (year % 4 === 0) {
            // Check if the year is divisible by 100
            if (year % 100 === 0) {
                // If it is divisible by 100, check if it is also divisible by 400
                if (year % 400 === 0) {
                    return true; // It is a leap year
                } else {
                    return false; // It is not a leap year
                }
            } else {
                return true; // It is a leap year
            }
        } else {
            return false; // It is not a leap year
        }
    };

 const year = leapYears(700);
 console.log(year);
// Do not edit below this line
module.exports = leapYears;
