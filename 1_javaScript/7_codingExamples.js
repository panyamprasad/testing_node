// Reverse a String in JavaScript
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"

// // Reverse a String without using built-in functions
function reverseStr(str){
    let reversed = '';
    for( i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseStr("Hello Prasad"));

// // ------------------------------------------------------------------------------

// //Find the largest number in an array
function largestNumber(arr){
    return Math.max(...arr); //
}
console.log(largestNumber([1,2,3,4,5])); // Output

// // Find the largest number in an array without using built-in functions
function maxNumber(arr){
    let maxNumber = arr[0];  // Assume the first element is the largest
    for( i=1; i < arr.length; i++){ //
        if(arr[i] > maxNumber){ // Compare with each element with first element 
            maxNumber = arr[i]; // If the element is greater than the first element, update the maxNumber
        }
    }
    return maxNumber;
}
console.log(maxNumber([75,45,54,76,43]));

// // ------------------------------------------------------------------------------

// // Remove Duplicates from an array
function removeDuplicates(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,2,3,4,4,5])); // Output: [1,2,3,4,5]

// // Remove Duplicates from an array without using built-in functions
function uniqueArray(arr){
    let uniqueArr = [];
    for(let i = 0; i < arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(uniqueArray([1,2,2,3,4,4,5])); // Output: [1,2,3,4,5]

// // ------------------------------------------------------------------------------
// // FizzBuzz
function fizzBuzz(n){
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if(i % 3 === 0){
            console.log("Fizz");
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
fizzBuzz(15); // Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
// // ------------------------------------------------------------------------------
// // Factorial of a number
function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // Output: 120
// // ------------------------------------------------------------------------------
// // Fibonacci Series
function fibonacci(n){
    let fib = [0, 1];
    for(let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
console.log(fibonacci(10)); // Output: [0,1,1,2,3,5,8,13,21,34]
// // ------------------------------------------------------------------------------
// // Check Prime Number
function isPrime(n){
    if(n <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(11)); // Output: true
console.log(isPrime(4)); // Output: false
// ------------------------------------------------------------------------------

// Using closure remove the duplicates from array.
function removeDuplicate(){
    const seen = new Set();

    return function(arr){
        const result = [];
        for(let value of arr){
            if(!seen.has(value)){
                seen.add(value);
                result.push(value);
            }
        }
        return result;
    };
}

const removeDup = removeDuplicate();
console.log(removeDup([1,2,1,3,4,2,3,4,5,4,5,4]));

//--------------------------------------------------------------------------------

// Remove duplicate from array and sort the list based on value count.

function sorting(arr){
    const unique = {};

    for(let val of arr){
        unique[val] = unique[val] ? unique[val] + 1 : 1;
    }

    return [...new Set(arr)].sort((a,b) => unique[b] - unique[a]);
}

console.log(sorting([1,2,3,2,1,3,4,5,3,4,3,2,3]))

//------------------------------------------------------------------------------

const arr = [1,2,3,[4,[5,6]]];

const flatArr = arr.flat(Infinity);
console.log(flatArr); // outPut: [1,2,3,4,5,6]

// Without using built-in function
function flattenArray(arr){
    let result = [];
    for(let i=0; i< arr.length; i++){
        if(Array.isArray(arr[i])){
            result.push(...flattenArray(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(flattenArray([1,2,3,[4,[5],6]])); // outPut: [1,2,3,4,5,6]

// ------------------------------------------------------------------------------

