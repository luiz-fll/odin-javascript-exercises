const removeFromArray = function(array, ...elements) {
    const filtered = array.filter((element) => !elements.includes(element));

    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
