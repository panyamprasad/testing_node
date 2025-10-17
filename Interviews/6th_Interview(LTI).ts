// ---> 1. What are the tools you required if you implement any project and how you do the implementaion.
// 		1. When I start a any project like messager or any other, first I start a Node.js project on AWS, first I set up the project using Node and Express or Lambda.
// 		2. I will use the AWS services like aws lambda for running code, api gateway for routing, dynamoDB for data store, s3 for documents and images store, SNS/SQS for notificaiton and async operations and cognito for authenticaion.
// 		3. Like this use the aws services for development.
// 		4. Using the postman for testing.
// 		5. And using the mocha and chai for writing the testcases. And use the Sonarqube for check the quality gate.
// 		6. And for deployment we can use the ci-cd or AWS SDK.
// 		7. Finally , for monitor and debugging purpose we can use the cloudWatch logs.
// 		Like this we can use the tools and frameworks to implement the project.
//      --------------------------------------------------------------------------------
// ---> 2. Gave one url and ask me to write the code to fetch the data, and form the response what you will do using the typeScript? URl: (https://jsonplaceholder.typicode.com/users)
// 		1. Always use the interface for response modules.
// 		2. fetch the data using async/await
// 		3. Use the type-safe operations instend of any[].
// 		4. It helps catch the errors at compile time.
// 		5. Ex: 
// 		Response: 
				const data = [
						{
							"id": 1,
							"name": "Leanne Graham",
							"username": "Bret",
							"email": "Sincere@april.biz",
							"address": { "city": "Gwenborough", "zipcode": "92998-3874" },
							"phone": "1-770-736-8031",
							"website": "hildegard.org"
						}
					]
// 		We can create the interfaces like below:
		interface Address{
			city: String;
			zipcode: String;
		}
		interface User{
			id: number;
			name: string;
			userName: String;
			email: String;
			address: Address;
			phone: number;
			website: String;
		}
//      ---------------------------------------------------------------------------------
		
// ---> 3. Self introducation.
// ---> 4. What is event loop in nodeJs.
//      ---------------------------------------------------------------------------------

// ---> 5. What are the statagies you can use to inporve the performance?
// 		1. Use Asynchronous code like Promises, async/await.
// 		2. Maintain the layers.
// 		3. Minimize the middlewares: only load what we need.
// 		4. Use caching(In-memory or Redis).
// 		5. Use the streams for largeData.
// 		6. And infrastructure side we can use the clustering for handling multiple tasks.
