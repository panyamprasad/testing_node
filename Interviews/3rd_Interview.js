//---> 1. What is index in db?
// 			1. Index is a way to fetch data efficiently from a database without scanning the entire table.
// 			2. Normally, in DynamoDB we query data using a partition key (and optionally a sort key).
// 			3. But sometimes, we need to query data using different attributes that are not the main keys.
// 			4. In that case, we create an index on those attributes to speed up the queries.
// 			5. There are two types of indexes in DynamoDB:
// 				Global Secondary Index (GSI):
// 					➤ Uses a different partition key and sort key from the base table.
// 					➤ Helps to query the data in completely different ways.
// 				Local Secondary Index (LSI):
// 					➤ Uses the same partition key as the main table but a different sort key.
// 					➤ Helps to filter or sort data differently within the same partition.
// 			6. The main purpose of indexes is to:
// 				Improve query performance.
// 				Avoid full table scans.
// 				Make data retrieval faster and more efficient.
//      ---------------------------------------------------------------------------------
	
//---> 2. What is Redis how will connect? how to stroe data in Redis? What is difference between Redis/DynamodDB?
// 			1. Radis measn Remote Disctionary server.
// 			2. Use this we can store the temporary data in the in the ram not in disk.
// 			3. Basically we can use the Redis install the redis dependency and we can create the client and we connect to the redis. Use the set for store and get for fetch the data from redis.
// 			4. For example: when we fetch the data from the db or else some another service, we can store the the response in the redis for a perticulay time period. 
// 			5. If we tried again same service or same api call we can ge the data from redis inbetween the same time period. 
// 			6. Instend of db calls we can use the redis.
// 			7. Increase the performace and reduce the cost, and reduce the database load.
//      ---------------------------------------------------------------------------------

//---> 3. What are microServices? How microServie work? How will connect with each other? And if one service fail how will connect with that service?
// 			1. Microservices is an architecture pattern used to develop large-scale applications by dividing them into smaller, independent services.
// 			2. Using microservices, we can separate the project into multiple small services, each handling a specific feature or functionality.
// 			3. Each service is independent — it can be developed, deployed, and scaled separately.
// 			4. For example, in a school or college application, we can divide the system into multiple services like:
// 				Student Service
// 				Staff Service
// 				Attendance Service
// 				Timetable Service
// 				Exam Service
// 				Leave Service
// 			5. Each service can be implemented independently and even use different technologies or languages.
// 			6. One service can communicate with another using APIs or event-driven mechanisms.
// 			7. Communication between services happens through:
// 					REST APIs / HTTP calls (synchronous)
// 					Event-based communiction like SNS/SQS, Kafka, etc. (asynchronous)
// 			8. It’s better to use event-based communication, because if one service is down, it won’t affect other services.
// 			9. In event-driven architecture, when one service publishes an event, another service listens to that event and performs its task.
// 			Failure:
// 			10. If any service fails, we use a retry mechanism to automatically try again after some time.
// 			11. If it still fails after several retries, the event or message is moved to a Dead Letter Queue (DLQ) for later investigation.
// 			12. This helps to store failed events and reprocess them later without losing data.
// 			13. Even after retries and DLQ, if issues remain, we can use a rollback or revert mechanism to undo partial operations.