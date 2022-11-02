const palindromes = function (input) {
    const regEx = /[A-Za-z]/;
    let alpha = "";

    for (const letter of input) {
        if (regEx.test(letter)) {
            alpha += letter.toLowerCase();
        }
    }
    
    let reversed = [...alpha].reverse().join("");

    return alpha === reversed;
};

// Do not edit below this line
module.exports = palindromes;
