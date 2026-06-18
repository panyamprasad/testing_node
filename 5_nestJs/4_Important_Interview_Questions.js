// ✅ Q1: NestJS vs Express?
//          Both NestJS and Express are popular frameworks for building backend applications in Node.js. But they have different approaches and use cases.
//  Express:
//      1. Express is a minimal and flexible Node.js framework, here we can write everything manually.
//      2. It doesn't provide any structure, we should build everything from scratch.
//      3. Everything is mixed in expressJs, routing, business logic.
//      4. Using this small projects, simple api.
//  NestJs:
//      1. It is a structured framework, compare to express it will give ready architecture.
//      2. It has the proper structure. Like Controller, service and modules.
//      3. Controller handles the request and maintain the routing.
//      4. Service handles the all business related logic.
//      5. So NestJs is use large application.
//.  --------------------------------------------------------------------------------------------------

// ✅ Q2: Why use NestJS?
//     1. NestJs provides a structured and organized framework for building backend applications, which helps in maintaining clean and scalable code.
//     2. It has built-in support for TypeScript, which provides type safety and better tooling for development.
//     3. NestJs has a powerful dependency injection system that promotes modularity and testability.
//     4. It comes with built-in features like validation, authentication, logging, and more, which can save development time.
//     5. NestJs is designed to be highly extensible and can be easily integrated with other libraries and frameworks, making it suitable for a variety of use cases.
//   ---------------------------------------------------------------------------------------------------

// ✅ Q3: Difference between Controller & Service?
//     Controller:
//         1. A Controller is a component, it will take the client requests and give the response back to them.
//         2. Controller handle the http requests like GET/POST/PUR/DELETE.
//         3. It's doesn't maintain the business logic.
//         4. This is entry point to the application or specific feature.
//     Service:
//         1. A service is a class, it contain the business logic of application.
//         2. And all business logic will kept in service, for example multiple api's need same logic we can reuse the logic. That's way we separate the business logic and controller.
//   ----------------------------------------------------------------------------------------------------

// ✅ Q4: What is DTO?
//     1. DTO stands for Data Transfer Object, it is an object that defines the structure of data that is sent over the network.
//     2. In NestJs, DTOs are used to define the shape of data that is sent in requests and responses.
//     3. DTOs help in validating and transforming the incoming data before it reaches the controller.
//     4. It also helps in maintaining a clear contract between the client and server, making it easier to understand and maintain the codebase.
//     Ex:
export class CreateUserDto {
    name: string;
    email: string;
    password: string;
}
//   ----------------------------------------------------------------------------------------------------

// ✅ Q5: What is Guard vs Middleware?
//     Guard:
//         1. Guards are used to decide whether the request is allowed or not. It means it's validate the request.
//         2. Guards are used to implement authentication and authorization logic.
//         3. It will run before controller, verify the condition, and decide allows or block the request.
//         4. Mainly used security, authentication and clean code.
//         5. Types of Guards:
//             a. Global Guard --> Applies to all api's.
//             b. Controller Guard --> Applies to one controller.
//             c. Method Guard --> Applies to one api.
//     Middleware:
//         1. Middleware is the function, it will run before request reaches the controller.
//         2. Middleware modify the request, validate something, log data and stop request if anything goes wrong.
//         3. Middleware is commonly used to handle the common code, instead of writing duplicate code. Maintain the authentication/ logging in one place.
//   ----------------------------------------------------------------------------------------------------

// ✅ Q6: What is Interceptor vs Middleware?
//     Interceptor:
//         1. Interceptor is used to execute logic before and after a controller method.
//         2. Mainly it will used for logging, response transformation, and performance monitoring.
//         3. For example, In our project, we used a interceptor to log incoming request and outgoing responses.
//         4. It will capture details like API URL, request body and execution time.
//.    Middleware:
//         1. Middleware is the function, it will run before request reaches the controller.
//         2. Middleware modify the request, validate something, log data and stop request if anything goes wrong.
//         3. Middleware is commonly used to handle the common code, instead of writing duplicate code. Maintain the authentication/ logging in one place.
//   ----------------------------------------------------------------------------------------------------

// ✅ Q7: What is Dependency Injection advantage?
//     1. Dependency Injection is a design pattern, where a class receives its dependencies from outside instead of creating them itself.
//     2. In nestJs Dependency Injection allows us to inject services into controllers or other services using constructor injection. 
//     3. It helps in writing loosely coupled, testable and maintainable code.
//     Ex:
export class UserService {
    constructor(private db: DatabaseService) { }

    getUsers() {
        return this.db.getUsers();
    }
}
//     4. Advantages of Dependency Injection:
//         a. Loose Coupling: Classes are not tightly coupled to their dependencies, making it easier to change or replace dependencies without affecting the class.
//         b. Testability: It allows for easier unit testing by enabling the use of mock dependencies.
//         c. Maintainability: It promotes separation of concerns and makes the codebase easier to maintain and understand.
//         d. Reusability: Dependencies can be reused across different parts of the application, reducing code duplication.
//   ----------------------------------------------------------------------------------------------------

// ✅ Q8: Explain request lifecycle
//      1. When a request is made to a NestJS application, it goes through several stages before reaching the controller and generating a response.
//      2. The request lifecycle in NestJS can be broken down into the following stages:
//          1. Middleware: The request first passes through any registered middleware functions, which can modify the request or perform actions like logging or authentication.
//          2. Guards: After middleware, the request is processed by guards, which determine whether the request should be allowed to proceed based on certain conditions (e.g., authentication, roles).
//          3. Pipes: If the request is allowed by guards, it then goes through pipes, which can validate and transform the incoming data before it reaches the controller.
//          4. Interceptors: After pipes, interceptors can execute logic before and after the controller method is called, such as logging or modifying the response.
//          5. Controller: Finally, the request reaches the controller, where the appropriate method is executed to handle the request and generate a response.
//      3. This structured lifecycle allows for better organization and separation of concerns in a NestJS application, making it easier to manage and maintain code.
//   ----------------------------------------------------------------------------------------------------

// ✅ Q9: How to handle errors in NestJS?
//      1. In NestJS, errors can be handled using exception filters, which allow us to catch and handle exceptions thrown during the request lifecycle.
//      2. Exception filters can be used to catch specific types of exceptions and return custom responses to the client.
//      3. We can create custom exception filters by implementing the `ExceptionFilter` interface and using the `@Catch()` decorator to specify which exceptions to catch.
//      4. Exception filters can be applied globally, at the controller level, or at the method level, depending on the scope of error handling needed.
//      5. This allows for centralized error handling and consistent responses across the application.
//      Ex:
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}

// ✅ Q10: How to implement authentication and authorization in NestJS?