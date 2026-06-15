// 1. Middleware
//      1. Middleware is the function, it will run before request reaches the controller.
//      2. Middleware modify the request, validate something, log data and stop request if anything goes wrong.
//      3. Middleware is commonly used to handle the common code, instead of writing duplicate code. Maintain the authentication/ logging in one place.

// 2. Guards
//      1. Guards are used to decide whether the request is allowed or not. It means it's validate the request.
//      2. Guards are used to implement authentication and authorization logic.
//      3. It will run before controller, verify the condition, and decide allows or block the request.
//      4. Mainly used security, authentication and clean code.
//      5. Types of Guards:
//          a. Global Guard --> Applies to all api's.
//          b. Controller Guard --> Applies to one controller.
//          c. Method Guard --> Applies to one api.

// 3. Pipes
//      1. Pipes are used to validate and transform the incoming data before it reaches the controller.
//      2. Pipes check if data is correct and convert it into the right format.
//      3. Pipes perform mainly two things
//          1. Validation -- Email format, request fields.
//          2. Transformation -- Convert data format. Ex: "25" --> 25, String --> number
//      👉 What happens:
//              Request → /users/10
//              "10"(string)
//              Pipe converts → 10(number)

// 4. Interceptors
//      1. Interceptor is used to execute logic before and after a controller method. Mainly it will used for logging, response transformation, and performance monitoring.
//      2. For example, In our project, we used a interceptor to log incoming request and outgoing responses.
//      3. It will capture details like API URL, request body and execution time.
//      4. And also along with this we are add's security headers to the response.
//      5. It will helped us monitor API performance and maintain consistent logging without adding code in every controller.

// 5. Exception Filters
