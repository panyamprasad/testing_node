// ---> 1. What is NestJS?
//      1. Nestjs is a framework that gives structure to backend applications.
//      2. Instead of writing everything manually, nestJs provide ready concepts like modules, controllers and services to make code clear and scalable.
//      3. Use nestJs to build large and scalable backend applications with clean structure.
//      4. Advantages:
//          a. Structured Code: Uses modules, services, controllers.
//          b. Dependency Injection: Dependency Injection means if a class need something like objects it will get it from outside, instead of creating them.
//          c. Typescript support: Type safety, better debugging.
//          d. Build-in features: Validation, Authentication(Guards), Logging etc.
//          e. Team friendly: Everyone follows the same structure.

// ---> 2. What are Modules?
//      1. In NestJs Modules are used to organize the application into different functional parts.
//      2. Each module contain different feature and controllers and services.
//      3. We have different modules are there.
//          a. Root module: It is main module file of application, and it is entry point of app.
//          b. Feature module: Feature module is nothing but it is specific feature.
//          c. Shared module: Shared module means common file and utilities. Like logging, authentication, database etc.
//      4. Module is nothing but it is a combination of Controller, services, and Dto's.

// ---> 3. What is a Controller?
//      1. A Controller is a component, it will take the client requests and give the response back to them.
//      2. Controller handle the http requests like GET/POST/PUR/DELETE.
//      3. It's doesn't maintain the business logic.
//      4. This is entry point to the application or specific feature.

//---> 4. What is a Service (Provider)?
//     1. A service is a class, it contain the business logic of application.
//     2. And all business logic will kept in service, for example multiple api's need same logic we can reuse the logic. That's way we separate the business logic and controller.

//---> 5. What is Dependency Injection (VERY IMPORTANT)?
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

//---> 6. What is difference between Nest & Express?
//     Express:
//          1. A simple, minimal NodeJs framework, here we should build everything.
//          2. We should build everything from scratch
//          3. Everything is mixed in expressJs, routing, business logic.
//          4. Using this small projects, simple api.
//     NestJs:
//          1. It is a structured framework, compare to express it will give ready architecture.
//          2. It has the proper structure. Like Controller, service and modules.
//          3. Controller handles the request and maintain the routing.
//          4. Service handles the all business related logic.
//          5. So NestJs is use large application.


