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