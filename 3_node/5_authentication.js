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
    // 1. Basic Authentication:
            // Basic authentication sends userName and Password encoded in base64 on every request.
            // It is simple but not secure.
            // Only for simple api's, not for production public api's.

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
            // It is a authorization framework, Using this we can access the third-party application form the service provider without user username & password.
            // Instead of sharing the user details we can get the permission for the application access and their resources.
            // The use login in google, facebook, github etc.

// ------------------------------------------------------------------
// Common Interview Questions:

//---> How are you using the authentication and token storage, and how you are use the refresh token and expire time?
//      1. When a user logs the server verify the user details and generate the JWT token with user details.
//      2. It will provide to client and client store this in safe place and secure storage.
//      3. And send this in each and every request from Header section.
//      3. So server verify the token and give the necessary permissions and response.
//      4. So similar along with access token server sent refresh token also.
//      5. The access token usually expire with in 15 to 20 min time period.
//      6. But refresh token will take max 7 to 30 days time for expire.
//      7. When the access token expire the client use the refresh token and get the new access token.
//      8. Due to this the session will continue.
// ------------------------------------------------------------------

//---> What is the OAuth2?
//      1. OAuth2 is authorization framework, it will allow user to log in using trusted provider.
//      2. Like Google, Microsoft, Azure etc. Instead of create and manage passwords in every application.
// ------------------------------------------------------------------

//---> How do you implement OAuth2 in NestJS?
//      1. First we register application with an identity provider such as Google, Azure, Cognito or AuthO.
//      2. We configure the Passport strategy in NestJs.
//      3. When user click the login, they are redirect the Identity provider.
//      4. After successful authentication, provider return the authorization code.
//      5. Using this exchanged for tokens.
//      6. NestJs retrieves the user details, optionally genarate the JWT.
//      7. And use JWT guards to protect APIs.
// ------------------------------------------------------------------

//---> Why use Oauth2 instead of JWT?
//      1. JWT only token format.
//      2. OAuth2 provide complete secure login process using trusted identity like google, azure etc.
//      3. It will provide the single sign-on and MFA support.
// ------------------------------------------------------------------

//---> Difference between authentication & authorizations?
//      1. Authentication: Authentication verify the user identity.
//      2. Authorizations: Authorization means permissions, based on role should we provide the access.
// ------------------------------------------------------------------

//---> What is difference between Session / JWT tokens?
//      1. Session token: When user login, server store the user data in db and creates the sessionID. 
//      2. And every request should we send this sessionId or cookie, server verify the id and find the user.
//      3. JWT token: After login the server creates the signed token with user data, it includes user ID or role. 
//      4. Every request should send this token in headers and server identify the user and give the response.
// ------------------------------------------------------------------

//---> What is Oauth 2.0?
//      1. OAuth 2.0 is using to get the access for third-party providers like google, github. 
//      2. No need to send the userName and password. Application get the access token from the providers.
// ------------------------------------------------------------------

//---> What is general approach to securing the login system?
//      1. HTTPS
//      2. Password security (bcrypt hashing)
//      3. JWT/Session
//      4. Input Validation
//      5. Helmet
// ------------------------------------------------------------------

//---> How do you secure JWT tokens in Node.js?
//      1. Always sending the JWT's over https to keep them safe.
//      2. Always use the strong secret key's from environment variables.
//      3. Verify the token on every request and use the refresh tokens or blacklisting for logout.
// ------------------------------------------------------------------