const sumAll = function(int1, int2) {
    if(int1 < 0 || typeof int1 != 'number' 
    || int2 < 0 || typeof int2 != 'number') {
        return 'ERROR';
    }
    let sum = 0;
    const [start, end] = int1 < int2 ? [int1, int2] : [int2, int1]
    for (let current = start; current <= end; current++) {
        sum += current;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
