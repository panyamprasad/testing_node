// ---> What is git rebase and git merge ?
// 		git rebase:
// 			1. Before commit or merge we have to take the latest changes from the main branch it will clean the commit history.
// 			2. And It will avoid the conflicts during the pull request.
		
// 		git merge:
// 			1. Merge combined the two branched history together. And it keeps the commit history as is. It will create a new merge commit.
// 		--------------------------------------------------	
// ---> What is kubernetes, why to use this, how it will work?
// 		1. Kubernetes is container orchestration tool, it will automatically manage, scale and deploys the containers across the multiple servers.
// 		2. Manually running servers it's too hard.
// 		3. Using kubernetes, it will auto Scaling, load balancing, restart if any thing fail, and resource management.
// 		4. Kubernetes is like a manager that runs the containers in multiple servers, restart if anything will fail, and add the pods if traffic is increased.
// 		--------------------------------------------------	
// ---> What is dynamoDB.. Why use dynamoDB? How you store the data in dynamoDB?
// 		1. DynamoDB is a NoSQL database service from aws. It is fast, serverless and fully managed.
// 		2. Using this we can increase the performance, no need to maintain the servers, and it will work well with multiple services like lambda, apiGateway
// 		3. Using this we can store the data in tables but it is schema less.
// 		4. We can store the records in JSON format.
// 		5. Each record have the primary key like PartitionKey and sort key.
// 		---------------------------------------------------
// ---> What is arrow function? How it will work?
// 		1. Arrow function is shorter way to write the function in javascript
// 		2. It was introduces in ES6 modules.
//		3. It will help to make our code clean, simple and more readable.
// 		4. In Arrow don't have the own this. It will coming from it's parent scope.
//		5. Mostly used in callbacks, array operations, and small utility functions.
// 		EX:
		const add = (a,b) => a+b;
		
		// Normal: 
			function add(a,b){
				return a+b;
			}
// 		---------------------------------------------------
// ---> How to access the obj keys inside this arrow function? if it is null how will do?
// 		1. Using the optional chaining to safely access the object keys inside arrow without any error.
// 		2. If the object key null or undefined we can assign default values check with nullish.
// 		---------------------------------------------------
// ---> Can we change the const value? No.. if array we can change? Yes.. then why what is difference?
// 		1. No we can't change the const value. And we can't reassign the value.
// 		2. But we can modify it's internal data if it's an obj or array, because the reference stays same.
// 		Ex:
			const arr = [1,2,3];
			arr.push(4);
			console.log(arr);
			//--------------------
			const obj = {
				name: 'Prasad'
			}
			obj.age = 34;
			console.log(obj);
// 		--------------------------------------------------
// ---> What is hoisting?
// 		1. Hoisting is mechanism, where the functions and variables are moving the top of their scope during the compile time. Before the code execution.
// 		2. Both variables and functions are hoisting.
// 		3. When we declared a variable with 'var' we access it before instillation, and we get the undefined.
// 		4. let and const we can access we get the refresh error.
// 		5. But functions we can access before initialization because it will fully hoisting.
// 		Ex:
			console.log(test); // it will work... Here hoisting
			function test(){
				console.log('ttttt');
			}
			
			console.log(testing); // give the error, but here declared function expression.
			const testing = function(a){
				return 'Hello';
			}
// 		--------------------------------------------------
// ---> What is Closure?
// ---> what is different between process.nextTick() and setImmediate()?
// ---> What are phases in nodejs
// ---> What is different between promises() and async/await?
// ---> What is apiGateway?
//		1. API gateway is single entry point to connect the backend services.
//      2. It will create, publish, maintain, monitor and secure the apis.
//      3. It will take the action from the client an routing the respective backend services. And take the response from the services and send back to the client.
//      4. It will handle all the tasks like traffic management, authorization and access control, monitoring, and API version management.

// 		------------------------------------------------------
// ---> Explain the serverless architecture?
// 		1. Serverless architecture means cloud-native approach.
//		2. Here we can build and run applications and services without managing the servers.
// 		3. Here we can write the code and functions and we can deploy it, but we can't worry about the managing the servers.
// 		4. AWS cloud will takeover of these all thing.
// 		5. It will automatically scaling, availability and manage infrastructure.
// 		6. For Example. If we upload a file to s3 using the lambda function, lambda will automatically resizes it and store it in s3. And update metadata into db, don't need to maintain servers.
// 		7. The purpose of serverless it reduce the infra management, and we can pay how much we use.
// 		------------------------------------------------------
	
// ---> Explain the restful api work flow with node and how will implement this.
// 		1. In previous projects, we used a serverless framework workflow instead of a traditional Node.js + Express setup.
//		2. In serverless, RESTful APIs are implemented using API Gateway and Lambda functions.
//		3. When a client (like a browser, mobile app, or Postman) triggers an endpoint (e.g., /users or /users/{id}), the API Gateway maps the request to the appropriate Lambda function.
//		4. The Lambda function executes the business logic, communicates with databases or other services, and returns a response.
// 		5. The API Gateway sends the response back to the client in JSON format.
//		6. This architecture is scalable, cost-efficient, and event-driven, because Lambda functions are triggered only when needed, and there’s no need to manage servers continuously.
// 		------------------------------------------------------

// ---> Coldstart how will overcome this.
//		------------------------------------------------------

// ---> What is CI-CD how it will work?
//		1. CI/CD stands for Continuous Integration and Continuous Deployment, which means an automated deployment process — instead of deploying manually.
//		2. When we push the code to GitHub, the CI/CD pipeline (like Jenkins, GitHub Actions, or GitLab CI) automatically gets triggered.
//		3. It first installs all dependencies, then runs unit tests and integration tests.
//		4. If all tests pass, it verifies code quality through tools like SonarQube using quality gates.
//		5. After successful verification, the pipeline builds a Docker image for the application.
//		6. This Docker image can be deployed to any environment (dev, QA, prod) without dependency issues.
//		7. The image is deployed into containers, and Kubernetes manages these containers — handling deployment, scaling, load balancing, and self-healing (automatically restarting failed containers).
//		8. Finally, once the deployment is done, the team performs validation and monitoring to ensure everything is working as expected.
//		------------------------------------------------------

// ---> If any thing fail in deployments what will do the maintenance...?
//      1. First, we check the CloudWatch logs to identify the root cause of the deployment failure and start the investigation.
//      2. If we’re unable to fix the issue immediately or don’t find a quick solution, we rollback to the previous stable version to restore the application.
//      3. Next, we reproduce the issue in a lower environment (like dev or QA) to analyze and fix the root cause
//      4. Once the fix is verified and tested successfully in all lower environments, we redeploy the updated version to production.
