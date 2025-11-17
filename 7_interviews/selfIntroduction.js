// 1. This is Prasad, I have total 8.5 years of experience as a software developer, mainly working on javaScript, typeScript and nodeJs. And also have the experience in flutter for mobile app development.
// 2. Throughout my career, I've been involved in designing and developing backend services, building RESTFul api's, and integrating the third-party api's like salesforce, and pershing etc. And I have the hands-on experience in databases like sql.
// 3. And I always write clean, maintainable and readable code.
// 4. In my recent role, mainly I focus on the refactoring the old code, and writing the unit testcases for improve the sonarQue qualitygate pass for deployment, and helping team members to solve the issues and epic discussions. And I enjoy problem solving, collaborating with my team.
// 5. And I am participating the production release to ensure and quickly addressing the issues if any thing occur.
// 6. Going forward, I am looking for opportunities where I can take ownership of end-to-end solutions and contribute the challenging projects.

//--------------------------------------------------------------------------------

//---> How you use TypeScript in Node.js projects?
    // 1. We setup the project with typeScript compiler (tsc) and configure it from tsConfig.json file.
    // 2. We organize the project into layers (like controllers, services, models). 
    // 3. We define the interfaces and types for request and response objects, database models and third-party integrations.
    // 4. Typescript helps with type safety, handle runtime errors, and improve maintainability.
    // 5. And also using the ESLint and Prettier for consistent coding style.

//--------------------------------------------------------------------------------

//---> How you are maintain the coding standards and structure?
    // 1. Following the naming conventions, modularize the code, and keep the functions small and meaningful and readable.
    // 2. Using the tools like ESlint, SonarQube for maintain the coding standards.
    // 3. I actively participate in code reviews, and maintain the quality code.
    // 4. Writing the unit testcases for improving the quality of code and maintain the code coverage for quality gate pass.
    // 5. Maintain the version controlling using the git hub.
    // 6. Refactoring the code using the standards and remove the duplicate code and always maintain the unique code.
    // 7. Maintain the documentation for project.

//--------------------------------------------------------------------------------

//---> How to maintain security, maintenance and storage?
    // Security:
        // Always follow the input validation, and using the secure authentication using the JWT tokens for sensitive data.
    // Maintenance:
        // Always keep the code clean, moduler and maintain the documented, so it's easy to update, and I monitor the logs and fix issues quickly.
    // Storage:
        // Using proper database design, encrypt the important information, keep on maintain backups and using the caching like Redis for faster access.
    
//--------------------------------------------------------------------------------

//---> How are you using the authentication and token storage, and how you are use the refresh token and expire time?
    // 1. When a user logs the server verify the user details and generate the JWT token with user details.
    // 2. It will provide to client and client store this in safe place and secure storage, and send this in each and every request from Header section.
    // 3. So server verify the token and give the necessary permissions and response.
    // 4. So similar along with access token server sent refresh token also.
    // 5. The access token usually expire with in 15 to 20 min time period, but refresh token will take max 7 to 30 days time for expire.
    // 6. When the access token expire the client send the refresh token to get the new access token.
    // 7. Due to this the session will continue.

//--------------------------------------------------------------------------------

//---> How are you doing the deployment using the ci-cd? and what are the tools you are using?
    // 1. Using the deployment we follow the ci-cd automatic pipeline process.
    // 2. When we push the code to gitHub(git, gitLab or bitbucket) it's trigger the pipeline.
    // 3. The pipeline install the dependencies, run the unit testcases and  check the quality of code(SonarQube/ ESLint).
    // 4. Once everything is passes, the code is build and processes into a docker image.
    // 5. This is deployed to server or cloud platforms.
    // 6. Post deployment will test and check the logs and ensure everything is fine.
            // Tools use like: 
            //                  ci-cd pipeline: github/bitbucket
            //                  CodeQuality: SonarQube or ESLint
            //                  Container: Kubernetes or Docker
            //                  Cloud: AWS, Azure like...
//--------------------------------------------------------------------------------

//---> Can you describe your experience with Node.js and AWS services in your recent projects?
    // 1. In my recent role as senior developer at hyniva, I have worked with nodeJs and develop the scalable microservices and RESTFUL API's.
    // 2. I also used AWS services like Lambda, API Gateway and DynamoDB to build serverless applications, this helped improve the scalability, performance and reduce the cost and development is faster.
    // 3. For example in my project with Victory Capital Management, I developed APIs using NodeJs and typescript, following the coding standards and implemented serverless architecture with Lambda, cloudFormation and APIGateway.
    // 4. And worked in dynamoDB for storing and retrieving data, which is provide the good performance and scalability.
    // 5. Overall my hands-on experience with node and aws has helped me to solve the problems and deliver the solutions.
//--------------------------------------------------------------------------------

//---> How have you applied TypeScript in your development process, particularly with Angular?
    // I have used the typeScript in angular develop the front end applications, which is provide the typeSafety, interfaces and classes, which makes the code more structured and easier to maintain.
    // In Angular I have used typeScript for develop the components, services and models, and it will help to catch the errors at compile time instead of runtime, it also made the code more readable and maintainable and understanding way.
//--------------------------------------------------------------------------------

//---> What is your experience with Docker and Kubernetes in your projects?\
    // I have used Docker to containerize the applications, which help us to deploy the code in different environments without any dependency issues. I have created Docker images for NodeJS services for development and production.

    // Kubernetes are using to deploying and managing these containers and load balancing and monitoring. It will used to handle the high traffic smoothly.
//-------------------------------------------------------------------------------

//---> Can you discuss your approach to unit testing, particularly with tools like Jest?
    // 1. In my previous project I didn't use the Jest, we are using the mocha and Chai framework to develop the testcases.
    // 2. Jest also similar to Mocha and chai framework.
    // 3. Using the mocha and chai we have developing the testcases it will cover the both normal and edge cases.
    // 4. And we are using the stub and mocks for external calls like dynamodb or internal third party services. It will help us to catch the errors.

//--------------------------------------------------------------------------------

//---> How would you design a serverless REST API using nodeJs?
    // 1. I will use the API Gateway to handle the http requests and routing.
    // 2. Each route will call the serverless function what we written in nodeJs.
    // 3. The function will connect to the database like dynamodb or firebase to store the data.
    // 4. I will use the JWT or cognito for security purpose.
    // 5. And I will add logging and error handling and monitoring to track the response and errors.

//-----------------------------------------------------------------------------------------------------
