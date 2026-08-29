import { promises } from "stream";

if ('JavaScript') {
    //      Q1. What is JavaScript?
    //              1. JavaScript is Scripting language. Using for web development.
    //              2. Javascript dynamic typing.
    //              3. Using this we can find the errors at running time.
    //              4. Easy to learn, and better for small applications.
    //      ---------------------------------------------------------------------------
    //
    //      Q2. Var/let/Const
    //          - Var, let & Const are the three different variable declaration types. Based on our requirement we can use this.
    //          - Var:
    //                  1. Var is the function scope.
    //                  2. We can reassign and redeclaration is possible.
    //                  3. Hoisting is applicable, and if we try to print the variable before initialization it will give undefined.
    //                  4. Using var we use any where in function level.
    //          - Let:
    //                  1. Let is blocked scope.
    //                  2. We can reassign the value, but redeclaration is not possible.
    //                  3. Hoisting is applicable, but if we try to print before initialization it will give reference error.
    //                  4. Using this inside block itself.
    //          - Const:
    //                  1. Const is similar to let. It is also blocked scope.
    //                  2. Reassign & Redeclaration is not possible.
    //                  3. Hosting is applicable, but if we try to print before initialization it will give reference error.
    //                  4. Using inside the block itself.
    //      ---------------------------------------------------------------------------
    //
    //      Q3. Closer with Example?
    //              1. Closer is the function, It will remember the variable inside the memory.
    //              2. Closer gave the access to inner function to access the variable from the outer scope.
    //              3. Even the outer scope function execution is complete also.
    //              4. Using this callback functions like setTimeout, promises, async/await functions.
    //              5. Due to this some disAdvantages also is there like memory leak. So we have to use carefully.
    //              6. Always clean up the timers, unused references and subscribers.
    //              Ex:
    function outer() {
        let count = 0;
        function inner() {
            count++;
            console.log(count);
        }
        return inner;
    }
    const output = outer();
    output();
    output();
    output();
    //                  --------------------
    function removeDuplicates() {
        const seen = new Set();

        return function (arr) {
            return arr.filter(val => {
                if (seen.has(val)) {
                    return false;
                }
                seen.add(val);
                return true;
            })
        }
    }
    const output1 = removeDuplicates();
    console.log(output1([1, 1, 2, 2, 3, 2, 3, 4, 3, 3, 4, 5, 5]));
    //      ---------------------------------------------------------------------------
    //
    //      3. Call/Apply/Bind with example
    //          - call, apply, Bind these three are JavaScript methods, based on our requirement will use.
    //          - call:
    //                  1. Using this we can Invoke the function and execute immediately.
    //                  2. We can pass the arguments as comma separated.
    //                  Ex:
    const person = { name: 'prasad' };

    function test() {
        setTimeout(() => {
            console.log('Name : ' + this.name);
        })
    }
    test.call(person);
    //          - apply:
    //                  1. Using this we can invoke the function and execute immediately.
    //                  2. Pass the arguments as an array format.
    //                  EX:
    const person1 = { name: "Prasad" };
    function test2(greeting) {
        setTimeout(() => {
            console.log(greeting + ' ' + this.name);
        })
    }
    test2.apply(person1, ['Hello']);
    //          - Bind:
    //                  1. Using this we can't invoke the function,
    //                  2. We create the new function.
    //                  3. It will not execute immediately.
    //      ---------------------------------------------------------------------------
    //
    //      4. Promises
    //              1. A Promise is an object, 
    //              2. Using this we can handle the asynchronous operations without blocking the code.
    //              3. Before promises, developers used callbacks, due to this callback hell will happen.
    //              4. So to over come this problem we can use the Promise.
    //              3. Using the .then() & .catch() we can create cleaner code.
    //              4. But using this there are multiple chaining process will happen.
    //              5. Due to this we are unable to read and debug the code.
    //              - In Promises have the 3 different states like:
    //                  1. Pending: Here the promise is created
    //                  2. Fulfilled: Work completed successfully
    //                  3. Rejected: If anything went wrong it will go rejected state.
    //      ---------------------------------------------------------------------------
    //
    //      5. Memory Leaks
    //              1. A memory leak will happen due to objects are no logger required.
    //              2. But still we referenced somewhere.
    //              3. Due to garbage collector didn't freeing memory.
    //              reason:
    //                  1. Closer holding reference
    //                  2. Infinite timers
    //                  3. Growing caches
    //                  4. Global variables
    //              Fix:
    //                  1. Remove unnecessary references.
    //                  2. Avoid global variables
    //                  3. Clear internal & timeouts.
    //      ---------------------------------------------------------------------------
    //
    //      6. Prototype chain
    //              1. Prototype is way to find property or method in JavaScript object.
    //              2. If javaScript can't find the something in object, it's look  in its parent object
    //              3. If it's not found there, it keep searching until it will reach null.
    //      ---------------------------------------------------------------------------
    //
    //      7. Async/Await Execution flow
    //              1. Async / Await is using for executing the asynchronous operations.
    //              2. Using async we can create the function.
    //              3. Using Await we can hold the functionality until will get the response from the promises.
    //              4. And we can use the try/catch block to handle the exceptions.
}
//----------------------------------------------------------------------------------------------------------------------------

