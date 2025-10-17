        function orderProduct(){
            console.log("OrderProduct");
            delay(6);
            console.log('Payment done');
            delay(3);
            console.log('OrderSubmitted');
        }

//---> 1. The above function is the question? Need to implement the delay logic:

        function delay(val){
            if(val == 6){
                setTimeout(() => {
                console.log('Payment');
                }, 6);
            }else{
                    setTimeout(() => {
                    console.log('OrderDone');
                }, 3)
            }
        };

        orderProduct();

//      Ans: // The above code I am getting the output like below:

            // OrderProduct
            // Payment done
            // OrderSubmitted
            // OrderDone
            // Payment

//      But here I payment should done before the orderDone right... Why it's happening like this

//      Correct Ans:
        async function orderProduct(){
            console.log("OrderProduct");
            await delay(6, 'Payment');
            console.log('Payment done');
            await delay(3, 'Submitted');
            console.log('OrderSubmitted');
        }

        function delay(val, message){
            return new Promise(resolve =>{
                setTimeout(() => {
                    console.log(message);
                    resolve();
                }, val);
            });
        };
        orderProduct();
//---------------------------------------------------------------------

//---> 2. What is the output of the below code?
        var x = 10;
        function test(){
            console.log('x --->' + x);
            var x = 20;
        }

        test();

//      Ans:
//      1. I said 20... But it's printed undefind.
//      2. Because the local variables (x=20) hide the global variable (x=10). That's way it's print the undefined before instalization.
//      3. That’s why the function doesn’t use the global x = 10.
//      4. It uses its own x, which is hoisted but not yet assigned — so it’s undefined.
//      ----------------------------------------------------------------

//---> 3. Can we change the const value? And why it will support for object and array?
            const obj = {
                name: 'prasad'
            };
//      Ans:
//          1. We can't reassign the const value. But we can modify the obj properties because object is the mutable.
//          2. Inside the object we can add nee attribute, we can delete the attribute and we can update attribute value like beow.
                obj.age = 28;            // ✅ add new property
                obj.name = 'Ravi';       // ✅ modify existing property
                delete obj.age;          // ✅ delete property

                console.log(obj); // { name: 'Ravi' }
//          3. ❌ You cannot reassign the whole object:
                obj = { city: 'Hyderabad' }; // ❌ TypeError: Assignment to constant variable

//          4. array also we can do the change and add and delete the attributes but can't reassign the entire array.
                const arr = [1,2,3];
                arr.push(4);       // ✅ Add new element
                arr[0] = 10;       // ✅ Update existing element
                arr.pop();         // ✅ Remove last element

                console.log(arr);  // [10, 2, 3]
            
//      ------------------------------------------------------------------

//---> 4. I have the one obj inside the multiple key value pairs are coming... but inside the function I want to access the vales and assign the variable.. How will find the datatype for that in JS.
//     Ans:
//          1. Use typeof to find the basic type.
//          2. Use Array.isArray() to check if it’s an array.
//          3. Use destructuring (const { key } = obj) to extract values easily inside functions.
            const user = {
                name: "Prasad",
                age: 30,
                isAdmin: true,
                skills: ["NodeJS", "React"],
                address: { city: "Hyderabad", pin: 500001 }
            };

            function getUserData(user){
                const {name, age, isAdmin, skills, address} = user;

                if(typeof name !== String){
                    console.log('name is not a string');
                }else{
                    console.log('firstName :' + name);
                }
                if(Array.isArray(skills)){
                    let userSkills = skills;
                    console.log('userSkills :' + userSkills);
                }
                if(typeof address !== 'object' || Array.isArray(address) || address === null){
                    console.log(address);
                }
            }
//  --------------------------------------------------------------------------------------------------
// ---> 5. I have one array.. I want to use map and multiple the each element.. but instend of using map I want to add customMap and do this logic inside the custom map and along with this it should support for remaing logics like addi sub, divi and concatination what we want. How you will do the logic for this.

//    Ans: 
            Array.prototype.customMap = function (operation, value) {
            const result = [];
            for (let i = 0; i < this.length; i++) {
                switch (operation) {
                case 'add':
                    result.push(this[i] + value);
                    break;
                case 'sub':
                    result.push(this[i] - value);
                    break;
                case 'mul':
                    result.push(this[i] * value);
                    break;
                case 'div':
                    result.push(this[i] / value);
                    break;
                case 'concat':
                    result.push(String(this[i]) + String(value));
                    break;
                default:
                    result.push(this[i]); // if no operation, return same
                }
            }
            return result;
            };

            const arr = [1, 2, 3, 4];

            console.log(arr.customMap('add', 2));     // [3, 4, 5, 6]
            console.log(arr.customMap('sub', 1));     // [0, 1, 2, 3]
            console.log(arr.customMap('mul', 3));     // [3, 6, 9, 12]
            console.log(arr.customMap('div', 2));     // [0.5, 1, 1.5, 2]
            console.log(arr.customMap('concat', 'A')); // ["1A", "2A", "3A", "4A"]
//----------------------------------------------------------------------------------

// ---> If I have the one function, but I dind't pass any aruguments, but inside I have the setTimeout callback function inside I am print the name... How the name propertiy will be come? How should we execute this with out functin aruguments.
// Ans:     Using call():
//          1. It will invokes the lambda immediatly, we can pass the aruguments comma saparated values.
            const person = { name: "Prasad" };

            function greet() {
                setTimeout(() =>{
                console.log("Hello " + this.name);
                }, 1000); // Hello Prasad after 1s
            
            }

            greet.call(person); // Hello Prasad
            //---------------------------------
//          Using apply():
//          1. It will work similar to call but pass the aruguments as an array.
            function test2(geetinng){
                setTimeout(() => {
                    console.log(geetinng + ' '+ this.name);
                })
            }
            test2.apply(person, ['Hello']);
            //---------------------------------
//          Uisng Bind()
//          1. using this we can create new function.
//          2. It will not call the function immediatly.
            

//------------------------------------------------------------------
// Project Explanation:
	// 🧩 Project Overview – “Victory Capital Management (VCM)”

	// 	1. VCM is a financial platform for US-based users to manage mutual funds, Victory funds, and education-related loans.
	// 	2. The system is built using a microservices architecture, so each module (account creation, transaction, document upload, etc.) works independently.
	// 	3. We used Node.js, JavaScript, AWS services (Lambda, API Gateway, DynamoDB, S3, SNS/SQS, Cognito) for backend development.

	// ⚙️ My Roles & Responsibilities

	// 	1. Developed REST APIs using Node.js and AWS Lambda, exposed via API Gateway.
	// 	**2. Worked mainly on Mutual Funds Service — implemented account creation, updates, and integration with third-party systems like Pershing / NETx.
	// 	**3. Designed and handled data storage in DynamoDB, and implemented S3 upload for user documents.
	// 	**4. Used SNS/SQS for asynchronous message handling (e.g., notifications, background jobs).
	// 	**5. Integrated AWS Cognito for user authentication and authorization.
	// 	**6. Implemented error handling, retry mechanisms, and idempotency — to avoid duplicate account creation.
	// 	**7. Wrote unit test cases using Mocha & Chai, and followed code quality checks using SonarQube.
	// 	**8. Participated in production issue analysis, fixed timeout and retry logic, and improved performance and reliability.
	// 	**9. Involved in CI/CD pipelines for automated deployment and code validation.
	// 	**10. Worked closely with the Java & TypeScript teams to integrate cross-language microservices.


