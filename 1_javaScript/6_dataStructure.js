//---> HashMap
//      1. HashMap is a data structure, it will store the data as Key-Value Pair.
//      2. And it will allow the fast searching, inserting and deleting the data using a Key.
//
//Ex: 
// 1. Frequency Counting:
let array = [1, 2, 1, 2, 3, 2, 3, 4, 3]
let result = {};
function frequency(array) {
    for (let val of array) {
        result[val] = result[val] ? result[val] + 1 : 1;
    }
    return result;
}
console.log(frequency(array));
//-----------------------------------

// 2. Find the Duplicates
let array1 = [1, 2, 1, 2, 3, 2, 3, 4, 3, 5, 6, 7]

function findDuplicates(arr) {
    let map = {};
    let duplicate = [];

    for (let val of arr) {
        map[val] = map[val] ? map[val] + 1 : 1;

        if (map[val] === 2) {
            duplicate.push(val);
        }
    }
    return duplicate;
}

console.log(findDuplicates(array1));



