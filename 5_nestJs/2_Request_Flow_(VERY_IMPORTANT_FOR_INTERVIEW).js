// 🔹 Flow(remember this line)
// Middleware → Guards → Interceptors → Pipes → Controller → Service → Response

// 👉 Official order:

// Middleware → Guards → Interceptors → Pipes → Controller → Interceptors → Filters


// --> When we get the request from the client, we have the different layers to execute and get the response from the api's..
// --> Coming the Layers the 1st one is:
// --> Middleware: Middleware is the function, using this we can validate the request, if required modify the request. If anything went wrong stop the process.
// --> Guards: Guards are noting but it is a security, whether we got the valid request or not, means it will check permission like authentication & Authorization.
// --> Interceptor: Interceptor is used to execute the logic before and after controller. Mainly use this for logging and transformation.
// --> Pipes: Using pipes we can validate the request body. Like Email validation, data validation like that. So use this we can convert the data types also.
// --> Controller: Once everything is done in above the request came to controller, controller decide the http request and move to the business logic.
// --> Services: Inside the service we can do the all business related logic, get the data from DB or any other services.
// --> Once we got the data using interceptor will log the data.
// --> Finally will get back the response to Client.