if ('TypeScript') {
    //      1. What is typeScript
    //              1. TypeScript is superset of javaScript.
    //              2. TypeScript support static typing.
    //              3. In typeScript we can find the errors at development time.
    //              4. Type declaration allows in typeScript.
    //              5. It is better for enterprise applications.
    //
    //      2. TypeScript/JavaScript ⭐
    //              1. JavaScript is scripting language, using this develop web applications.
    //              2. It is dynamic typing. Will found error at compile time.
    //              3. Type declaration not possible.
    //              4. Better for small applications.
    //              5. TypeScript is superset of javaScript.
    //              6. It is static typing, found error at development time.
    //              7. Type declaration allows in typescript.
    //              8. Better for large applications.
    //
    //      3. Any & Unknown
    //              1. Any & Unknown are the two different data types in typeScript.
    //              2. When we declare a variable as any & unknown we can assign a any value.
    //              3. But Using Any type checking is not mandatory, and it will not safe.
    //              4. Because if we assign a number, In another place if we try to convert it as uppercase it will throw error.
    //              5. Coming to the Unknown, type checking is mandatory, otherwise it will throw error.
    //              6. Compare to ANY, Unknown is better.
    //              7. Basically using this for api response, migration from JS to Ts etc.
    //
    //      4. Type & Interface
    //              1. Both Interface & Type are using for define the data structure in typeScript.
    //              2. Using interface we can declare the object contracts and it will support for merging.
    //              3. But Type is more flexible compare to Interface.
    //              4. Using this we can define objects, and it will support for Union, intersection, tuple and primitives.
    //              5. If we want to object contract and class implementation will prefer Interface.
    //              6. If we want Advanced features will go with type.
    //
    //      5. What are Generics ⭐
    //              1. Generics are one of the important feature in Typescript.
    //              2. Using this we can create the reusable and type-safe functions, classes, interfaces and type.
    //              3. Instead of create the separate code for each type, we can use the same code with different type placeholder.
    //              4. So main advantage of Generics is reusability, and improve the code quality.
    //              Syntax
    function getValue<T>(value: T): T {
        return value;
    }

    getValue('Prasad');
    getValue(500);
    //
    //      6. Union & Intersection
    //              1. If we want to create a variable with different data types will use the Union.
    let value1: string | number | bolean
    //              2. IF we want to club the multiple type into a another type we can use the Intersection
    //              Ex:
    type Employee = {
        id: number,
        name: string
    }
    type Department = {
        department: string
    }

    type Lead = Employee & Department;

    //      7. What are decorators ⭐
    //              1. Decorators are special functions, using this we can declare the classes, 
    //                  functions, methods, parameters and properties.
    //              2. Using decorators we can find the controller, services.
    //              3. Which method handle the GET/POST/PUT/DELETE
    //              4. Which properties contains request body like this decorator will helpful.
    //              5. Without decorators nestJs didn't understand the application structured.
    //              6. there are different types of decorators are there.
    //                  @Controller
    //                  @Injectable
    //                  @Body
    //                  @Params
    //                  @Get / @Post / @Put
    //                  @Query
    //
    //      8. What is type inference?
    //              1. Type Inference means typeScript automatically understand the data type based on the value assigned.
    //              2. So we don't need to specify the datatype. It is called type inference.
    //              3. Less code, cleaner code purpose will use this.
    //
    //      9. What is different between array & Tuple?
    //          Array:
    //              1. Using Array we can store the multiple values with same data type.
    //              2. Using Array we don't have fixed size.
    //              3. We can easily iterate the array values.
    //
    //          Tuple:
    //              1. Using tuple we can store the multiple types of data.
    //              2. Using Tuple we must know the size and order.
    //              3. If we miss the order it will throw the error.
    //              4. So if we have fixed size, order then will go with tuple.
}
//----------------------------------------------------------------------------------------------------------------------------

