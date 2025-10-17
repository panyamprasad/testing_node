// Frameworks
    // Frameworks provide structure, organization and common utilties for building web applcationns and web api's.
    // It is help developer for build applicaiton faster.
    // Advantages:
        // 1. Productivity
        // 2. Standarization
        // 3. Community
        // 4. Security
        // 5. Performance
    // There are different types of frameworks are there.
    // But in NOdeJs ExpressJS is popular framework.

// ExpressJs
    // ExpressJs is simple and powerfull framework in NodeJs
    // It is help us to build web servers and api's.
    // It gives us routing and middleware to build web applicaiton in a faster and cleaner way with out using the plain http methods.

// Why Choose Express.js?
    // I'd choose express.js because it's simple, fast and makes building apps or web api's mach easier with routing, middleware, and great npm module support.
    or
    // simple & fast -- Easier than raw nodeJs http.
    // Routing -- Handle multiple URL's.
    // Middleware -- Use the auth, logging and error handling.
    // Flexible -- Use in small apps and big apps.
    // EcoSystem -- It has the huge Npm packages.

// Middleware
    // Middleware is the funcion in expressJs, It will run inbetween the request and response.
    // It will modify the request, run the logic (Like authentication or logging) and dicide whether should we continue or stop.
    // The middleware pattern is (req, res, next) where next moves to the next step.
    
        // Types of middleware
            // 1. Build-in middleware - Express have several build-in middleware function to handle web appliacion tasks.
                    // express.json()
                    // express.static() etc
            // 2. Error-handling - Error Hnadling will difine with four aruguments(err, req, res, next)
                    // Mainly use this to handle the catch block errors.
            // 3. Thrid-party middleware - These are installed form Npm package. Use this for CORS or logging related things.
                    // Ex: Morgon, cors etc
            // 4. Custom middleware - User can create own middleware for authenticaiton and logging purpose.

    // Another:
        // Middleware is nothing but it is reuseale piece of code or function. It will work between request and response, it will modify the request and response.

// Real time senarios: Want to show the error message if any one field is miss and want to create the middlewwaer.

    // 1. Middleware it main entry point before going to the main logic.
    // 2. So If we get a request from user we can verify the required fields are avilable or not.. for that purpose..\
    // 3. We can create a middleware like below:
            function customMiddleware(req, res, next){
                const requiredFields = ['name', 'email', 'phone'];
                const missing = requiredFields.filter(field => !req.body[field]);

                if(missing.length > 0){

                }else{
                    next();
                }
            }
    // 4. Use the above middleware where ever we need in the business fucntionality we can validate the fields and throew the error..
    // 5. if everything is avilable we go with next() process.