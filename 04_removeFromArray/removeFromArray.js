const removeFromArray = function(originalArray, ...args) {
    let finalArray = originalArray;

    for(const itemToRemove of args) {
        finalArray = finalArray.filter(i => i !== itemToRemove);
    }

    return finalArray;
};


removeFromArray([1,2,3,4], 3, 4);

// Do not edit below this line
module.exports = removeFromArray;