if ('NodeJs') {
    //      1. What NodeJs? Why to use?
    //              1. NodeJs is a runtime environment, and it will use the JavaScript for backend development.
    //              2. And It is a single thread, event driven. 
    //              3. And using the event loop we can execute the asynchronous operations without blocking the code.
    //              4. And in node we have the huge npm package, it contain millions of npm dependencies.
    //              5. Over all NodeJs is simple and scalable.
    //      ---------------------------------------------------------------------------
    //
    //      2. What are event loop?
    //              1. Event loop is heart of NodeJs.
    //              2. Using this we can execute the asynchronous operations without blocking the code.
    //              3. In event loop we have the multiple phases, each phase we can execute the different functionalities.
    //              4. Coming to phases:
    //              5. TimerPhase: In this phase event loop will execute callback functions like setTimeout and setIntervals.
    //              This will execute after specific time.
    //              6. Input Phase: In this phase event loop will execute input operations 
    //                          like reading/writing files and network operations.
    //              7. Poll Phase: In this phase event loop get the new input events and execute those.
    //              8. Close Phase: In this phase close event will execute.
    //              9. checkPhase: In this event loop will execute the setImmediate callback function.
    //              10. MicroTasks: Micro tasks are very important in event loop, in this loop it will execute the 
    //                          Promises & async/await functions will execute.
    //              11. process.nexttick: In this phase it will execute the code if any code we have to execute 
    //                                after the current task.
    //          - So event loop is never ending topic, until the main loop terminated.
    //          - Even event loop also blocking some time. If we have the more synchronous calls it will block.
    //      ---------------------------------------------------------------------------
    //          
    //      3. What are streams? Buffer? Difference between Stream & Buffer?
    //              1. Streams are nothing but how to read the file. Instead of load the full file at once.
    //              2. Using the streams we can load the file chunk by chunk.
    //              3. Basically will use this in large files like audio, video and networking data.
    //              4. We have different types of Streams are there.
    //                  1. Readable Stream: Reading the file
    //                  2. Writable Stream: Writing the file
    //                  3. Duplex: Both reading & writing
    //                  4. Transform: Modify the data.
    //      ---------------------------------------------------------------------------
    //
    //      4. Cluster & Work thread
    //              - Cluster & Work thread these two are the concurrency models and handle different type of workloads.
    //              1. Cluster:
    //                      1. Using Cluster we can handle the heavy traffic. And handle multiple requests.
    //                      2. By default node is the Single thread and default it will run single cpu core.
    //                      3. Using cluster it will create the multiple CPU Core processes in single cpu core.
    //              2. Work thread: (Handle the heavy work load)
    //                      1. Using work thread we can handle the heavy work load functionalities like.
    //                      2. Image processing, Pdf generation and heavy calculations like this.
    //                      3. So Work thread allows us to run CPU intensive tasks in separate threads.
    //                      4. So the main event loop will work without blocking.
    //      ---------------------------------------------------------------------------
    //
    //      5. Authentication & Authorization ? JWT ? OAuth ?
    //              - Current Interconnected world api security is not a optional, it's mandatory.
    //              - Using the Authentication & Authorization we can handle the api security.
    //              - Authentication: 
    //                  1. Authentication means identify the use identity. If the user is valid user or not.
    //              - Authorization:
    //                  1. After user Identity is done, based on the user role we can provide the permissions.
    //                  2. For example Admin have full access, but employee have limited access like that.
    //              - There are different types of auth verifications are there.
    //                  1. Basic authentication
    //                  2. Session based authentication
    //                  3. Token based Authentication
    //                  4. OAuth2 Authentication.
    //
    //              - Basic Authentication:
    //                  1. It is simple authentication, will send the UN & PW as Base64 format.
    //                  2. Using for local validation and simple API's.
    //                  3. For production api's it will not suitable.
    //              - Session Based Authentication:
    //                  1. Compare to Basic it is good. And when We login to server using the userdetails.
    //                  2. Server take the details and genarate the sessionId and store the data in DB.
    //                  3. And server gave to the sessionId to browser after every request we have to send SessionID.
    //                  4. Server verify the Id and get back to the response.
    //                  5. Using this for traditional api's like login, dashboard like that.
    //                  6. When ever will control both frontend and backend will use this authentication.
    //
    //              - Token Based Authentication:
    //                  1. When user login to the server, server verity the use details, and get the user data.
    //                  2. Using the user data along with secretId and expire time it will genarate the JWT token.
    //                  3. This token contains three type of place holders headers/ payload/ signature.
    //                  4. And token provide to user, and user should store this in secret storage better to http cockle only.
    //                  5. After every request we have to send the JWT in header section along with body.
    //                  6. Using the Large applications and microservices.
    //
    //              - OAuth2:
    //                  1. OAuth2 is the authentication framework.
    //                  2. It will allows users to login through out the trusted providers.
    //                  3. Like Google, microsoft, Azure etc. Instead of create and manage passwords in every application.
    //                  - Generate the OAuth2:
    //                      1. First we have to register the application as Identity provider. Like Google/Microsoft/Azure etc.
    //                      2. After that we have to install the Passport Security in NestJs.
    //                      3. When user click the login it will redirect to identity provider website.
    //                      4. After authentication it will genarate the authorization code.
    //                      5. Using this we can exchanged the tokens.
    //                      6. And NestJs retrieves the user details and optionally it will genarate the JWT.
    //                      7. Then we can protect the API's using the auth Guards.
    //          
    //              - What is HttpOnly Cookie?
    //                  1. HttpOnly is a security flag.
    //                  2. When cookie marked as httpOnly, it can't access thought the JavScript.
    //                  3. It only sent automatically by the browser to server.
    //                  4. Used to store sessionID's, access Tokens, refresh Tokens and protect the sensitive information.
    //      ---------------------------------------------------------------------------
    //
    //      6. Performance Optimization questions?
    //              1. Performance Optimization will happen in different operations.
    //              2. Always we have to use asynchronous functions without block the functionality.
    //              3. Using the caching, due to this we can get the data from the local storage instead of db or services.
    //              4. Cluster
    //              5. Optimize the Data base queries and use Index.
    //              6. Remove the unnecessary dependencies.
    //      ---------------------------------------------------------------------------
    //
    //      7. Redis
    //              1. Redis means Remote dictionary server.
    //              2. Using the Redis we can store the data in memory. It will store in Raw not in disk.
    //              3. Instead of fetch the data from DB or other services we can use the Redis and will get the data.
    //              4. Due to this increase the performance, fast access.
    //      ---------------------------------------------------------------------------
    //
    //      8. Async Programming
    //              Callbacks:
    //                  1. CallBack is one of the async pattern to handle the asynchronous operations.
    //                  2. Using callback will create the multiple callback functions like callback inside callback like this.
    //                  3. Due to this callback hell will happen.
    //                  4. So its become a hard to read, maintain and debug the code.
    //
    //              Promises:
    //                  1. To overcome the above problem node introduce the Promises.
    //                  2. Using the promises we can write the code cleaner way using .then() and .catch() methods.
    //                  3. Using Promises multiple chaining process will happen its become hard to read, maintain and debug.
    //
    //              async/Await:
    //                  1. To overcome above two problems node using the async/await pattern.
    //                  2. Use async we can declare the functions.
    //                  3. Use await it will wait until the promises provide the response whether its success or failure.
    //                  4. Here we use the try/catch for error handling.
    //
    //              promises.all:
    //                  1. Promises.all is one of the JavaScript method.
    //                  2. Using this we can execute the multiple asynchronous operations in parallel.
    //                  3. And it will wait until all or complete.
    //                  4. If anything fail it immediately fail.
    //                  Ex:
    async function getData() {
        try {
            const [user, order, payment] = promises.all([
                userService,
                orderService,
                paymentService
            ]);
            console.log(user);
        } catch (error) {
            console.log("Error:", error);
        }
    }
    //      ---------------------------------------------------------------------------
    //
    //      9. What causes Event Loop Blocking?
    //          1. Basically the event loop will block compare to asynchronous more synchronous calls it will happen.
    //          2. Like huge loop conditions, large JSON parsing, Encryption etc.
    //          3. To overcome this problem we have to use workThreads, SQS, background jobs we have to use.
    //
    //      10. How to Scale the NodeJs APIs?
    //          1. I will use the Cluster to handle the multiple requests using the all CPU Cores.
    //          2. For CPU Intensive tasks I will use the work threads like file processing, pdf generation like that.
    //          3. For large microservices I will prefer for Event driven architecture with SNS & SQS.
    //          4. Like the we can scale the NodeJs APIs.
    //
    //      11. API security best practices?
    //          1. For APi security will provide the multiple layers of protections. Like.
    //          2. Always use the authentication & authorization to provide the access to trusted users.
    //          3. And we have todo the input validation.
    //          4. Provide proper CORS configuration and provide the access to trusted domains.
    //          5. Use the HTTPS so data will be encrypted during the transmission.
    //          6. Additionally we have to use the logging, monitoring and secure handling.
    //
    //      12. How Node.js handles 10,000 concurrent requests.
    //          1. Node.js uses the event loop and Input operations to handle thousands of requests.
    //          2. And the Database queries and external api calls are not block the code symatancily it will execute the
    //              remaining functionality, once the execution complete, the callback function execute and sent response.
    //          3. Like this nodeJs execute the 10,000 if requests.
    //      ---------------------------------------------------------------------------
    //
    if ('ErrorHandling') {
        //      1. In NodeJs Error Handling will do in Two ways.
        //              1. Route-Level Error Handling.
        //              1. Application Level Error Handling.
        //
        //      2. Coming Route-Level Error Handling:
        //              1. Here we can handle the error within a specific route, controller and service.
        //              2. Using try-catch block we can handle the errors.
        //              3. We can easily implement this, and if we required will do the custom error handling.
        //              4. But repetitive code will be there, we have to write tye-catch many places
        //
        //      3. Coming Application Level Error Handling:
        //              1. Instead of handling the errors in every route and service we can use centralized mechanism.
        //              2. Using this we can catch the all unhandled exception across the application.
        //              3. Basically using this in NestJs:
        //                  - Global Exception Filters
        //                  - Global Interceptors
        //                  - Middleware
        //              4. Using this we can handling centralized errors.
        //              5. Entire application same error format. Less code.
        //      
        //      4. Even we use a Global Exception, sometimes we have to handle some route level exception handling 
        //          for some business scenarios.
        //      5. Most of the time will use both.
        //
        //      6. In pure nodeJS and javaScript we can handle exception using try/catch in route level.
        //      7. Application level will use 
        //          - process.on('uncaughtException) for synchronous,
        //          - process.on('unhandledRejection) for asynchronous.

        @Catch()
        export class GlobalExceptionFilter implements ExceptionFilter {
            catch(exception: any, host: ArgumentsHost) {
                const response = host.switchToHttp().getResponse();

                let status = 500;
                let message = 'Internal Server Error';

                // Handle 4xx errors
                if (exception instanceof HttpException) {
                    status = exception.getStatus();
                    message = exception.message;
                }

                response.status(status).json({
                    success: false,
                    statusCode: status,
                    message,
                });
            }
        }
    }
    //
}
//----------------------------------------------------------------------------------------------------------------------------

