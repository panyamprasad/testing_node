// ---> 1. What is AWS Lambda?
// 		1. AWS lambda is serverless compute service, we can run the code without maintain any services.
// 		2. Just we can write the code and upload it in cloud, and aws will takecare everything.
// 		3. For Example:
// 			1. If user upload a file to s3 or update the data in dynamoDb the lambda will trigger and do the process.
// 		4. Lambda will trigger in mulitple senarios.
// 			File upload, db updata, Api Gateway tirggers.
// 	----------------------------------------------------------------------------------
// ---> 2. How does lambda will work?
// 		1. First we can write the code in supporting languages like java, python, node etc.
// 		2. After that we can create the lambda function or upload the code.
// 		3. We configure the lambda function for respoective services like s3, dynamoDB, apigeteway etc.
// 		4. When the event happen, the lambda function will trigger and start the execution.
// 		5. We can monitor the event related details like reponse or any errors using cloud watch.
// 	----------------------------------------------------------------------------------
// ---> 3. What are the benefits of Lambda?
// 		1. No Server maintanence.
// 		2. Scalabuility: Lambda will handle the thousands of requests per second.
// 		3. Cost: Pay what we used, there is no cost for idle time.
// 		4. Flexible: we can write the code using multiple languages.
// 		5. Integraiion: we can connect with multiple aws services.
// 	------------------------------------------------------------------------------------
// ---> 4. What are the limitations of Lambda?
// 		1. Execution time is only 15min.. if more than the execution is terminated.
// 		2. Cold start: If any lambda didn't used for a while, after some time if we use this it will take little more time compare to start. It's called cold start.
// 		3. Memory size: The max lambda memory size is 10gb, if more than it will fail.
// 		4. Deployment package size: Max 10mb if more than this we should use the s3 for stroage.
// 	-------------------------------------------------------------------------------------
// ---> 5. What is coldStart in AWS Lambda?
// 		1. If any lambda can't used for a while, after some time or some days if we start to use, it will take little more time for executoin. So it is called cold Start.
// 		2. To overcome this 
// 			- we can maintain the function smaller,
// 			- Reduce the unused dependencies
// 			- Use the Provisioned Concurrency
// 	-------------------------------------------------------------------------------------
// ---> 6. How to you connect AWS Lambda to other microservices?
// 		We can connect via:
// 			- API Gateway
// 			- Sns/SQS
// 			- EventBridge
// 			- DynamoDB or S3 events.
// 		- For synchronous communication we go with API Gateway for direct connect and will get the response immediatly.
// 		- For asynchronous communication will go with SNS/SQS and eventBridge connection. For example, when an order is placed, the Orderservice publish an event to sns, and it will trigger differnt lambdas like payment or notification related.
// 		- And some time lambda will trigger form s3 and dynamoDB changes.
// 		-Overall lambda will trigger depending on usecase - for apiGateway for direct communication and sns/sqs or eventBridge used for event based communication.
// 	-------------------------------------------------------------------------------------
// ---> 7. What are the Lambda layers?
// 		1. Layers are nothing but it is common code or libraries, we can share this acros mutliple lambda funcitons.
// 		2. For Example: If i have the common utilities or dependencies used by many functions, I can put in a layer and attach this layer to all lambda functions.
// 		UseCases:
// 			The main use of this layers ,Reduce the duplication, 
// 			Reduce the deployment package size,
// 			Makes the maintanance.
			
// 		For EXamples:
// 			1. LogInfo, LogErr  we implement in utilites and used it all lambdas.
		
// 		Without Layers:
// 			Without layers each and every lambda have the huge node-modules and it will common for every lambda. due to this the deployment size will incrase and performance will be down.
// 	--------------------------------------------------------------------------------------
// ---> 8. How to handle error in AWS Lambda?
// 		1. Using try/catch in code.
// 		2. Configure the DLQ for SNS/SQS failed events.
// 		3. Use CloudWatch for debugging.
// 	--------------------------------------------------------------------------------------
// ---> 9. What are the Lambda triggers and destination?
// 		Trigger: Trigger is nothing but it is event. It will tell lambda to start the execution.
// 			Ex: It will come form api gateway, s3, dynamoDB etc...
// 		Destination: Means whether it's success or failure where we send this. 
// 			Ex: To other lambda service, SNS topic or SQS 
// 	--------------------------------------------------------------------------------------
// ---> 10. How to secure AWS Lambda?
// 		1. Apply the the IAM Role and polices.
// 		2. Never hard code the credentials.
// 		3. Maintain the environment variables with encryption.
// 	--------------------------------------------------------------------------------------
// ---> 11. What is the concurrency in AWS Lambda?
// 		1. Concurrency means number of executions running at the same time.
// 		2. By default aws gives 1000 concurrency executions per account.
// 		3. If we want we can increase the concurrency for continuous calling lambdas.
// 		4. If cross the limit it will fail the execuiton.
// 	Failure avoid:
// 		1. Avoid the failure we should increase the limit.
// 		2. Configure the SQS or eventBridge queue
// 		3. Set the reseve concurrency for critical lambdas (Like payments).
// 	--------------------------------------------------------------------------------------
// ---> 12. How do SQS or EventBridge help prevent Lambda failures when concurrency limit is exceeded?
// 		1. Using the sqs or event bridge to stop the failure because , it will store the requests instend of sending them directly to lambda.
// 		2. SQS hold the pending requets safely.
// 	---------------------------------------------------------------------------------------
// ---> 13. What is Provisioned Concurrency?
// 		1. Provisioned Concurrency is used to avoid cold start issues.
// 		2. It keeps certain number of instances to ready to handle the requests.
// 	---------------------------------------------------------------------------------------
// ---> 14. How do you monitor AWS Lambda?
// 		1. Using Cloudwatch: Use this we can monitor the lambda logs and execution.
// 		2. Metrics: Verify the duration of lambda execution.
// 		3. X-ray: track the performance issues.
// 			-- Using X-ray we can find which part of function is slow.
// 	---------------------------------------------------------------------------------------
// ---> 15. How do you deploy Lambda fucntions in real world projects?
// 		Common approaches are:
// 			1. Serverless Framework
// 			2. AWS SAM
// 			3. CloudFormation
// 		-- Using the ci-cd pipeline we can deploy the code to cloud, when code push to github, the pipeline will trigger, in pipline will install the dependencies and run the testcases, once everything is success, using the docker/kubernets create the docker image and deploy the image and deploy and monitor. Once it's done code will push to the cloud. AFter deployment we can do the testing and verify the logs.
// 	----------------------------------------------------------------------------------------
// ---> 16. If one of the service is failed What will do?
// 		1. If any one service is failed, 1st we do the retry mechanisam using the retry dependencies.
// 		2. After certain retries still it's failing, we can push this event in DLQ.  It is pending message inbox. Developer or devvop team verify and take the further action.
// 		3. Rollback Mechanisam: If a payment is failed after placed the order, we might be revert the remains process and send the message to the user.
	