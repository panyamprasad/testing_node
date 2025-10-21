// ---> What is git rebase and git merge ?
// 		git rebase:
// 			1. Before commit or merge we have to take the latest changes from the main branch it will clean the commit history.
// 			2. And It will avoid the conflicts during the pull request.
		
// 		git merge:
// 			1. Merge combind the two branched history together. And it keeps the commit history as is. It will create a new merge commit.
// 		--------------------------------------------------	
// ---> What is kubernets, why to use this, how it will work?
// 		1. Kubernets is container orchestration tool, it will automatically manage, scale and deploys the containers across the multiple servers.
// 		2. Manuvally running servers it's too hard.
// 		3. Using kubernets, it will auto Scaling, load balancing, restart if any thing fail, and resource management.
// 		4. Kubernets is like a manager that runs the containers in multiple servers, restart if anything will fail, and add the pods if traffic is increased.
// 		--------------------------------------------------	
// ---> What is dynamoDB.. Why use dynamoDB? How you store the data in dynamoDB?
// 		1. DynamoDB is a NoSQL database service from aws. It is fast, serverless and fully managed.
// 		2. Using this we can increase the performance, no need to maintain the servers, and it will work well with mutliple services like lambda, apiGateway
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
// 		2. If the object key null or undefind we can assign defalut values check with nullish.
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
// 		1. Hosisting is mechanisam, where the functions and varibales are moving the top of their scope during the compile time. Before the code execution.
// 		2. Both varibles and functions are hoisting.
// 		3. When we declared a varibale with 'var' we access it before instilization, and we get the undefind.
// 		4. let and const we can access we get the refresh error.
// 		5. But funcitons we can access before intilization because it will fully hoisting.
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
// ---> What is different between promises() and asyn/await?
// ---> What is apiGateway?
// 		------------------------------------------------------
// ---> Explain the serverless architechture?
// 		1. Serverless architechture means cloud-native approach.
// 		2. Here we can write the code and funcitons and we can deploy it, but we can't worry about the managing the servers.
// 		3. AWS cloud will takecare of these all thing.
// 		4. It will automatically scaling, avilability and manage infrastruture.
// 		5. For Example. If we upload a file to s3 using the lambda function, lambda will automatically resizes it and store it in s3. And update metadata into db, don't need to maintain servers.
// 		6. The purpose of serverless it reduce the infra management, and we can pay how much we use.
// 		------------------------------------------------------
	
// ---> Explain the restful api work flow with node and how will implement this.
// 		1. Basically in my previous projects we are using the serverless framework workflow.
//		2. In serverless the RESTful APIs using API Gateway and lambda functions instend of Express framework.
//		3. When user/client/postman if we trigger any endpoint like /users or /users/{id} it will mapped to different endpoints and different lambda funcitons.
//		4. Once user send the request the api gateway identify the route and trigger the lambda funcitons and it will connect with respective services and collecte the response from them and send back to the client in json format.
// 		5. This makes the architecture scalable, cost-efficient and event-driven because lambda trigger when needed.
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

// ---> If any thing fail in deployments what will do the maintanence...?
//      1. First, we check the CloudWatch logs to identify the root cause of the deployment failure and start the investigation.
//      2. If we’re unable to fix the issue immediately or don’t find a quick solution, we rollback to the previous stable version to restore the application.
//      3. Next, we reproduce the issue in a lower environment (like dev or QA) to analyze and fix the root cause
//      4. Once the fix is verified and tested successfully in all lower environments, we redeploy the updated version to production.