if ('NestJs') {
    //      1. What is NestJs? Why to Use? Advantages?
    //              1. NestJs is one of the powerful framework for backend applications.
    //              2. It will provide the structure architecture to develop the REST API's.
    //              3. Instead of create everything manually, it will provide the structure format like
    //              4. Controller, Services, Models etc.
    //              5. Using NestJs will implement everything independently.
    //              6. Better for enterprise applications and large scale applications.
    //              -Advantages:
    //                  1. Structure Code
    //                  2. Dependency Injection
    //                  3. Build-in Features
    //                  4. Team friendly
    //
    //      2. NestJs Functional flow
    //              1. In NestJs the functional flow will execute in different layers.
    //              2. When we got the request form the client it will execute step by step like below:
    //              3. Middleware -> Guards -> Interceptor -> Pipes -> Controller -> Service -> Interceptor -> Response.
    //              4. Middleware is th function it will work in between request and response, validate the request, if required
    //                  Modify the request, anything went wrong it wll stop the process. Once it's done
    //              5. Request pass to the Guards, Guard is nothing but authentication & Authorization, validate the request, after
    //                  validation check the permissions. Once it's done
    //              6. Request pass to Interceptor, using Interceptor will do the logging and transformation. It will check 
    //                  the request and print the url, request body, if require transform the format. It will work before and 
    //                  after controller.
    //              7. After the above all process is done, request came to controller. Controller is nothing but it is a
    //                  component, it will handle the routings, and all http methods, based on our request it will verity the 
    //                  request methods and validate it using pipes and forward to service.
    //              8. Using service, we can handle the all business related logic, based on our request it will execute the business
    //                  logic and get the response form DB or any other third party services.
    //              9. Once we get the response again use the interceptor doing the logging and get back the response to client.
    //          - Like this the request flow will work in Nestjs.
    //
    //      3. Controller & Services ?
    //      4. Dependency Injection ****?
    //              1. Dependency Injection is a design pattern. Using this we can inject the services from the outside.
    //              2. Instead of create them from itself using the dependency Injection will get all those objects, methods,
    //                  functions, classes and others. 
    //              3. we can inject in controller, services.
    //              4. If any class or function we want to inject in any place will use the @Injectable decorator for that class.
    //              - Advantages:
    //                  1. Loose Coupling
    //                  2. Easy unit testing
    //                  3. Better maintainability. etc
    //
    //      5. Difference Between NestJs & ExpressJs?
    //      6. What are Pipes, Guards, and Interceptors?
}
//----------------------------------------------------------------------------------------------------------------------------

