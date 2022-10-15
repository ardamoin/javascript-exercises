const sumAll = function(...args) {

    let sortedNumberPair = args.sort();
    let runningCount = 0;
    let exit = false;

    sortedNumberPair.map((item) => {
        if (item < 0 || typeof(item) !== 'number') {
            exit = true;
        }
    })

    if (exit) {
        return 'ERROR';
    }

    for (let i = sortedNumberPair[0]; i <= sortedNumberPair[1]; i++) {
        runningCount += i;   
    }
    return runningCount;
};
// Do not edit below this line
module.exports = sumAll;
