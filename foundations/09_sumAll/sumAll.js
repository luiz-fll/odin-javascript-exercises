const sumAll = function(firstNum, secondNum) {
    if (typeof firstNum != "number" ||
        typeof secondNum != "number" ||
        !Number.isInteger(firstNum) || 
        !Number.isInteger(secondNum) ||
        firstNum < 0 || 
        secondNum < 0) {
        return 'ERROR';
    }

    let start = firstNum < secondNum ? firstNum : secondNum;
    let end = firstNum > secondNum ? firstNum : secondNum;
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
