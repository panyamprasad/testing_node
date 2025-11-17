// ---> 1. What is SNS?
// 		1. SNS stands for Simple Notification Service.
// 		2. It is fully managed messaging service, it will allows to send the messages to multiple subscribers.
// 		3. There are different subscribers are there.
// 			1. Email, 
// 			2. HTTP/HTTPS, 
// 			3. SMS, 
// 			4. Lambda,
// 			5. SQS Queue.
// 		4. How it will work?
// 			1. A publisher can publish a message or topic, Here publisher means Lambda or any other application.
// 			2. The SNS deliver the same message or topic for all the subscribers what we have added.
// 	--------------------------------------------------------------------------------
// ---> 2. What is SQS?
// 		1. SQS stands for Simple Queue Service.
// 		2. It is fully managed message queue, we can pull the messages and store it safely until a consumer pull this message.
// 		3. Once the consumer takes this the message will delete from the queue.
// 		4. How it will work?
// 			1. When Producer put the messages in the queue. (Here producer means Lambda, sns, api etc...)
// 			2. SQS store the message.
// 			3. Consumer pull the message form the queue.(Consumer means another lambda).
// 			4. Once it's pull it will delete from the queue.
// 	--------------------------------------------------------------------------------
// ---> 3. How Lambda publish a event to sns...? 
// 		1. First we have to create one topic in SNS. And copy the ARN topic.
// 		2. And we have to give the publish permissions to the lambda.
// 		3. And we have to import the aws-sdk in the lambda.
// 		4. And we have to maintain the ARN topic in the environments instead of hardcode.
// 		5. Use the publish method, we can publish the event or message payload to the topic.
// 		6. Like this we have to push the message or event to the sns.
// 		7. Once the message is publish to sns, sns automatically push this to subscribers what we configured like is is another lambda or sqs, email etc...
// 	---------------------------------------------------------------------------------
// ---> 4. How Subscribe the lambda to SNS Topic?
// 		1. There are two ways we can subscribe the lambda.
// 		2. From SNS topic we can add the "Create Subscription" and we can add the lambda function. Once the message or event came to the sns automatically lambda will trigger, there is no manuval trigger.
// 		3. Another way from yaml configuration, we should provide the sns arn in the events senctiion. It will automatically configuration there is no manuvall creation. Once we deploy the code this configuration will be adding to sns.
// 		Ex: When the orderLambda publish the order, notificationLambda subscribe the order and send the notfication to the use.
		
// 		🔁 What happens if the Lambda fails after being triggered by SNS?
// 			1. If the lambda fails, sns automatically use the retry mechanisam. Don't need to write the our own logic.
// 			2. After several retries still it's failing, it will move to the DLQ. DLQ is capture the failed event and messages for furthere procedure.
// 			3. If we didn't configure the DLQ, we can loose the event or message, we can't recover it and just watch the cloudwatch logs.
// 	-----------------------------------------------------------------------------------
// ---> 5. When to use SQS, why to Use?
// 		1. Basically if any lambda send a event or message it will go the the sns. After the SNS push this multiple subscribers like lambda, sqs , email etc.
// 		2. Here SQS work like a buffer, it will store the messages.
// 		3. Later lambda or other services pull this messages and processes it.
		
// 		🧭 Real-Time Example
// 		1. If we have the e-commerce application.
// 		2. At a time 1000 customers create the orders, this will send to the sns.
// 		3. From SNS this are subscribe directly to lambda it may be overloaded or else fail.
// 		4. To overcome this problem we should use the SQS. From SNS it will store the all orders into the queue.
// 		5. From Queue lambda can process one by one.
// 		6. If lambda fails we can use the DLQ. DLQ store the failed event or messages.
// 	------------------------------------------------------------------------------------
// ---> 6. 📢 Amazon SNS – Advantages & Disadvantages
// 		✅ Advantages of SNS
// 		1. Real-Time message delivery, once message publish, it automatically push to the subscribers.
// 		2. We can send one message to multiple subscribers.
// 		3. We can easily configure multiple services like lambda, sqs, email, sns and https.
// 		4. No need to maintain the servers.
		
// 		❌ Disadvantages of SNS
// 		1. There is no message storage.
// 		2. It will handle the retries but we can't customize the retries.
// 		3. Not useful for heavy traffic.
// 	------------------------------------------------------------------------------------
// ---> 7. 📨 Amazon SQS – Advantages & Disadvantages
// 		✅ Advantages of SQS
// 		1. We can store the messages until process complete.
// 		2. Even the costumers fail also we can't loss the messages.
// 		3. We can configure the DLQ, retries.
// 		4. It will handle the heavy traffic.
		
// 		❌ Disadvantages of SQS
// 		1. One message send only one customer.
// 		2. Message store long time it will more cost.
// 		3. For pulling there is small delay.
// 	-----------------------------------------------------------------------------------
	