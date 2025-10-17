// async: 
//--------
// 1. It is keyword in javaScript. Using this we can define the asynchronous functions. 
// 2. These functions are allows us to perform non-blocking operations, like reading data from db, getting api Response, etc...
// 3. When we use the async function, we can use the await keyword inside the function, because it is use to pause the fuction util a request complete.

// Why in NodeJs:
//---------------
// Sacalabulity.. it means in nodeJs servers handles a large numbers of calls at a time, to handle these all we should use the asyn fucntion along with await.
// Efficiany: And increase the performance. 
// await:
// awit keyword use inside the async fucntion. Because it will pause the function execution until the promise, that it is waiting for resolve or rejected response.
// this can use only in asyn functions.
// And error handling also we can use this.
