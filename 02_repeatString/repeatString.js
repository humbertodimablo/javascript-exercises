const repeatString = (string, num) =>{
    if (num < 0) return `ERROR`
    let result = ``;
    for (let i = 0; i < num; i++){
        result += string;
    }
return result;

};

const randomNumber = Math.floor(Math.random() * 1000);
const repeated = repeatString(` `, 10);



// Do not edit below this line
module.exports = repeatString;
