//---> Overview of your current project?
//---> Asked file upload process? And Validation of during the add thd file data in dynamoDB?
//---> Event Loop?
//---> Optimization process?
//          1. For Optimization code first I have to add proper error handling and response validation.
//          2. Handling the timeout management, to avoid the hanging requests.
//          3. For Production level will use the retry logic for temporary failures.
//          4. Use the caching for frequently used data.
//          5. Optimize the database query and use the pagination.
//          6. Like this will optimize the process.
//
//---> API workflow?
//---> Promise.nextTick(), setTimeout() and setImmediate() priority?
//---> Cpu Intensive task how will handle?
//---> What are the Index are there in DynamoDB? how it will work? difference?
//---> Ecommarce application flow?
//---> Deployment process?
//---> Where will store secret credentials?
//---> How you implemented authentication & authorization in your project?
//  "In my current project, we implemented Authentication and Authorization using JWT tokens and Role-Based Access Control (RBAC)."

// Authentication:
//      User logs in using username/email and password.
//      Passwords are stored in encrypted format using hashing (bcrypt).
//      During login, we validate user credentials against the database.
//      If credentials are valid, our authentication service generates a JWT access token.
//      The token contains user information like userId, roles, and permissions.
//      The client sends this token in the Authorization header for every API request.
//      We use JWT Guards/Middleware to validate the token before allowing access to protected APIs.

// Authorization:
//      After authentication, we check what the user is allowed to do.
//      We implemented Role-Based Access Control (RBAC).
//      Different roles such as Admin, Manager, and User have different permissions.
//      NestJS Guards verify the user's role before accessing specific endpoints.