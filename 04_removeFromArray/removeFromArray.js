const removeFromArray = function(src, ...removeElements) {
    for (i in src) {
        // Using while-loop to avoid for-loop skipping elements after deletion
        while (removeElements.includes(src[i])) {
            src.splice(i, 1);
        } 
    }
    return src;
};

// Using higher order function but creates a new array instead of mdodifying the original
const removeFromArrayWithFilter = function (src, ...removeElements) {
    return src.filter(el => !removeElements.includes(el));
}

// Do not edit below this line
module.exports = removeFromArray;
