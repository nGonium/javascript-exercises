const repeatString = function(string, num) {
    if(num < 0)  return 'ERROR'
    let out = '';
    for(let rep = 1; rep <= num; rep++) {
        out += string;
    } 
    return out;
};

// Do not edit below this line
module.exports = repeatString;
