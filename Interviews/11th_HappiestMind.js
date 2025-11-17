// 1. What is Event Loop
//  Ex: What is Output:
            console.log('Start');
            
            setTimeout(() => {
                console.log("setTimeout");
            }, 0);
            
            setImmediate(() => {
                console.log("setImmediate");
            });
            
            process.nextTick(() => {
                console.log("nextTick");
            });
            
            console.log("End");
            
// 2. What is Var & Let difference?
// Ex: What is Output:
            var x = 21;
            var testFn = function () {
                console.log(x);//
                var x = 20;
            };
            console.log(testFn ())// Undefined

// 3. What is Hoisting?
// 4. What is Output of below code snippets and Why?
            for (var i = 0; i < 3; i++) {
                setTimeout(() => console.log(i), 1000);
            }
            // Output: 3,3,3
//          - Here Var is the function scoped, 
//          - That means the same i variable is shared for all iterations.
//          - Here setTimeout callback run after 1 sec, in the meantime the loop will finish, the value become 3.
//          - So all three callbacks print 3,3,3.

            for (let j = 0; j < 3; j++) {
                setTimeout(() => console.log(j), 1000);
            }
            // Output: 0,1,2
//          - Here let is the blocked scope.
//          - So each iteration will get it's own value.
//          - So it will print the 0,1,2.

// 5. What is the output of below code?
            const fs = require('fs');
 
            console.log("Start");
            fs.readFile(__filename, () => {
                console.log("File Read");
            
                setTimeout(() => {
                    console.log("setTimeout inside I/O");
                }, 0);
                
                setImmediate(() => {
                    console.log("setImmediate inside I/O");
                });
                
                process.nextTick(() => {
                    console.log("nextTick inside I/O");
                });
            });
            
            setTimeout(() => {
                console.log("setTimeout outside I/O");
            }, 0);
            
            setImmediate(() => {
                console.log("setImmediate outside I/O");
            });
            
            process.nextTick(() => {
                console.log("nextTick outside I/O");
            });
            console.log("End");
    
// 6. What is limitations of Lambda?
// 7. What architecture is best suitable for NodeJS?
// 8. What is difference between ProvisioningConcurrency and advanceConcurrency
// 9. How to handle the multiple requests in single lambda? It means 1 millions request came the how?
// 10. What is Batch? Why it will use? When should will use?
