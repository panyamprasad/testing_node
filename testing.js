// --> AWS Lambda - Every Interview
// --> File Upload - Hitachi 1st Interview
// --> Performance - 70%
// --> Security - Every Interview
// --> IMS Project understand in Local how soap will work, how will convert json to xml and xml to json, 
//      how it will secure should we using any token? - Recently
//
// --> How the dependency will install in cloud when we create the lambda directly in cloud.
//      1. When we create a Lambda directly in AWS Console, external dependencies are not install automatically.
//      2. We need to package dependencies along with lambda or we have to maintain lambda layers.
//      3. When we execute the lambda it will loads the those package dependencies.

// import { uniq } from "lodash";

// --> How to upload the file in s3? What is Process?

// --> What are features are there in ES6 Modules
//      1. Arrow Functions
//      2. Destructuring 
//      3. REST/ Spread Operators ...
//      4. Optional Chaining ?
//      5. Nullish ??
//
// ------------------------------------------------------------------------------------
// Gateway:
//      1. Throttling vs Rate Limiting?
//      
// TypeScript advanced concepts

// Challenging


// Promises Example:

//ES6Modules:
//Template  values

// Str = "memory"
// o/p : {m: 2, e:1, o:1 r:1, y:1}

// input: [1,2,3,[4,5], 6];
// Output: [1,2,3,4,5,6];

// In the event loop fs will execute at the last... right... how can we execute it before?
// Why do you want to join HCL?
// Promises example of chaining process?

// ✅ Q9: How to handle errors in NestJS?
//      1. In Nestjs, exceptions are usually handled using built-in HTTP Exceptions such as.
//      2. BadRequestException, UnauthorizedException, ForBiddenException and NotfoundException.
//      3. These all are we can use in root level error handling.
//      4. For Centralized error handling, we create the GlobalException Handler it will implemented by ExceptionFilter.
//      5. using this we can catch the Unhandled exceptions and return error responses.
//      6. And we also use the DTO'S, class validator it will automatically throw the errors for invalid requests.