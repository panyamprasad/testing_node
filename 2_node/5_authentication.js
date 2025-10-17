// Authentication & Security
    // Authentication:
        // Authentication is process to identify the user identity and give the access to the api's.
    // Why it is?
        // Present interconnected world, api security is not an optional it is mandentory. there are multiple benfites like.
        // 1. Security Benefits:
            // Identity Verification: To verify the user identity.
            // Access Control: Restrict the API access to authorized users only.
            // Data Protection: Data security for the unauthorized users.
    
    // Authorization:
        // Authorization means what action user can perform. It means based on the user role we can provide the permissions.
        // Example: Admin can do the all actions (create, delete, update). But user can do the only view their profiles.

    // Difference between Authentication / Authorization..?
        // Athenticaiton is using for identify purpose, it means user identity.
        // Authorization is using for giving the permission, based on the user.
    //----------------------------------------------------------------------------------------

    // Password Security:
        // Password security is most important, and it is critical.
        // Never store the Plain passwords in the db. 
        // Before store using the hashing alogorithm like bcrypt or argon2 convert the password into irreversible string.
        // Note: // So we can't store the plain password, before stroing the passwords we should use the bcrypt or argon2. It will do the reverse-engineering.
    // Example:
    const bcrypt = require('bcrypt');
    async function test(){
        const convertPassword = await bcrypt.hash('MyPassword$123', 10);
        console.log('CovertedPass : ', convertPassword);
        const isMatch = await bcrypt.compare('MyPassword$123', convertPassword);
        console.log("Is Match : ", isMatch);
    }
    test();
//-------------------------------------------------------------
// Types of Authentications:
    // 1. Basic Authenticaiton:
            // Basic authentication sends userName and Password encoded in base64 on every request.
            // It is simple but not secure.
            // Only for simple api's, not for producation public api's.

    // 2. Session Based Authentication:
            // When user login the server creates a sessionID and stores the user details in db or memory.
            // Server gives this sessionID  to the browser as a cookie.
            // On every request, the brower should send this sessionID, and the server veriry this ID and identify the user.
            // Uses:
                // Tradional web api's (login, dashboard, admin panel)
                // When you control both frontend and backend and want simple and secure login.
    
    // 3. Token based Authentication:
            // After login, server creates the signed token (JWT), with user data.
            // This token have the user details like (userID, role).
            // Client store this token in localStorage or session storage
            // Every request client should send this token along with request body in headers.
            // Server should verify the user and give the response for the request.
            // Uses:
                // Used for microServices, API'S and React & Amgular.
            
    // 4. OAuth 2.0 Authentication:
            // It is a authorization framework, Using this we can access the third-party applicaiton form the service provider without user username & password.
            // Instend of sharing the user detailos we can get the permission for the application access and their resources.
            // The use login in google, facebook, github etc.

// ------------------------------------------------------------------
    // Common Interview Questions:

    // Difference between authentication & authorizations?
    // Ans:
            // Authenticaiton: Authentication verify the user identity.
            // Authorizations: Authorization means permissions, based on role should we provide the access.
    
    //  What is difference between Session / JWT tokens?
    // Ans:
            // Session token: When user logoin, server store the user data in db and creates the sessionID. And every request should we send this sessionId or cookie, server verify the id and find the user.
            // JWT token: After login the server creates the signed token with user data, it includes user ID or role. Every request should send this token in headers and server identify the user and give the response.
    
    // What is Oauth 2.0?
    // Ans:
            // OAuth 2.0 is useing to get the access for third-party providers like google, github. No need to send the userName and password. Applciation get the access token from the providers.
    
    // What is genaral approach to securing the login system?
        // HTTPS
        // Password security (bcrypt hasing)
        // JWT/Session
        // Input Validation
        // Helmet
    
    // How do you secure JWT tokens in Node.js?
        // Always sending the JWT's over https to keep them safe.
        // Always use the strong secret key's from environment variables.
        // Verify the token on every requst and use the refersh tokens or blacklisting for logout.