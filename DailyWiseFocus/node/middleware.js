
// 1. What is the Middeleware?
    // 1. Middleware is the function, it will work between the request and response.
    // 2. It will modify the request and respone and run the code, and stop the execution and handle the errors.
    // 3. Think of it, it is security point. Once verification is done it will allow inside.

    // Real use: Logging, authentication, validation, error handling
//------------------------------------------------------------------------------------------

// 2. What happend if you don't use next() in middleware?
    // 1. The request will stop there, 
    // 2. Express won't continue the next process.
    // 3. Always we should call next().
//------------------------------------------------------------------------------------------

// 3. What are different types of middlewares in Express.js?
    // There are differnt types are there
    // 1. Application middleware: It will apply globally use the app.use(). It will use authentication, logging.
    // 2. Router-level: Used only specific route file.
    // 3. Build-in: In build exprss provide some middlewares - express.json(). express.static()...
    // 4. Third-party: Using npm we can install these middlewares - cors, helmet etc..
    // 5. Error-Handling: Using this handling the errors: We can pass 4 paraments for this (err, req, res, next).
//------------------------------------------------------------------------------------------

// 4. What is difference between app.get(), app.use()?
    // 1. app.use(): It will runs for every http methods. Like get/ post/ put/ delete etc...
    // 2. app.get(): It will run only specific methods.
//------------------------------------------------------------------------------------------

// 5. How can you organize middlewares in large applicaitons?
    // 1. Create the folder like middleware
    // 2. Keep it all the middlewaeres in this folder like authentication/logging/errorHandling etc..
    // 3. We can import and use it where we need it.

    // Real world use: Code clean, maintain and modular
//------------------------------------------------------------------------------------------

// 6. What are the some common third-party middlewares?
    // !. There are different types of third party middlewaers are there...
    // 2. Like cors, helmet, morgon, cookie-parser etc..
    // 3. But we didn't used this in my previouse project.. Mostly we use the custom middlewares only.
//------------------------------------------------------------------------------------------

// 7. How would you secure an api using middleware?
    // Use a combination of middleware for
    // 1. authentication
    // 2. Security headers
    // 3. CORS control...
//-------------------------------------------------------------------------------------------

// 8. When they ask “How have you used middleware in your project?”, say something like:
    
    // In our nodeJs project mostly we are used the custom middlewares like authentication, request validation, error handling. Each and every middleware we can keep it separate file and keep it in one folder, and use it wherever we need it in project.
    // So it is more modularization and reuseable.
    // And code clean and maintian...
    
//-------------------------------------------------------------------------------------------