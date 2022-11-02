const findTheOldest = function(arr) {

    for(let person of arr) {
        if (!person.hasOwnProperty('yearOfDeath')) {
            person['yearOfDeath'] = new Date().getFullYear();
        }
    }

    let sorted = arr.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth) ? 1 : -1);
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
