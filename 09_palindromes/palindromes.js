const palindromes = function (str) {
const normalizedStr = str.toLowerCase();
const reversedStr = normalizedStr.split(``).reverse().join(``);
return normalizedStr === reversedStr;
};

const palindromesReversed = palindromes(`racecar!`);
console.log(palindromesReversed);

// Do not edit below this line
module.exports = palindromes;
