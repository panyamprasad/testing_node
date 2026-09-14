//---> What is apiGateway?
//---> What invocation types are there in API Gateway?
//          You can clarify:
//                      "Do you mean API Gateway API types or integration types?"
//          Then Answer:
//          Invocation Means:
//              1. A request that passes through an API Gateway and trigger the backend services, such as Lambda functions.
//              2. It's called Gateway Invocations.
//          
//          API Types:
//              - REST API:
//                          - Older Gateway Type
//                          - More features like Mapping, Rating, Caching, API Keys, Authentication & Authorization.
//                          - More cost and compare to Http it's slow.
//                          - Best for Complex and Enterprise API's
//              - HTTP API:
//                          - Newer Gateway Type
//                          - Less features compare to REST.
//                          - Less Cost and past performance.
//                          - Best for simple microservices and Lambda API's
//              - WebSocket API:
//          
//          Integration Types: There are different types of Integration types are there:
//              - Lambda Proxy Integration: Directly request go from Gateway to Lambda.
//              - Lambda Custom Integration: Gateway transform the request before reach to lambda.
//              - HTTP Proxy Integration: Request directly go from Gateway to Lambda.
//              - Http Custom Integration: Gateway transform the request before reach lambda.
//              - AWS Service Integrations (SQS, SNS, Step Functions, etc.)
//          
//---> What is difference between Lambda Proxy & HTTP Proxy:
//          - Both Lambda PRoxy & HTTP PRoxy send the request through the gateway without modify the request.
//          - But difference is backend service.
//          - Lambda Proxy used when API Gateway Invokes a Lambda Function.
//          - Http PRoxy used when API Gateway forward the request to an existing http URL. It means the application
//            running inside the servers like EC2, ECS, Kubernetes or any External Rest APIs.
//
//---> What is synchronous Invocation & Asynchronous Invocation?
//          - Synchronous Invocation:
//              1. Synchronous means line by line, so client will be wait for response.
//              2. It means client call the api gateway.
//              3. Gateway Invoke the lambda function.
//              4. Lambda Execute the business logic, and get the response.
//              5. Gateway receive the response and submit to the client. This is called Synchronous Invocation.
//              - Real-world examples:
//                  1. Login API
//                  2. Get User API
//                  3. Get Product API
//
//          - Asynchronous Invocation:
//              1. Asynchronous means client does not wait for response.
//              2. It means when we upload the file to s3.
//              3. File store in S3, then s3 trigger the lambda.
//              4. Client get the success message immediately, lambda process file in background.
//              - Real world examples:
//                  1. File processing
//                  2. email sending
//                  3. Notifications and Report generation process.
//
//---> How will trigger one Lambda through the synchronous ans Asynchronous?
//          - Lambda trigger directly from Gateway and will wait for response it synchronous.
//          - Lambda trigger from s3, sns, sqs or other related services, and will not wait for response it's asynchronous.
// 
//---> How Gateway transformation the data?
//          - There are different types of Transformation templates are there.
//              - Mapping Templates:
//                  - For Example we got request like: {"id": 1, "name": 'Prasad'}
//                  - We can convert this using mapping templates like: {"UserId": 1, "UserName": 'Prasad'}
//
//              - Parameter Mapping:
//                  - Suppose the client sends: GET /users?id=101
//                  - API Gateway can map this like: userId = 101
//              - Header Mapping
//              - QueryParams Mapping
//              - Request/Response body Mapping.
//
//---> How to configure Mapping?
//          - Configure Mapping Template
//                  - Open API Gateway --> Select API --> Select Method --> Go to Integration Request --> Add a Mapping Template
//
//---> What is visibility timeout in SQS?
//          1. When a consumer read the message from the Queue, the message becomes temporarily hidden from other consumers.
//          2. The hidden time is called visibility timeout.
//          3. The consumer process this message during this time, and its success, delete message from Queue.
//          4. If it's fail other consumer can pull the message and process it.
//
//---> What types of Queues are there in SQS?
//          1. AWS SQS Provide two types of Queues:
//              - Standard Queue:
//                  - Using this will process the high-volume of data.
//                  - There is not order guaranty.
//                  - It is default.
//                  - Used this for Large Processing, Image Processing and Notification System will use.
//
//              - FIFO: (First In First Out)
//                  - Here order is Guaranty.
//                  - Prevent the duplicate messages.
//                  - Used this when order is required.
//                  - Used this for Payment, Order processing, and Banking system will use
//
//---> How will do Venerability validation in Gateway?
//      - What is Venerability:
//              - Venerability means weakness or less security of application, api, server or database.
//              - Attackers can use it. Basically it is an issue of server.
//      
//      - There are different Types of venerability's are there:
//              - SQL Injection:
//                      - SQL injection means when we add the user input directly concatenated into SQL queries.
//                      - Without proper validation and parameterized queries.
//              - Week authentication:
//                      - Week Password
//                      - No MFA
//                      - Hardcode credentials
//              - Broken Authorization
//              - Cross site scripting
//
//      - How to find and fix the Venerability:
//              - Code Reviews
//              - Security scanning tools: SonarQube.
//              - Dependency Scanning (npm audit, dependabot)
//              - Venerability Scanning
//              - Monitoring Security Logs
//
//      - How to fix Venerability:
//              - Based on the above senarios once we find the venerability.
//              - First identify the issue, then apply the appropriate fix like as
//                  - Input validation
//                  - Parameterized queries
//                  - Dependency upgrade
//                  - Authentication Improvements etc...
//
//---> What is Capacity mode in DynamoDB?
//---> What is CloudFormation
//---> What is ColdStart & Warm Start?
//          - Warm start means when AWS Lambda reuse the existing running environment, instead of create from scratch.
//
//---> What is CDK?