// NestJS
// 21. What is NestJS and why use it instead of plain Express?
// 22. Explain NestJS architecture.
//          1. NestJs Follows the Modular Architecture.
//          2. The main building blocks are modules, Controller and service providers.
//          3. A module contains group of related functionality to gather.
//          4. A Controller contains the routing, based on request it will route the information to service.
//          5. A Service contains the business logic, and it will connect with db or external services.
//      Request Life Cycle:
//          Middleware -> Guards -> Interceptor -> Pipes -> Controller -> Services -> Interceptor -> Response
//
// 23. What are Modules, Controllers and Providers?
// 24. What is Dependency Injection in NestJS?
// 25. What are Guards?
// 26. What are Interceptors?
// 27. What are Pipes?
// 28. What are Exception Filters?
// 29. Middleware vs Guard vs Interceptor vs Pipe.
// 30. How do you implement authentication/JWT in NestJS?
//          1. In NestJs we are using JWT based authentication during the process 
//              we using AuthModule,Auth Service, JWT strategy and Guard.
//          2. When user login the auth controller receive the username & Password, and the Auth Service validate the details.
//          3. User is valid will genarate the JWt token it contains user details like UN, pw, Role etc.
//          4. After subsequent requests client send JWT token in headers as a Bearer Token.
//          5. Using the Auth Guard, will validate the token, if token valid will pass the request to backend services.
//          6. If token Invalid or missing we send 401 Unauthorized error.
//      "@nestjs/jwt is used to generate/sign and verify JWT tokens. For request-level authentication, 
//       we commonly use @nestjs/passport with passport-jwt."
//
// 31. How do you implement role-based authorization?
//
// 32. How do you validate request payloads?
// 33. How do you handle global exception handling?
// 34. How do you call an external REST API from NestJS?
//          1. If I need to call external API In NestJs, 1st I understand the 3rd party api authentication and endpoint details.
//          2. If they are using auth token I will get the clientId and secretId, generate the JWt token.
//          3. Then use the NestJS HTTPService to call the external api and pass the token get the response.
//          4. And also I can handle the timeout, retries and Circuit Baker patterns for error handling.
//          5. Instead of hardcode the credentials we can maintain the env file or we use secret Manager in AWS.
//
// 35. How do you configure different environments such as local, QA and production?
// 36. How do you create reusable/custom decorators?
// 37. How do you implement logging in NestJS?
// 38. How do you write unit tests in NestJS?
//          - Using Mocha & Chai framework will write the unit testcase.
//          - Each controller and service file have the spec file under spec will write.
//
// 39. How do you structure a large enterprise NestJS application?
//
// 40. Real-time scenario: Design a scalable NestJS API using AWS Lambda, API Gateway and DynamoDB.
//          - "I would design the NestJS API using a serverless architecture. 
//          - API Gateway acts as the entry point and handles routing, authentication, throttling and request management. 
//          - It invokes AWS Lambda, where my NestJS application runs. 
//          - Within NestJS, I would separate Controller, Service and Repository layers.
//          - The Repository communicates with DynamoDB using the AWS SDK. 
//          - I would design the DynamoDB partition keys and GSIs based on the application's access patterns. 
//          - Since Lambda is stateless, I would keep persistent data in DynamoDB or S3. 
//          - For scalability, Lambda provides automatic scaling and DynamoDB can use on-demand capacity or auto scaling. 
//          - I would use CloudWatch for logging and monitoring, and SQS/DLQ for asynchronous processing and retry scenarios. 
//          - This architecture removes server management and can handle variable traffic efficiently."
