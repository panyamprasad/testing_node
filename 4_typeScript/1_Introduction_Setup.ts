// 🟢 1. Introduction & Setup

//---> 1. What is TypeScript
//          1. TypeScript is the superSet of JavaScript.
//          2. Using typeScript we can add the static typing.
//          3. Using static typing we can find the errors at compile time only.
//          4. So Typescript helps catch errors during development time.
//          5. Ex:
let age: number = 50;
// -----------------------------
//
//---> 2. JavaScript vs TypeScript
//          1. JavaScript:
//              A. JavaScript is the scripting language, used for web development.
//              B. It is dynamically typed.
//              C. Using JS, Errors are found at run time.
//              D. No need to define the DataType.
//              E. Easy to learn and it is better for small projects.
//              Why:
//                  - Simple & Quick to write.
//                  - Best for small applications
//                  - Supports all the browsers.
//
//          2. TypeScript:
//              A. TypeScript is superset of JavaScript, developed by Microsoft.
//              B. It is Statically typed.
//              C. Found the errors at development time.
//              D. It will support for type definitions.
//              E. Better for enterprise applications.
//              Why:
//                  - It will catch the error at development time.
//                  - Get the best suggestions in IDEs like VSCode
//                  - Best for large codebases and easier to modify.
//
//          3. So JavaScript = Flexibility... TypeScript = Safety + Scalability.
// -----------------------------
//
//---> 3. Compilation (tsc)
//          1. TSC is the typeScript compiler file.
//          2. It will check TS code and check the type safety and errors.
//          3. And it will convert the TS file to JS file.
//          4. Because we can't run the ts file directly in browser and NodeJs.
//          5. Using the below command we can install the typeScript.
//              - npm install -g typescript
//-----------------------------
//
//---> 4. What is tsconfig.json?
//          1. tsconfig.json file is the configuration file for the TypeScript compiler.
//          2. Inside this file we can define the how TS file should be compile into JS.
//          3. And inside this file we can declare what files should include, JS versions, rules everything will declare.
//          4. And where to put Output also will declare.