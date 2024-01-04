/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
    const numbers = new Map();
    const solution = new Map();
    for(let i = 0; i < A.length; i++){
        numbers.set(A[i], i);
    }
    for(let key of numbers.keys()){
        const difference = N - key;
        if(difference === key){
            continue;
        }
        if(numbers.has(difference)){
            if(key > difference){
                solution.set(difference, key);
            }else{
                solution.set(key, difference);
            }
        }
    }
    return [...solution];
}

module.exports = sumPairs;