if ('AWS') {
    if ('Lambda') {
        //      1. What is Lambda? Advantages ? DisAdvantages?
        //           1. Lambda is a serverless compute service, it is one of the feature in AWS.
        //           2. Using Lambda we don't need to maintain any servers, just we can write the code.
        //           3. Lambda will support multiple languages like Java, cobol, .net, Node etc...
        //           4. Just we can write the code upload the file or create the lambda in cloud aws will execute everything
        //           5. Lambda will execute in different ways./
        //                - API Gateway, S3, DynamoDB changes, SNS, SQS like this.
        //          Advantages:
        //              1. No Server Maintenance.
        //              2. Flexibility
        //              3. Cost, how much will use that much we should pay, there is not heddle cost.
        //              4. Scalability, it will handle the thousands of requests per sec.
        //          DisAdvantages:
        //              1. Execution time only 15min, after cross this throw error.
        //              2. Cold Start.
        //              3. Memory size only 10gb, if more that it will fail.
        //              4. Deployment package size 10mb, so better to will use the s3.
        //
        //      2. Cold Start?
        //          1. If any lambda we didn't use for a while it will take little more time for execution.
        //          2. Again it will start form basic onwards, it is called cold start.
        //          3. To reduce the cold start time we cam minimize function size, instead of use single function we can
        //             segregate multiple functions and remove unused dependencies like that.
        //          4. If we want to completely stop the Cold start we have to use the Provisioned Concurrency.
        //
        //      3. What is Provisioned Concurrency?
        //          1. Provisioned Concurrency using for cold start, because it will maintain the some instances, up and ready.
        //          2. Without delay it will execute the lambda functions.
        //          3. But it is chargable.
        //          4. Basically use this for important lambda functions like payment, notification, or any mandatory trigger like.
        //
        //      4. How do you monitor Lambda?
        //          1. Using the AWS Cloud watch we can monitor the lambda function.
        //          2. In cloud watch we have the metrics and X-ray.
        //          3. Using Metrics we can found the how much memory space will use the lambda.
        //          4. Using X-ray we can find the where the lambda will take more time and will check performance.
        //          5. And if any thing went wrong will check logs and fix the issues.
        //
        //      5. What is Lambda Layer?
        //          1. Layers are nothing but it is common files, and utilities.
        //          2. Instead of write the same code in multiple functions, we can keep it one place and reuse them.
        //          3. Due to this we reduce the duplication, and increase the performance.
        //          4. And deployment package size also reduce.
        //
        //      6. Lambda Lifecycle?
        //          1. In Lambda lifeCycle there are three different phases are there.
        //              - Init
        //              - Invoke
        //              - Shutdown
        //          2. When the lambda trigger first time, it will create the container, environment and start execution,
        //             so the first startup is delay, it's called Init.
        //          3. Once Lambda ir ready, when request came it will start execution immediately, it's called Invoke.
        //          4. If lambda is not used long time, container, memory and environment everything will delete. 
        //             Again it will start initial stage, it's called Shutdown.
        //
        //      7. Environment Variables?
        //          1. Environment variables are key-value pairs.
        //          2. Instead of hardcode this, we can keep it in environment file, during the execution dynamically take this.
        //          3. Basically it contains:
        //              1. DataBase URL's.
        //              2. External API url's.
        //              3. Bucket names
        //              4. API Endpoints etc.
        //

        // Lambda Example:
        const handler = async () => {
            try {
                console.log('Hello World');

                return {
                    statusCode: 200,    
                    body: JSON.stringify('HelloWorld')
                }
            } catch (err) {
                return {
                    statusCode: 500,
                    body: JSON.stringify({
                        message: err
                    })
                }
            }
        };
        handler();

        //--> What is Async?
        //      1. When we use the async the function will wait for something like DynamoDB data, api response or fileReading.
        //      2. Without async await will not work it will give error.

        //--> What is Event?
        //      1. Event means request body or data.
        //      2. When someone trigger the lambda they will pass the event.

        //--> What is Handler?
        //      1. Handler is starting point of lambda.
        //      2. AWS invoke this handler whenever lambda trigger

        //--> What is console.log()?
        //      1. Use this print something in logs. Using this for local validation.
        //      2. If anything we want to debug in cloud will use this and check the logs in cloudWatch.

        //--> How do you call DynamoDB from Lambda?
        //      1. Lambda cannot connect dynamoDB directly.
        //      2. We should use the AWS SDK inside the lambda Function.
        //      3. In AWS SDK we have the dynamoDB libraries we can import it, create the dynamoDB client.
        //      4. Then we can perform the operations like create, update, delete the data.
        //      5. Lambda send the request to DB, and db process the request and give the response back to lambda.
    }
    //      
    if ('API_Gateway') {
        //      1. What is API Gateway
        //          1. API Gateway is entry point of the backend services in aws cloud.
        //          2. Using gateway we can create, modify and publish the api's.
        //          3. Using gateway we can validate the request, check the permissions, if everything is correct it will allow
        //              backend service otherwise throw error.
        //          4. Cashing also in gateway level, instead of repeated api calls will use caching and get the data.
        //          5. It will handle the Rate limit. Rate limit means per sec how many requests user can perform. If it's cross
        //              throw the to many request error.
        //          6. Using this we do the backend integration also.
        //
        //      2. How API Gateway will works with Lambda?
        //          1. When gateway receive the request from client or user, gateway verify the request.
        //          2. If user is verify and have the valid permissions, gateway process the request to routing.
        //          3. Based on the request method it will route the specific lambda function what we configure.
        //          4. Once lambda execution is done get the data from db or other services it will provide the response
        //             back to gateway.
        //          5. Gateway verify the response and give back to user or client.
        //
        //      3. Types of API's?
        //          - There are total 3 types of API's are there.
        //             1. Https:
        //                 1. Http is simple and faster and cheaper.
        //                 2. It have the limited features available like auth, jwt
        //                 3. Better for simple and new api's.
        //
        //             2. Rest API's:
        //                 1. Compare to Http Rest Api's are fully featured and all features are support in API Gateway.
        //                 2. It will support authentication, authorization, caching, rate limit, monitoring everything.
        //                 3. Compare to Http it is coast and slower.
        //                 4. Best for large application, complex api's with rules & security.
        //
        //             3. WebSocket Api:
        //                 1. It is use in bio-directional communication between client and server.
        //                 2. Basically use this chatting, game apps.
        //
        //      4. How does secure API's?
        //          1. We can provide the api security in many way.
        //          2. Using IAM Role & Policies.
        //          3. Coginto authentication & authorization.
        //
        //      5. What is CORS?
        //          1. CORS Means Cross Origin Resource Sharing.
        //          2. CORS is the browser security.
        //          3. It will provide the permission to applications can access the data from another applications.
        //          4. Backend side should provide the permissions to api's.
        //
        //      6. What is API Versioning?
        //          1. Api Versioning is nothing but it will avoid the existing customers.
        //          2. When we release the new changes in existing api, instead of modify existing api, will create new.
        //          Ex:
        //              /api/v1/userService
        //              /api/v2/userService
        //
        //      7. Throttling vs Rate Limiting?
        //          1. Rate Limit: 
        //                  1. Rate Limit means fixed limit, how many requests user can make with in a time period.
        //                  2. It crossed it will throw too many request error.
        //                  3. For Ex Max 100 request, if we got 101 it will reject.
        //
        //          2. Throttling:
        //                  1. Instead of rejecting the request it will put on hold.
        //                  2. I mean Requests are delayed or queued instead of immediately rejected. 
    }
    //
    if ('DynamoDB') {
        //      1. What is DynamoDB?
        //          1. DynamoDB is the NoSql database service in aws cloud.
        //          2. Using this we can store the data in key-value pair like object structure.
        //          3. It is fast, scalable and no server maintenance.
        //          4. It will handle the large amount of traffic automatically.
        //
        //      2. What is Partition Key?
        //          1. Partition key nothing but it is primary key.
        //          2. It should be unique.
        //          3. For record finding purpose we can use this Partition key.
        //      
        //      3. What is Sort Key?
        //          1. Sort key is nothing but using this for sorting purpose.
        //          2. It is optional.
        //          3. Basically sort key like createdData, OrderId.
        //
        //      4. What is the Index?
        //          1. Index is nothing but how to read the data from the dynamoDB.
        //          2. Basically will the Partition Key and sort Key will fetch the data from dB.
        //          3. But sometime we have to get the data with different Partition Key and Sort Key.
        //          4. That time will use the Index, using Index instead or scan full table will get the data.
        //           
        //      5. What GSI? What LSI?
        //          1. In index we have two types of index are there.
        //              1. Global Secondary Index: Using this we can use the different Partition Key and sort Key.
        //              2. Local Secondary Index: Same PartitionKey but different Sort Key.
        //          2. Most of the time will use th GSI to fetch the data.
        //          3. In exiting tables we can add the GSI, but LSI will add when will create the table.
        //          4. Per table the max GSI is 20, but LSI we can add max 5.
        //    
        //      5. What is DynamoDB streams?
        //          1. DynamoDB streams are using for verification purpose, I means tracking purpose.
        //          2. If any actions happen like insert, update, delete we use the streams will track the records.
        //          3. And we can capture the event we can trigger actions like sending notifications, sync data like that.
        //
        //      6. Difference between Scan & Query?
        //          1. Scan & Query is two different ways to fetch the data from the dynamoDB table.
        //          2. Using scan we can scan the full table and will fetch the data.
        //          3. It will be take some time to read data, due to the some performance issues will come.
        //          4. Bus using Query will get the data without scanning full table.
        //          5. It will give fast performance.
        //
        //      7. What is TTL? (Time to Leave)
        //          1. TTL is nothing but it is Time to Leave.
        //          2. Basically will use this for remove the records in specific timeout.
        //          3. When we creating record itself will declare the time, after this time will delete the record.
        //          4. Using this for OTP, authentication tokens, temp notifications like senarios will use.
    }
    //
    if ('Amazon_S3') {
        //      1. What is S3?
        //          1. S3 means Simple Storage Service in AWS Cloud. 
        //          2. Use this we can store, retrieve the data at any time anywhere.
        //          2. Using this we can store the any type of data like files, audios, videos etc.
        //          3. It will very secure and even if anything fail in aws, we can't loose the data.
        //
        //      2. What is Bucket?
        //          1. Bucket means folder, each back we have maintain unique name.
        //          2. Inside bucket we can store multiple object, objects are nothing but file names.
        //          
        //      3. What is Pre-Signed URL?
        //          1. Pre-signed Url is temporary url, using this we can upload the files or data in s3.
        //          2. Using aws credentials, bucket Name, experience time will genarate the URL.
        //          3. Without AWS credentials exposing will fetch the data form s3.
        //          4. Event private objects also we can read using pre-signed url.
        //
        //      4. Storage Classes?
        //          1. In S3 we have different types of Storage classes are there. Based on our use will use it.
        //              1. Standard:
        //                      1. Coming to Standard class for daily use we can prefer this.
        //                      2. It will more cost compare to remaining.
        //
        //                      3. Using this for profile images, frequently used documents will store here.
        //              2. Standard AI:
        //                      1. Coming to standard AI, store files those not used daily.
        //                      2. When we required we need quick access.
        //                      3. Used of backup files, motherly reports.
        //
        //              3. Intelligent Tiering
        //                      1. S3 automatically move the files form frequently to unFrequently.
        //
        //              4. Glacier:
        //                      1. It will cheap, Old files will store, take 5 min time if we required
        //              5. Glacier Archive:
        //                      1. This files are not required. But keep store it for backup purpose.
    }
    //
    if ('SNS_SQS') {
        //      1. What is SNS? And Uses?
        //          1. SNS means simple notification service.
        //          2. Using this we can send the notifications from one publisher to multiple subscribers.
        //          3. Subscribers means lambda, sms, email, SQS etc.
        //          4. If any publisher send an event/message/topic, it will distribute to multiple subscribers.
        //          
        //      2. What is SQS? And Uses?
        //          1. SQS means Simple Queue Service.
        //          2. It will pull message/event to keep store it safely until the subscriber pull the messages.
        //          3. Once the subscriber pull it automatically it will delete form Queue.
        //          4. Instead of loosing the event or message we can keep it in queue for further processing.
        //
        //      4. What is DLQ? And Why use DLQ?
        //          1. DLQ means Dead Letter Queue.
        //          2. Using this will store the failure event/notifications instead of loosing them.
        //          3. Use this will do the further investigation.
        //      
        //      5. How Lambda publish an event to SNS?
        //          1. Before publish we have to create topic in SNS, and take the ARN for the Topic.
        //          2. We have to give the Publish permission to Lambda.
        //          3. And we have to maintain the ARN topic in environment variables instead of hardcode.
        //          4. Then use the publish method, we can publish the event/message or notification to the topic.
        //          5. Once the message push to SNS, sns automatically distribute the subscribers what we configured.
        //
    }
    //
    else {
        //      6. Scenario-Based Questions (Very Important)?
        //
        //          1. Your API was responding in 200ms earlier, now it takes 5 seconds. What will you do?
        //              1. First I will check the Cloud watch logs and metrics.
        //              2. Then I will check the issue is in 
        //                      - lambda execution, 
        //                      - database quires,
        //                      - External Api calls,
        //                      - Cold start
        //              3. Then I will find the root cause and fix the issue and recheck again.
        //          -------------------------------------------------------
        //
        //          2. Yesterday API received 1,000 requests/hour. Today it receives 100,000 requests/hour. What will you do?
        //              1. First I will check the cloud watch logs and metrics.
        //              2. Then i will verify the lambda is throttling, due to more requests.
        //              3. If needed, I will increase the concurrency and use SQS for buffer request.
        //          -------------------------------------------------------
        //
        //          2. How would you build a file upload System?
        //              Answer: API Gateway → Lambda → Generate Pre-Signed URL → S3.
        //
        //          3. How would process 1million orders asynchronously?
        //              Answer: API Gateway → Lambda → SQS → Worker Lambda → DynamoDB.
        //
        //          4. How would you send notifications to multiple systems?
        //              Answer: SNS Topic → Multiple subscribers (Email, Lambda, SQS).
        //
        //          5. How would you prevent lambda timeout issues?
        //              Answer: Use SQS, Step Functions, optimize code, increase memory.
        //
        //          6. How would you secure a serverless API?
        //              Answer: API Gateway + Cognito/JWT + IAM + WAF
    }
}
//----------------------------------------------------------------------------------------------------------------------------

