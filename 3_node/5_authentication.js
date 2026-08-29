// Authentication & Security
    // Authentication:
        // Authentication is process to identify the user identity and give the access to the api's.
    // Why it is?
        // Present interconnected world, api security is not an optional it is mandatory. there are multiple benefits like.
        // 1. Security Benefits:
            // Identity Verification: To verify the user identity.
            // Access Control: Restrict the API access to authorized users only.
            // Data Protection: Data security for the unauthorized users.
    
    // Authorization:
        // Authorization means what action user can perform. It means based on the user role we can provide the permissions.
        // Example: Admin can do the all actions (create, delete, update). But user can do the only view their profiles.

    // Difference between Authentication / Authorization..?
        // Authentication is using for identify purpose, it means user identity.
        // Authorization is using for giving the permission, based on the user.
    //----------------------------------------------------------------------------------------

    // Password Security:
        // Password security is most important, and it is critical.
        // Never store the Plain passwords in the db. 
        // Before store using the hashing algorithm like bcrypt or argon2 convert the password into irreversible string.
        // Note: // So we can't store the plain password, before storing the passwords we should use the bcrypt or argon2. It will do the reverse-engineering.
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
            // On every request, the browser should send this sessionID, and the server verify this ID and identify the user.
            // Uses:
                // Traditional web api's (login, dashboard, admin panel)
                // When you control both frontend and backend and want simple and secure login.
    
    // 3. Token based Authentication:
            // After login, server creates the signed token (JWT), with user data.
            // This token have the user details like (userID, role).
            // Client store this token in localStorage or session storage
            // Every request client should send this token along with request body in headers.
            // Server should verify the user and give the response for the request.
            // Uses:
                // Used for microServices, API'S and React & Angular.
            
    // 4. OAuth 2.0 Authentication:
            // OAuth 2.0 is the authorization framework,
            // It will used in two senarios:
        // External API Integration - Salesforce Integration, Pershing like that
            // Here first we have to genarate the accessToken using this Client Credentials.
            // Then we use the token we can access the external api services.
            
        // User Login through the trusted providers. Like Azure, microsoft or google.
            // It will allow users to login from Trusted providers like Google, Azure, microsoft like that.
            // Using this we can access the third-party application without sharing username & password.
            // Instead of sharing the user details we can get the permission for the application access and their resources.

// ------------------------------------------------------------------
    // Common Interview Questions:

    // Difference between authentication & authorizations?
    // Ans:
            // Authentication: Authentication verify the user identity.
            // Authorizations: Authorization means permissions, based on role should we provide the access.
    
    //-------------------------------------------------------------

    //  What is difference between Session / JWT tokens?
    // Ans:
            // Session token: When user login, server store the user data in db and creates the sessionID. And every request should we send this sessionId or cookie, server verify the id and find the user.
            // JWT token: After login the server creates the signed token with user data, it includes user ID or role. Every request should send this token in headers and server identify the user and give the response.
    
    //-------------------------------------------------------------
    
    // What is Oauth 2.0?
    // Ans:
            // OAuth 2.0 is using to get the access for third-party providers like google, github. No need to send the userName and password. Application get the access token from the providers.
    
    //-------------------------------------------------------------

    // What is general approach to securing the login system?
        // HTTPS
        // Password security (bcrypt hashing)
        // JWT/Session
        // Input Validation
        // Helmet
    
    //-------------------------------------------------------------

    // How do you secure JWT tokens in Node.js?
        // Always sending the JWT's over https to keep them safe.
        // Always use the strong secret key's from environment variables.
        // Verify the token on every request and use the refresh tokens or blacklisting for logout.

    //-------------------------------------------------------------

    // API Security Best Partices?
        // For API Security, will follow different types of security layers.
        // First We have to use the HTTPs for sending the data. Because it will encrypted the data during the transmission.
        // Second we have to use the JWT authentication and authorization, because it will allow only trusted users.
        // Next always do the proper CORS configuration, because it will allows only trusted domains.
        // Next we have to do the input validation.
        // Like this we can do the api Security.

    //-------------------------------------------------------------

    // What is different between HTTP & HTTPS?
        // Using HTTPs it will send the data as plain text format, everyone can access the user data or sensitive data. Like Username & Password.
        // But Using HTTPS it will encrypted the data during the transmission. So HTTPS is more secure because attackers can't access the data≥
