// ---> 1. Which Design patterns you are using in serverless framework?
// 		1. In my previous project we are follow the event-driven and modular design pattern, it means it is Architecture-Level design pattern.
// 		2. We commonly use middleware pattern to handle the common logic like Authentication, logging and validation.
// 		3. For data access we can follow the Repository pattern, to keep the business logic separate from the database logic.
// 		4. In Architecture-Level will use the event-driven and pub/sub patterns with SNS/SQS/EventBridge
// 		5. And will use th Saga and Orchestration pattern for rollback purpose.
// 	----------------------------------------------------------------------------
	
// ---> 2. How to implement rollback mechanism 
// 		1. Rollback means undo the changes if something went wrong or fails.
// 		2. In microservice, different services have different databases.
// 		3. So for rollback we use the sega pattern.
// 		4. Sega breaks the business workflow into multiple steps.
// 		5. If any step fails in the middle, we have to revert the previous steps
// 		6. So we can create the two function for each and every service
// 			1. One is main action
// 			2. One is for Undo action.
// 		6. If any thing fail in any service we can call undo function for previous services.
// 		7. This undo function is called as Compensation.
// 		8. We can use event or messages we can inform other services.
// 		Ex:
// 			1. Order Service → Create Order
// 			2. Payment Service → Deduct Amount
// 			3. Inventory Service → Reduce Stock
			
// 		If Inventory fails, then:
// 			1. We call Payment Service’s refund API to give money back
// 			2. We call Order Service’s cancel API to cancel the order
// 	----------------------------------------------------------------------------
	 
// ---> 3. How to implement microservices 
// 		1. To Implement microservices, first we have to divide the applications into small services, based on the business logic or functions.
// 		2. For examples we have the e-commerce application and we have the
// 			a. User Service
// 			b. Order Service
// 			c. Payment Service
// 			d. Inventory Service
// 			e. Notification Service.
// 		3. Each and every service we can maintain the different database and different implementation.
// 		4. Services communicate through the api gateway or else SNS/SQS for async tasks.
// 		5. If we want we use synchronous direct call using the api, and the order service calls payment via Axios/Rest.
// 		6. If we want we use asynchronous, here we can connect services through the queue.
// 				Direct cal - if we need instant reply
// 				Message Queue - It will execute at background.
// 		8. Like this we can connect the services.
// 		9. If any thing fail, we can use the sega Pattern for rollback using compensation actions.
// 		10. Each service will deploy independently.
// 	----------------------------------------------------------------------------
		
// ---> 4. If Service A and Service B exist — How A knows B? How to configure?
// 		1. Service A must knows service B URL,port.
		
// 		Ways to Configure:
// 			1. Environment Variables:
// 				a. Each service gets the other service base URL.
// 				b. Ex: 
// 						SERVICE_B_URL=http://service-b:4000
// 				c. Then A calls B using the axios dependency.
// 					Ex:
// 						axios.get(`${process.env.SERVICE_B_URL}/getData`)
			
// 			2. API Gateway:
// 				a. Use the api gateway we connect the services through the routers.
				
// 			3. Serverless:
// 				a. Each service deployed the lambda.
// 				b. And A invokes B function and communicate or else use the SNS/SQS event.
// 	-----------------------------------------------------------------------------

// ---> 6. What is difference between RDMS and nosql database?
// 		1. Using RDMS we can store data in tables like rows and columns. In nosql we store like documents, JSON or Key-Value pair like structure.
// 		2. In RDMS Schema is fixed, but in nosql flexible and we can store new fields any time.
// 		3. RDMS support the joins between the tables, but in nosql we don't have the joins.
// 		4. RDMS Scaling is vertical, but in nosql horizontal we can add more servers easily.
// 		5. Banking, finance systems we can use the RDMS, Real-Time apps, product catalog
// 	----------------------------------------------------------------------------
	 
// ---> 7. How to you implement authentication & authorization and what is oAuth 2.0?
// 		Authentication:
// 			1. Authentication is used to identify the user identity.
// 			2. Once user login verify the user details, if it will exist it will allow to login.
//
// 		Authorization:
// 			1. Authorization means permission, once user identify.
// 			2. Based on the user role, system provide or give the some permission.
// 			3. For example Admin can get the full access, but normal user can get only read access like that.
		
// 		How to implement JWT token in NodeJs:
// 			1. When user login the account using the username and password.
// 			2. Server verify the user details, once verification is success.
// 			3. Server generate the JWT token using the JSON WEB TOKEN library.
// 			4. Using the user details like Id, role we can generate  the token.
// 			5. Server provide this to user or client. And client store it in local storage, cookies or session.
// 			6. On each request they will send it to server. And server verify the token if it verified allow the access of else throw the error.
			
// 		OAuth2.0:
// 			1. OAuth 2.0 used when we want to login through the google, facebook or any other web sites, without storing the user details we can get the access.
// 			2. OAuth 2.0 is  a protocol to allow users to log in via third party service providers like google, facebook, github etc. Without sharing the user details we can access the resources.
// 			3. In nodejs we can use the Passport.js library, and configure the strategy, redirect to the login and get the token and user info.
// 			4. Benefits of this, no password storage, secure login, easy integration, and we can able to access the third party API'S.

// 		What is difference between JWT & Cognito tokens?
// 			1. Both Cognito and JWT tokens are similar in performance, because both are JWT format.
// 			2. But the difference is: With custom JWT, We manually handling everything - creating, signing, refresh token, storage and security.
// 			3. But in cognito AWS will take care everything, there is no manual work, automatically everything will complete.
// 	-----------------------------------------------------------------------------

// ---> 8. How do you improve the database performance?
// 		    1. We have to use the index, instead of scan full table.
// 		    2. Optimize queries
// 		    3. Using caching, store the frequently used data in memory.
// 		    4. Pagination, instead of load large data at one time, use LIMIT/ OFFSET.