if ('Project Overview') {
    // Project overview:
    //      1. IMS api platform is a NestJS-based microservices platform, it will provides APIs for various insurance & Money services.
    //      2. It contains different types of services like Portfolios, Customer Forms, Documents, Pay by Voucher, preference etc.
    //      3. We use a monoRepo architecture, with npm Workspaces and TurboRepo to manage multiple service's 
    //      and shared libraries in single repo.
    //      4. The services are developed using NestJS, Node.js, and TypeScript, and we use the Jest framework for unit testing.
    //      5. For deployment, we use GitHub for source code management and Jenkins for CI/CD automation.
    //      6. Once the code is pushed to GitHub, Jenkins triggers the pipeline and executes all the required steps 
    //      such as dependency installation, code validation, and unit test execution.
    //      7. After all validation, the build artifact is generated and published to Nexus Repository Manager.
    //      8. Then terraform will read the artifact file and store it in s3.
    //      9. Terraform use the artifact file and extract all required files, updates the AWS cloud infrastructure.
    //      10. In this way, the IMS platform is developed, tested, and deployed through an automated CI/CD process, 
    //      ensuring consistent and reliable releases.
    //
    // Architecture:
    //      1. We are using the microservice architecture with a monoRepo setUp.
    //      2. Each business requirement will implemented separate service , like Portfolios, preferences, document like that.
    //      3. And we maintain the shared code in common libraries inside the monoRepo.
    //      4. The request come through the API gateway layer, first it will go the controller.
    //      5. After routing and validation it will move to service layer for business logic execution.
    //      6. At finally interact with external systems if required.
    //      7. Like this The architecture help to maintain, scaling and reusability.
    //
    // Monorepo setup:
    //      1. In our project, we use a Monorepo architecture.
    //      2. Here multiple microservices and shared libraries are maintained within a single repo instead of multiple repo's.
    //      3. Using NPM Packages to manage dependencies across all services and TurboRepo to optimize build, testing.
    //      4. The setup divide into three parts:
    //          services: It contains all business related services.
    //          packages: It contains all shared libraries such as helper functions, common configuration etc.
    //          scripts: It contains automation and utility scripts.
    //      5. Like this the Monorepo setup will be there.
    //
    // NestJS services      
    // API flow
    // AWS deployment
    // SNS/SQS usage
    // DynamoDB design
    // Challenges faced
    // Migration from Tesco Bank to Tesco IMS
}
//----------------------------------------------------------------------------------------------------------------------------

