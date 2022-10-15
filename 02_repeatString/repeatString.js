const repeatString = function(repeatString, numberOfReps) {

    if(numberOfReps < 0) {
        return "ERROR"
    }

    let finalString = "";

    for (let index = 0; index < numberOfReps; index++) {
        finalString += repeatString;
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
