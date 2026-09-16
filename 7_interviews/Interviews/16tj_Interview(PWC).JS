//---> 1. What is the CQRS pattern and how does it differ from traditional CRUD operations?

//---> 2. What is libuv library?
//          1. NodeJs run on a single thread. But the operations like database calls, external api calls or file processing.
//          2. Instead of blocking the event loop, nodeJs use the Libuv thread pool to execute it in background.
//          3. Once the task is complete, libuv notify the event loop, and callback is executed. 

//---> 3. Explain the event loop in Node.js.
//---> 4. How does Node.js handle asynchronous operations?
//---> 5. What are the Aws Lambda Limitations?
//---> 6. Project Explanations?
//---> 7. Gave the array of numbers and asked to ascending order without using inbuilt sort function.
const arr1 = [1, 0, 2, 5, 6, 0];

function ordering(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr1.length - i - 1; j++) {
      if (arr1[j] > arr1[j + 1]) {
        let result = arr1[j];
        arr1[j] = arr1[j + 1];
        arr1[j + 1] = result;
      }
    }
  }
  return arr1;
}
console.log(ordering(arr1));

const result1 = [...zeros, ...numbers];
console.log(result1);
//---> 8. Asked the GraphQL experience?