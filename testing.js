// AWS Lambda
// Error Handing
//      1. Global Exception Handling is Centralized mechanism for handling errors across entire application.
//      2. Instead of handling every exception separately, we create one Global Handler that catches exceptions.
//      3. It will Log the error, determine the appropriate status code, and return error response.
//      4. In NestJs generally using this Global Exception Filter.

// File Upload:
// Performance
// Security
//
// AWS Serverless & Serverless_Framework?
//      1. AWS Serverless means cloud native architecture.
//      2. Using this we don't need manage any services and servers.
//      3. We just focus on application development and business logic.
//      4. Remaining AWS handles scaling, availability and infrastructure management.
// 
// What is serverless? Why to use? Advantages ? DisAdvantages?
//      1. Normally, in a traditional application we have manage each and everything like.
//      2. Client --> Server --> Application
//      3. And we have to Manage, Servers -> OperatingSystem -> Memory -> Scaling everything we have manage.
//      4. But coming to serverless we don't need to manager services and servers.
//      5. Just we can focus on our business requirements and development part.
//      6. Cloud Service can handle everything.
//
//  Advantages:
//      1. No Server Maintenance.
//      2. Automatic Scaling.
//      3. Pay for what we use.
//      4. Faster development
//      5. High availability.
//  DisAdvantages:
//      1. Cold Start
//      2. Execution Limit
//      3. Debugging.
//
// How the dependency will install in cloud when we create the lambda directly in cloud.
//      1. When we create a Lambda directly in AWS Console, external dependencies are not install automatically.
//      2. We need to package dependencies along with lambda or we have to maintain lambda layers.
//      3. When we execute the lambda it will loads the those package dependencies.