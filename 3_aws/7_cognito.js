// Amazon Cognito (User Pool + Groups)
    // Amazon Cognito:
            // 1. Amazon cognito is a user authentication and authorization service in aws.
            // 2. It helps us to manager signUp, signIn and access control for your app users -- without building all that from scratch.
            // 3. It have two parts.
    
        // Coginto User Pools:
            // Coginto user pool means it will manage user directory for web and mobile applications.
            // It will handle user registration, Login, forgot Password, Email/phone verification and MFA.
        // Coginto Groups:
            // Coginto groups are available inside the user pool.
            // Used this organize users by roles or permissions (like admin, manager, hr).
            // We can assign IAM permission to groups.
    
    // Why use Cognito:
        // Aws managed everything, no need to build our own login system.
        // And it is secure, means handle MFA, token-based, encryption.
        // Easy to integrate aws services using IAM roles.
    
    // When use Cognito:
        // When we need sign-up and sign-in functionality.
        // When we need secure authentication.
        // When we need role based permission.
        // When we want to avoid managing passwords.

    // Interview point Ans: Amazon Coginto is the fully managed user identity service. It has the user poll to store the user and authenticate users, and group give the role based permissions. And it has the secure JWT tokens to login.

    // -----------------------------------------------------------------------------------

    // Interview Questions:
    
    // What is amazon coginto?
        // 1. Coginto is aws service.
        // 2. It will provide access to the users like signUp, singIn and access control for web and mobile applications.
        // 3. And it will remove the user access to handle their own authentication system.
    
    // what is User pool in coginto?
        // 1. It is a user directory in cognito.
        // 2. Used to register, authenticate and manage app users.
    
    // What is user groups in cognito?
        // 1. Groups are live inside the user pool.
        // 2. It will provide the permissions to user.

    // How does Cognito authenticate users?
        // 1. Users login with credentials --> Cognito verify them --> and Provide the JWT token --> Backend verify this token and grant the access.

    // When would you use coginto in your project?
        // If we want to secure, managed and scalable way login, and user roles without handle custom auth system.
    
    // What is difference between User Pool and Identity Pool?
        // User Pool: 
                // 1. It is user directory.  It will handle user registrations, authentications and user account recovery.
                // 1. And It's provide the signUp and signIn features.
        
        // Identity Pool:
                // 1. It will provide temporary aws credentials.
                // 2. It will provide the aws services access like S3, dynamoDB.



