// 1. What is a JavaScript promise, and how does it handle asynchronous code?
    // Promise: Means it will handle the aynchronous operations in cleaner way.
    // JavaScript is single threaded, so some operations like api calls, file reading, timers are happen aynchronously.
    // To handle this we can use the promises without callback hell.
    // We use the .then() for success, .catch() for errors.
    // If we have multiple asyn operation useing the .then() it will make chaining so it will hard to read.

// 2. What is the difference between null and undefined in JavaScript?
    // Null: Null is assigned value that represents 'no value' or empty value.
    // Intentional we can assign the value as null.

    //Undefined: It mean we can declared the variable but we didn't initialized the value, before intialization if we access the varible we get the undefined.

// 3. What is a callback function, and how is it used?
    // Callback function is a function passed as an argument to another funcition, it mean it will execute after some time, the main task is complete.
    // Basically we can use this to handle the asynchonous operations. Like api calls, db calls, like that.
    // The main function finishes its work, it invokes the callback function.

// 4. What is the difference between setTimeout() and setInterval()?
    // Both are using to handle the asynchonous operations.
    // It will execute after the specific time deley.
    // setimeout() execute once afer the time delay
    // setInterval() execute repeatedly at a given time.
    const intervalId = setInterval(() => {
    console.log("Repeats every 2 seconds");
    }, 2000);

    // Stop it after 6 seconds
    setTimeout(() => clearInterval(intervalId), 6000);

    

