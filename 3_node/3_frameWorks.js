// Frameworks
    // Frameworks provide structure, organization and common utilities for building web applications and web api's.
    // It is help developer for build application faster.
    // Advantages:
        // 1. Productivity
        // 2. Standardization
        // 3. Community
        // 4. Security
        // 5. Performance
    // There are different types of frameworks are there.
    // But in NOdeJs ExpressJS is popular framework.

// ExpressJs
    // ExpressJs is simple and powerful framework in NodeJs
    // It is help us to build web servers and api's.
    // It gives us routing and middleware to build web application in a faster and cleaner way with out using the plain http methods.

// Why Choose Express.js?
    // I'd choose express.js because it's simple, fast and makes building apps or web api's mach easier with routing, middleware, and great npm module support.
    or
    // simple & fast -- Easier than raw nodeJs http.
    // Routing -- Handle multiple URL's.
    // Middleware -- Use the auth, logging and error handling.
    // Flexible -- Use in small apps and big apps.
    // EcoSystem -- It has the huge Npm packages.

// Middleware:
//      1. Middleware is the function in expressJs, It will run between the request and response.
//      2. It will modify the request, run the logic (Like authentication or logging) and 
//         decide whether should we continue or stop.
//      3. The middleware pattern is (req, res, next) where next moves to the next step.
//
// Types of middleware:
//      1. Application Middleware:
//          - Using this common functionality like logging and authentication.
//
//      2. Route Middleware:
//          - Using this if we required only specific routes.
//          - Using only specific API's for validation & authentication.
//
//      3. Error Handling Middleware:
//          - Using this to handle the errors, and provide the structured format.
//          - Basically using this in centralized mechanism.
//
//      4. Third-party Middleware:
//          - These are the in-build middlewares.
//          - Used for common tasks such as CORS, Logging, File Upload and security.
//          - different types of : Helmet(), morgon(), cors(). 
//
//Ex:1 Application Middleware:
app.use((req, res, next) => {
    console.log('Request validation');

    next();
})

// Ex:2 Route Level Middleware:
function auth(req, res, next) {
    console.log("User Authentication");

    next();
}

app.get('/users', (auth, req, res) => {
    res.send('userData');
})

// Ex:3 Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err);

    res.status(500, () =>{
        message: 'Something went wrong'
    })
})

//
