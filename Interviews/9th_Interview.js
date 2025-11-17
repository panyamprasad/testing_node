// ---> 1. Performance : How do you incrase the performance in nodeJs?
// 		1. Use the Asynchronous / Non blocking code
// 			- Basically NodeJs is single threaded, so blocking the code, to overcome this problem use Async/Await, Promises, or callbacks.
// 			- Ex:
// 				const data = await fs.promises.readFile('file.txt', 'utf-8'); // ✅ Non-blocking
// 				const data = fs.readFile('file.txt', 'utf-8');
				
// 		2. Use the caching: Eg: Redis
// 			- Don't always fetch the data from the db or APIs - Store the frequently used data in Redis.
// 			- Due to this we can reduce the DB calls and increase the speed.
		
// 		3. Optimize the database Queries:
// 			- Use the index intend of scan full table we fetch the data.
// 			- Use Pagination for large set of data, Maintain the limit.
		
// 		4. Use Clustering or Load Balancing:
// 			- By default nodeJs use only one CPU core.
// 			- Using cluster we can use multiple cores.
//     ----------------------------------------------------------------------------------

// ---> 2. Event loop : In the event loop without blocking the code we can execute, but if I have the 3 events sync call, promises, setTimeout how it will execute what is the process.
// 		1. In NodeJs event loop is the heart of how asynchronous code works.
// 		2. It will allows to handle many tasks at once.
// 		3. Code execution is 
// 			1. Synchronous tasks will complete
// 			2. Micro tasks will complete (Promises, async/await).
// 			3. Macro tasks will execute (setTimeout, setInterval, setImmediate)
		
// 		4. If I have the 10 promises calls 11th one sync call came and 12th one setTimeout came which one will execute 1st.
// 			For Ex:
// 			🧩 Your Case:
// 				1️⃣ You have some synchronous code
// 				2️⃣ Then 10 Promises (microtasks)
// 				3️⃣ Then one setTimeout (macrotask)

// 				And your question:  “If the Promises take 10 seconds, will the setTimeout wait until all promises finish?”
// 				- In event loop always finishes all microTasks then finish the macroTasks, even the if we have the setTimeout '0' also.
				
// 		5. In this way it will blocking the code?
// 			- Yes if the event loop doing the heavy synchronous work, they will block the event loop.
// 			- If the promises are asynchronous work like fetch, readFile, dynamoDb calls, setTimeout it will not block the code it will execute microtasks also.
//     ----------------------------------------------------------------------------------

// ---> 3. Security : How to handle the security, and where to store the tokens, if you are store the token in session what it will happen is there any other way to store this.
// 		    1. The most secure storage is HTTP-only cookie.
// 		    2. User logs in → backend generates JWT → sends to browser via HTTP-only cookie.
// 		    3. Browser stores it securely → JavaScript can’t see it.
// 		    4. On every API request → browser automatically sends the cookie.
// 		    5. Backend verifies JWT → grants or denies access.
//     ----------------------------------------------------------------------------------
		
// ---> 4. Error handling : How will handle the overall application level error handling, and how to handle the 400,401,402,403 errors?
// 		    1. In nodeJs we can handle errors in two levels.
// 		    2. Route level: This level we can use the try-catch in async functions. If something is went wrong we can send the error to the next middleware.
// 		    3. Application Level: This level we can use the Express middleware and we can handle the errors. Here we can catch the errors and send the structured response to the client.
		
// 		For Ex:
// 			400(Bad Request): If we get any wrong input from client it will throw this error.
// 			401(Unauthorized): Used this when the user is not logged in or the token is missing.
// 			403(Forbidden): Used when the user logged in but doesn't have the permissions.
// 			500 (Internal Server error): Something went wrong in the code level.