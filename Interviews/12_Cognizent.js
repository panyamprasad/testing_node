// Explain the Project Overview and Any one of the service from the scratch.
// What is the thread pull why use this? what is library for this.
// sns & sqs how it will work?
// How you will fix the issue when duplicate notification deliver through the SNS?
// What is the Stream? What types of Streams are there? Did you used any stream previously?
// How you will fix the timeout issue? Anytime did you face this issue? how you fixed.
// Asked example coding questions:
const str = 'My Name is Panyam VaraPrasad, And my village Name is Porumamilla'

let value = str.split(" ");
let result = {};

for(let val of value){
    result[val] = result[val] ? result[val] +1 : 1;
}

console.log(result);


// Write a program that returns true if given value is within a range defined by start and end. Otherwise return false.
const range = { start: 10, end:30}

function findRange(val, range){
    return val >= range.start && val <= range.end;
}
console.log(findRange(50, range));
console.log(findRange(10, range));

// Asked about FrontEnd Questions:
// I said to Worked in Angular.
// How to render the component in angular.
// What is the TypeScript Usecase
// What is the customGuard? why use this?