// Node.js Modules and npm
// Modules:
    // A module is a reusable piece of code, that we can export and import anywhere in the project.
    // There are two types of modules are in nodeJs.
// What are the different types of modules in Node.js?
    // There are two types of modules are in nodeJs.
    // 1. Core Modules: Core modules are the modules that are build in modules in nodeJs. We can use them without installing any additional packages.. Example: http, fs, path, url, util, events etc.
    // 2. User Modules: User modules are created by user. We can create our own modules and use them in our application where we need.
        //example: custom modules, third party modules etc.
    // ------------------------------------------------------------------------------
// How to create the custom Modules/ User Modules?
    // We can create a custom module in node.js by creating a new file with respective variables, function and classes. we can export and import any where in the project.
    // Example
        function test(){
            return 'Hello';
        }
        module.exports = test;
        // main.js
        const test = require('./test');
    // -------------------------------------------------------------------------------

// Module Systems:
    // In node Js there are two types of module systems are there.
    // 1. Common Js -- Common Js is default module 
    // 2. ES6 Modules -- It is modern java script standard.
    
//How do CommonJS and ES modules differ in Node.js?
    // Common Js is older node js module system it will use the .require and export.module for import and export purpose. But in ES6 is the latest module system we can use the import/export keywords.
    // And commonJs do the synchronous loading, Es Module is do the asynchronous loading.
    // It will work everywhere in NodeJs, ES Module will work on Node v12+
    // File extension .js, in Es file extension is .js and .mjs with type: module in package.json
    // ------------------------------------------------------------------------------