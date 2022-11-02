const fibonacci = function(index) {
    let numIndex = +index;

    if (numIndex < 0) {
        return "OOPS";
    }

    if (numIndex === 0) {
        return 0;
    } else if(numIndex === 1){
        return 1;
    } else {
        return fibonacci(index-1) + fibonacci(index-2);
    }

};

// Do not edit below this line
module.exports = fibonacci;
