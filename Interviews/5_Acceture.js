//---> 1. How will do routing?
//---> 2. What is Event Loop?
//---> 3. What is Phototype?
//          1. Phototype is shared object, it contains properties & methods.
//          2. Other objects can access and reuse those properties & methods.
//          3. Instead of create same objects, we can reuse those.
//          4. Advantages of Phototype is Reusability, memory save, Inheritance.
function Person(name){
    this.name = name;
}

Person.prototype.greet = function() {
    console.log("Hello")
}

const test1 = new Person('Prasad');
const test2 = new Person('Panyam');
//
//---> 4. How to create Object?
//          1. An object is collection of key-value pairs, used to store the data and behavior.
//          2. In JavaScript objects are create in multiple ways
//                  - Using object literals({}),
//                  - Using Constructor functions,
//                  - Using ES6 modules
//                  - new Object()
//                  - Object.create(): It will allow creating an object with a specific prototype.
//
//---> 5. What is Promises & async/await?
//---> 6. What is Closer?
//---> 7. How to handle concurrency in NodeJs?
//          1. Node.js is single-threaded for JavaScript execution, but it handles multiple requests concurrently using:
//              - Event Loop
//              - Async/Non-blocking I/O
//              - Libuv Thread Pool:
//                  - Libuv is internal mechanism in nodeJs.
//                  - It will handle the asynchronous input operations in event loop like file processing.
//                  - Node automatically send the work process to Libuv, we don't crate anything.
//
//              - Worker Threads (for CPU-intensive tasks)
//              - Cluster Module (to utilize multiple CPU cores)
//
//---> 8. What is the Streams how to use?
//---> 9. What contain Controller?
//---> 10. What are MicroTask & MacroTasks?
//---> 11.
//---------------------------------------------------------------

// Ques 4 coding Examples:
// Object Literals:
const person = {
    name: 'Prasad',
    id: 1,
    email: 'hello@gmail.com'
}

// new Object():
const student = new Object();
student.name = 'prasad';
student.age = 22
console.log(student);

//