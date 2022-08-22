const reverseString = function(string) {
    let out = '';
    for(char of string){
        out = char + out;
    }
    return out;
};

// Do not edit below this line
module.exports = reverseString;