if ('Serverless_Architecture') {
    //---> What is AWS Serverless? Advantages? DisAdvantages?
    //      1. AWS Serverless means cloud native architecture.
    //      2. Using this we don't need to manage any servers, we just focus on development and business logic.
    //      3. Remaining everything AWS will handle, like servers, Scaling, Operating system, infrastructure.
    //      4. Common Serverless Services are:
    //              1. AWS Lambda
    //              2. AWS Gateway
    //              3. DynamoDB
    //              4. SQS
    //              5. SNS
    //           
    //      4. Normally in traditional applications we have to takeover everything, like servers, memory, scaling everything.
    //      5. But in Serverless we don't bother about these all things.
    //      6. Cloud service handle everything.
    //
    //  Advantages:
    //      1. No Server maintenance.
    //      2. Pay per Use: How much we use that much we can pay, there is no coast for idle time.
    //      3. Automatic Scaling: It will automatic scaling based on Traffic.
    //      4. Faster development.
    //      5. High Availability.
    //      6. Event Driven Architecture: Easily Integrate SNS, SQS, S3 etc
    //
    //  DisAdvantages:
    //      1. Cold Start
    //      2. Execution Time
    //      3. Debugging
}

//----------------------------------------------------------------------------------------------------------------------------

if ('MicroServices') {
    // 1. What is MicroServices?
    //      1. Microservices is an architecture pattern.
    //      2. Using this we can segregate the large scale application into separate services.
    //      3. Each service can handle the different feature and will develop & deploy independently.
    //      4. For example E-commerce app, we can split into different services like
    //              1. User Service
    //              2. Product Service
    //              3. Order Service
    //              4. Payment Service
    //              5. Notification service
    //      5. And if we want we can use the different technology and develop the services.
    //      6. One service communicate to other service using API's or event driven architecture.
    //      7. Event driven architecture is best for communication, 
    //         because if one service down it will not impact to other service.
    //      8. In event-driven architecture, when one service publishes an event, 
    //         another service listens to that event and performs its task.
    //      9. If any service fails, we use a retry mechanism to automatically try again after some time.
    //      10. After several retries, still failing will move this event to Dead Letter Queue (DLQ) for later investigation.
    //      11. DLQ help use to store the failure event instead of loosing them.
    //      12. Some time based one the business requirement, we use the saga pattern. Instead of waiting will do the
    //          revert mechanism.
    //      13. Sega breaks the business workflow into multiple steps.
    // 		        1. If any step fails in the middle, we have to revert the previous steps
    // 		        2. So we can create the two function for each and every service
    // 			        1. One is main action
    // 			        2. One is for Undo action.
    // 		        3. If any thing fail in any service we can call undo function for previous services.
    // 		        4. This undo function is called as Compensation.
    // 		        5. We can use event or messages we can inform other services.
    // 		            Ex:
    // 			            1. Order Service → Create Order
    // 			            2. Payment Service → Deduct Amount
    // 			            3. Inventory Service → Reduce Stock          
    // 		        6. If Inventory fails, then:
    // 			        1. We call Payment Service’s refund API to give money back
    // 			        2. We call Order Service’s cancel API to cancel the order
    //
    //
    // 2. How do you handle Distributed Transactions?
}
//----------------------------------------------------------------------------------------------------------------------------

