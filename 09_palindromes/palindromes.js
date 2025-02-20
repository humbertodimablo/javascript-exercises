const palindromes = function (str) {

const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//replace(/[^a-z0-9]/g, ''):
//This part uses a regular expression to remove all 
// characters from the string that are not lowercase letters (a-z) 
// or digits (0-9).
// /.../: This denotes the start and end of the regular expression. 
// ^: Inside the brackets, this caret symbol negates the character class,
// meaning "not".
// a-z: This specifies the range of lowercase letters from 'a' to 'z'.
// 0-9: This specifies the range of digits from '0' to '9'.
// [^a-z0-9]: This matches any character that is not a lowercase letter or a digit.
// g: This is a flag that stands for "global", meaning that the replacement 
// should be applied to all matches in the string, not just the first one.
// The replace method then replaces all matched characters (i.e., all 
// non-alphanumeric characters) with an empty string (''), effectively 
// removing them from the string.

const reversedStr = normalizedStr.split(``).reverse().join(``);
return normalizedStr === reversedStr;
};

const palindromesReversed = palindromes(`r3ace3car`);
console.log(palindromesReversed);

// Do not edit below this line
module.exports = palindromes;
