// Event Loop in JavaScript
// JavaScript is single-threaded, It means it will execute one task at a time.
// JavaScript is synchronous, It means it will execute the code line by line.
// But JavaScript is also asynchronous, it means some taks will be executed background and it will be executed when the main thread is free.
// for eaxample: setTimeout, promises, aync/await etc. Once main thread is free these tasks will be executed. Until then it will be wait in the callback queue.
// Event loop is a mechanisum that will check the call stack and callback queue. If call stack is empty it will execute callback queue.
Example:
console.log('Start');
setTimeout(() => {
    console.log('Timeout')
}, 0);
Promise.resolve.then(() => {
    console.log('Promise')
});
setImmediate(() => {
    console.log('setImmediate')
});
process.nextTick(() => {
    console.log('nextTick')
});
console.log('End');

// Output: Start, End, nextTick, Promise, Timeout, SetImmediate
// Explanation: First it will execute the synchronous code line by line. So it will print Start and End first.
// Then it will check the microtask queue, so it will execute nextTick and Promise.
// Then it will check the callback queue, so it will execute Timeout and SetImmediate. 
// Note: setTimeout and setImmediate are similar but they have some differences. setTimeout will execute after the specified time and setImmediate will execute after the current event loop cycle.

// ------------------------------------------------------------------------------

// ------  Promises ------
// Promises are used to handle the asynchronous operations in JavaScript. 
// It have three states: Pending, Fulfilling, Rejected.
// We carn create Promises using the Promise operator.

// Example : Chaining the promises
// function getData(){
//     return new Promise((resolve, reject) => {
//         setTimeout (() => {
//             resolve(' Data Revieved')
//         }, 1000);
//     });
// }
// getData().then(() => {
//     console.log('Processing the data');
//     return 'Data Processed';
// })
// ------------------------------------------------------------------------------
// ------ Async/Await ------

// Async/Await is just cleaner way to use promises.
// Instend of useing .then() and . catch() we can use  sync/await to handle the promises.
// Await tell the JavaScript to wait untile the promise is done, and it will execute the next line of code.
// We can use try/catch blcok to handle the error.
// Example:

function main(){
async function getData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log('Data : ', data);
    }catch(error){
        console.log('Error : ', error);
    }
 }
 getData();
}
main();

// Difference between Promises and Async/Await:
// 1. Promises are used to handle the asynchronous operations in javaScript. But in async/await is just clearner way to handle the promises.
// In Promises we use .then(), .catch() to handle the success and error. In ayan/await will use the try catch block.
//  In promises the code will execute in a non-blocking way. In asyn/await the code will execute in blocking way.

// ------------------------------------------------------------------------------
// ------ Async Function Declaration ------
// There are two ways to declare the async function.
// 1. Normal function declaration
// 2. Function expression
// 3. Arrow function
// Example:
// 1. Normal function declaration
async function foo() {}
// 2. Function expression
const bar = async function() {};
// 3. Arrow function
const baz = async () => {};