if ('System_Design') {

    // URL Shortener
    // --------------------------------------------------------
    //
    //--->  Notification Service:
    //
    //      1. First, I would understand the what types of notifications the system need to send, such as Email, SMS, mobile Push notifications.
    //      2. Then will create notification api, using this other applications can send notification request.
    //      3. Instead of sending notifications directly, will place the requests into the Queue. 
    //          It will help the system can handle large traffic, and if any service temporarily down we can't loose the request.
    //      4. And will maintain the notification templates instead of hardcode, once we got the request, based on type will 
    //          get the template and process it.
    //      4. Then separate work services process the queued messages and send them through the appropriate channel, 
    //          such as email, sms or push notifications.
    //      5. And will store the notification history in database, so we can track whether the notification was success or failure.
    //      6. If any notification fails will use the retry mechanism, after several retries still it's failing.
    //      7. Will use the DLQ, will store failed event, for further investigation.
    //      8. Also we provide the user preferences so user can select which notification they need.
    //      9. To avoid duplicate notification, will check each request process only once.
    //      10. Finally will monitor the system, to track failures, status and overall performance.
    //
    // --------------------------------------------------------
    //
    //---> Payment System
    //
    //      1. First, I would understand the requirement like users to make payment, payment status and handling failures and refunds.
    //      2. When user clicks the pay button, the payment request is sent to Payment service.
    //      3. Payment service validate the requests and send it to payment provider or bank for processing.
    //      4. Once the payment is completed, will store the payment status in database and send notification to user,
    //          whether it's success or failure.
    //      5. To handle the high traffic, will use the queue so payment processing will go smoothly, and we can't loose failed
    //          requests.
    //      6. And will handle the duplicate payments using the unique Transaction Id for every payment.
    //      7. If any external payment provider failed temporarily, will handle the retry mechanism, and maintain the proper logs
    //          for investigation and tracking purpose.
    //      8. Finally will monitor payment success rates, failures and response times.
    //
    // --------------------------------------------------------
    //
    //---> Order Management System
    //
    //      1. First, I would understand the requirement, the system should do the create order, track order, Update order status
    //          cancel order, Notify order.
    //      2. When user placed an order, 1st will check the inventory, the product is available or not, if yes will process,
    //          else will stop the order.
    //      3. If stock exist will process the payment, if payment success will place the order else not place order.
    //      4. After payment success will save the order details in db for tracking purpose.
    //      5. And will send notification to user.
    //      6. Based on the order status will update the status like : PLACE - PACKED - SHIPPED - OUT OF DELIVERY - DELIVERED.
    //      7. If customer cancel the order based on requirement will cancel, refund the amount and notify the user.
    //      8. And will handle the failures such as payments issues, notification issues.
    //
    // --------------------------------------------------------
    //
    // E-commerce Platform
    //      1. In E-commerce platform, will use the both synchronous & Event driven communication, because here Inventory &
    //          payment processing is both are synchronous.
    //      2. Without these we can process the order.
    //      3. When user click the Place-Order, we have to check the inventory, if stock available will process the payment.
    //      4. Once payment is done will create the order, and store the data in db.
    //      5. After order creation instead of sending notification directly, will use Event driven, will publish the event.
    //      6. So order service publish and event to SNS, SNS can copies event to all queues. Like
    //          - Payment Queue
    //          - Notification Queue
    //      7. Each service process independently. If anything fails do the retry and process them.
    //
    // --------------------------------------------------------
    //
    // File Upload Service (S3)
}
//----------------------------------------------------------------------------------------------------------------------------

if ('Third_party_Integration') {
    // 1. Have you worked on third-party integrations?
    //      1. Yes, In my current IMS project, we integrated external Tesco services using the external tesco url.
    //      2. NestJs HttpService is commonly used to communicate with external system.
    //      3. Will send the Bearer access tokens and custom headers, will retrieve the address information.
    //      4. And will handle the error responses, log requests using correlation id's.
    //      5. And transform the request before sending to the consumers.
    //      6. Same integration we can apply to other services like salesforce, pershing etc.

    // 2. How do you handle failures in third-party integrations?
    //      1. For external systems like Tesco api's, Salesforce, any payment providers, I have implemented retry mechanisms.
    //      2. And this retries are apply only specific error like 500 errors or timeout, connection failures like that.
    //      3. And also add structured logging, timeout configuration and circuit breaker patterns.
    //          
    //      Timeout:
    //          1. For example if any API normally response in 500ms.
    //          2. But suddenly it's took the 30sec.
    //          3. So instead of waiting to 30sec, will wait only 5sec then will return error. 
    //          4. This is called timeout configuration.
    //
    //      Retry:
    //          1. If any issue happen temporary. Temporary means network issue, connection failure, 500 etc.
    //          2. Instead of throwing error will use retry mechanism.
    //
    //      Circuit Breaker Pattern:
    //          1. If any external api completely down.
    //          2. So our api or application don't no what happen, it will keep on trying to get response.
    //          3. So it is bad user experience.
    //          4. To overcome this problem will use this pattern, after certain failures it will give error like
    //              the service unavailable.
    //          5. There are different states are there in circuit breaker
    //              1. Closed state: Normal mode will get the result
    //              2. Open state: Something is fail.
    //              3. Half Open state: Wait for sometime will get the response.

    //---> My UnderStanding way:
    //      1. Before Integration we have to get the details from the client or Vendor. like
    //          1. API Documentation
    //          2. Base URL
    //          3. Authentication details like
    //              * API Key
    //              * OAuth2.0
    //              * ClientID & Secret ID
    //          4. Request & Response Format
    //          5. And if we want transfer any file, we need to know the file transfer Mechanism
    //      2. Once we get these all details we can start the integration.
    //      3. Basically in Node.JS we can communicate external services through the REST API's.
    //      4. Using API KEY or OAuth token we can connect the services.
    //      5. Using API Key we can pass it under headers we can connect.
    //      6. Using OAuth, we can pass the clientID & SecretID along with baseURL we can get the token.
    //      7. Use this generated token we can communicate the third party services we can do the operations like
    //          Create | Updata | Delete like that.
    //      8. In my previous project I have used the HTTPService and done the integration and fetch the data from vendor.
}
//----------------------------------------------------------------------------------------------------------------------------

if('API_Standards'){
    // API Standards are set of Guidelines used to design secure and scalable apis.
    // There are different types of standards should we follow.
    //  1. Always used Resource based URL's. I mean use Nouns, not Verbs.
    //     ✅ /v1/customers/123
    //     ❌ /v1/getCustomer/123
    //
    //  2. Use the HTTP Methods: Like GET / POST / PUT / DELETE
    //  3. Always maintain the versioning: I mean APIs should be versioned like /v1/customer
    //  4. Follow the standard status code:
    //      1. 200 - oK
    //      2. 201 - Created
    //      3. 204 - No Content
    //      4. 400 - Bad Request
    //      5. 401 - Unauthorized
    //      6. 403 - Forbidden
    //      7. 404 - Not Found
    //      8. 500 - Internal Server Error
    //
    //  5. Request & Response Format: Usually use JSON.
    //  6. Coming to Security always send the request using HTTPS, because it will encrypted before transformation.
    //  7. Use the Authentication Token, should pass this in Header along with body.
    //  8. Always do the input validation, parameter validation.
    //  9. Provide the proper CORS configuration so it will allows trusted domains.
    //  10. Always maintain the proper documentation for API and Swagger.

}
