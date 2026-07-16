// 🔹 Flow(remember this line)
// Middleware → Guards → Interceptors → Pipes → Controller → Service → Response

// 👉 Official order:

// Middleware → Guards → Interceptors → Pipes → Controller → Interceptors → Filters


// 1. In NestJs Request flow have the multiple layers.
// 2. First middleware process the request. It means logging the api's, and adding the headers.
// 3. Then Guards check whether the request is valid or not, it means authorized or not. It is a helper library.
// 4. After that Interceptors runs before controller logic, it will watch the request or modifies before execution.
// 5. After this will use the pipes to validate and transform the input data.
// 6. Then the controller handles the request and verify the http request and calls the service. The routing everything handles the controller.
// 7. After that the interceptor is modify the response. 
// 8. Finally, exception filters handle any errors and send the response.

// Currently we are build the monorepo architecture, we didn't using any middleware's here but using Guards and interceptors.

//----------------------

// --> When we got the request form the client, we have the different layers to execute and get the response form the api.
// --> Middleware: Middleware is the function, using this we can validate and modify the request, if anything went wrong it /   will stop the process.
// ---> Guards: Using guards decide whether the request is allowed or not. It means authorized or not.
// ---> Interceptor: Interceptor is used to execute the logic before and after controller. Mainly use this logging and transformation.
// ---> Pipes: Using Pipes we can validate the input request before reaching the controller.
// ---> Controller: Using controller we can handle the https requests, based on our request we can find the router and process the logic.
// ---> Services: Using services we can build the businesses logic, once the request routing came form the controller we can run the business logic and get hte response form the db or any other services, get back to the controller.

//-----------------------------

// --> Client: When we got the request from the client, there are different layers are there to process the request.
// --> Middleware: 1st Using middleware, will check the request, logging the request, if required modify the request.
// --> Guard: 2nd Guard will verify the request, whether the request is valid or not, like Authentication, role or permissions.
// --> Interceptor (before): Interceptor mainly do the logging and data transformation before and after controller call.
// --> Pipe: Using the pipe will validate the incoming request, for example request body,any format wrong, do transformation.
// --> Controller: Controller take the request and handle the all https methods, verify the request and routing the request to service.
// --> Service: In Service will do all business logic, and get the response.
// --> Controller: Controller receive the response whether it's success or fail giving back to client.
// --> Interceptor (after)
// --> Response
