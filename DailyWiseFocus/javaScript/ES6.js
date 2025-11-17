// --Destructuring Assignment--
// Destructuring is the special functionality in javaScript.
// It will allows us to unpack the values from arrays and objects and assign to the variables.
// tow types of destructuring are there:
// 1. Array Destructuring
// 2. Object Destructuring
//-------------------------------------------------------------------------------------------------
// 1. Array Destructuring
// Ex:
    const array = ["prasad", "panyam", 26];
    // Noramal we can assign like below:
        const firstName = array[0];
        const lastName = array[1];
        const age = array[2];
    // Using destructuring we can assign like below:
        const [fname, lname, ageValue] = array;
        console.log(fname, lname, ageValue); // prasad panyam 26
    // We can skip the value also:
        const [fName, , ageV] = array;
        console.log(fName, ageV); // prasad 26
    // We can assign the default values also:
        const [first, last, age1, country = "India"] = array;
        console.log(first, last, age1, country); // prasad panyam 26 India
    // We can use the spread operator also:
        const [fN, lN, ...rest] = array;
        console.log(fN, lN, rest); // prasad panyam [26]
    // We can swap the values also:
        let a = 5;
        let b = 10;
        console.log('Before swap :', a, b);
        [a, b] = [b, a];
        console.log('After swap :', a, b); // Before swap : 5 10 After swap : 10 5
//-------------------------------------------------------------------------------------------------
// 2. Object Destructuring
// Ex:
    const person = {
        name: "Prasad",
        age: 36,
        city: "Hyderabad"
    }
    const {name, age: personAge, city} = person;
    console.log(name, personAge, city); // Prasad 36 Hyderabad
//-------------------------------------------------------------------------------------------------
// -- Questions--
//🧩 Q1. Default + Renaming
        //Write a function that takes an object like this:
        const emp = { firstName: 'Ravi', location: 'Pune' };
        // Ans: Ravi works at Pune
        // But if location is missing, print:
        // Ravi works at Unknow
        // 🧠 Hint: Use default + renaming in parameters ({ location: city = 'Unknown' }).

        function printName(emp){
            const { firstName, location: city = 'Unknown' } = emp;
            console.log(`${firstName} works at ${city}`);
        }

// 🧩 Q2. Nested Destructuring
        // You’ll get this data:
        // const project = {
        //   title: 'AI Platform',
        //   team: {
        //     lead: { name: 'Kiran', exp: 6 }
        //   }
        // };
        // Write a function printLead() that extracts the lead’s name and exp from the nested object and prints:
        // Kiran has 6 years of experience
        // 🧠 Hint: Destructure inside parameters up to team.lead.

// 🧩 Q3. Array of Objects
        // You’ll get:
        // const users = [
        //   { name: 'Amit', role: 'Admin' },
        //   { name: 'Ravi', role: 'User' }
        // ];

        // Write a function showSecondUser() that prints:

        // Second User: Ravi (User)

        // 🧠 Hint: Destructure the 2nd object from the array in function parameters.

// 🧩 Q4. Rest Operator in Parameters
        // You’ll get:
        // const emp = { id: 101, name: 'John', dept: 'IT', city: 'Hyderabad' };

        // Write a function printEmp() that prints:

        // Name: John
        // Other Details: { id:101, dept:'IT', city:'Hyderabad' }
        // 🧠 Hint: Use { name, ...rest } in function parameters.

// 🧩 Q5. Function Returning Object (Destructure Return)
        // You’ll get:

        // function getEmployee() {
        //   return {
        //     id: 201,
        //     name: 'Anita',
        //     skills: { primary: 'React', secondary: 'Node' }
        //   };
        // }

        // Destructure the returned object directly to print:

        // Anita works on React

        // 🧠 Hint: Use nested destructuring on function call return.
//-------------------------------------------------------------------------------------------------
// -- Spread Operator--
// Spread operator is used to expand the individual elements from the array or objects.
// It is represented by three dots(...).
// We can use the spread operator in the following scenarios:
// 1. Copying the array
// 2. Merging the arrays
// 3. Copying the objects
// 4. Merging the objects
// 5. Spread in function arguments
//-------------------------------------------------------------------------------------------------
// 1. Copying the array
// Ex:
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
    const copyArr = [...arr1, ...arr2];
    console.log(copyArr); // [1,2,3,4,5,6]
//-------------------------------------------------------------------------------------------------
// 2. Merging the arrays
// Ex:
    const mergedArray = [...arr1, ...arr2, 7, 8, 9];
    console.log(mergedArray); // [1,2,3,4,5,6,7,8,9]
//-------------------------------------------------------------------------------------------------
// 3. Copying the objects
// Ex:
    const obj1 = {a: 1, b: 2};
    const obj2 = {c: 3, d: 4};
    const copyObj = {...obj1, ...obj2};
    console.log(copyObj); // {a:1, b:2, c:3, d:4}
//-------------------------------------------------------------------------------------------------
// 4. Merging the objects
// Ex:
    const mergedObj = {...obj1, ...obj2, e: 5, f: 6};
    console.log(mergedObj); // {a:1, b:2, c:3, d:4, e:5, f:6}
//-------------------------------------------------------------------------------------------------
// 5. Spread in function arguments
// Ex:
    function sum(x, y, z){
        return x + y + z;
    }
    const numbers = [1, 2, 3];
    console.log(sum(...numbers)); // 6
//-------------------------------------------------------------------------------------------------
// -- Questions--
//🧩 Q1. Copy and Update Array
        // You’ll get:
        // const colors = ['red', 'green', 'blue'];
        // Create a copy of this array and add 'yellow' at the end. Print the new array.
        // 🧠 Hint: Use spread operator to copy and add an element.
        // Ans:
            const colors = ['red', 'green', 'blue'];
            const newColor = [...colors, 'yellow'];
            console.log(newColor); // ['red', 'green', 'blue', 'yellow']
//🧩 Q2. Merge and Update Objects
        // You’ll get:
        // const user = { name: 'Sita', age: 25 };
        // const address = { city: 'Mumbai', country: 'India' };
        // Merge these two objects into a new object and add a new property 'pin' with value 400001.
        // Print the new object.
        // 🧠 Hint: Use spread operator to merge and add a new property.
        // Ans:
            const user = { name: 'sita', age: 25}
            const address = { city: 'Mumbai', country: 'India'};
            const newUser =m { ...user, ...address, pin:400001};
            console.log(newUser); // { name: 'Sita', age: 25, city: 'Mumbai', country: 'India', pin: 400001 }
//🧩 Q3. Function Arguments
        // You’ll get:
        // const nums = [10, 20, 30];
        // Write a function multiply(x, y, z) that returns the product of three numbers.
        // Ans:
             function multiply(x,y,z){
                return x*y*z;
             }
             const nums = [10,20,30];
             console.log(multiply(...nums)); // 6000
//-------------------------------------------------------------------------------------------------
// -- Rest Operator--
// Rest operator is used to collect the multiple elements and condense them into a single element.
// It is represented by three dots(...).
// We can use the rest operator in the following scenarios:
// 1. Function Parameters
// 2. Array Destructuring
// 3. Object Destructuring
//-------------------------------------------------------------------------------------------------
// 1. Function Parameters
// Ex:
    function add(...args){
        return args.reduce((sum, curr) => sum + curr, 0);
    }
    console.log(add(1,2,3)); // 6
    console.log(add(1,2,3,4,5)); // 15
//-------------------------------------------------------------------------------------------------
// 2. Array Destructuring
// Ex:
    const [first, second, ...rest] = [1,2,3,4,5];
    console.log(first, second, rest); // 1 2 [3,4,5]
//-------------------------------------------------------------------------------------------------
// 3. Object Destructuring
// Ex:
    const {a, b, ...restObj} = {a:1, b:2, c:3, d:4};
    console.log(a, b, restObj); // 1 2 {c:3, d:4}
//-------------------------------------------------------------------------------------------------
// -- Questions--
//🧩 Q1. Sum of Numbers
        // Write a function calculateSum() that takes any number of numeric arguments and returns their sum.
        // Ans:
            function sumofNumbers(...num){
                return num.reduce((a,b) => a + b), 0);
            }
            console.log(sumofNumbers(1,2,3)); // 6
            console.log(sumofNumbers(5,10,15,20)); // 50
//🧩 Q2. Array Destructuring with Rest
        // You’ll get:
        // const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
        // Destructure the first two fruits into variables and collect the rest into an array. Print all.
        // Ans:
            const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
            const [fruit1, fruit2, ...otherFruits] = fruits;
            console.log(fruit1);
            console.log(fruit2);
            console.log(otherFruits);
            // apple
            // banana
            // ['orange', 'grape', 'mango']
//🧩 Q3. Object Destructuring with Rest
        // You’ll get:
        // const book = { title: 'JavaScript Basics', author: 'John Doe', year: 2020, publisher: 'Tech Books' };
        // Destructure title and author into variables and collect the rest of the properties into another object. Print all.
        // Ans:
            const book = { title: 'JavaScript Basics', author: 'John Doe', year: 2020, publisher: 'Tech Books' };
            const { title, author, ...rest } = book;
            console.log(title);
            console.log(author);
            console.log(rest);
            // JavaScript Basics
            // John Doe
            // { year: 2020, publisher: 'Tech Books' }
//-------------------------------------------------------------------------------------------------
// -- Arrow Functions--
// Arrow functions are latest format in javaScript.
// It is short syntax of writing the functions.
// it doesn't have the own this, it means it will depends on the function defined.
// In arrow functions don't have the default aruguments, it will come from parent scope.
//-------------------------------------------------------------------------------------------------
// Ex:
    // Normal function 
            function test(arg1, arg2){
                return arg1 + arg2;
            }
            console.log(test(5,10)); // 15
    // Arrow function
            const test2 = (arg1, arg2) => arg1 + arg2;
            console.log(test2(5,10)); // 15
    // If there is only one argument we can skip the paranthesis also.
            const square = num => num * num;
            console.log(square(5)); // 25
    // If there is no argument we need to pass empty paranthesis.
            const greet = () => console.log('Hello World');
            greet(); // Hello World
    // If there is multiple lines of code we need to use the curly braces and return statement.
            const multiply = (a, b) => {
                const result = a * b;
                return result;
            }
            console.log(multiply(5,10)); // 50
//-------------------------------------------------------------------------------------------------
// -- Questions--
//🧩 Q1. Convert to Arrow Function
        // Convert this function to an arrow function:
        // function greet(name) {
        //   return `Hello, ${name}!`;
        // }
        // Ans:
            const greet1 = name => `Hello, ${name}!`;
            console.log(greet1('Prasad')); // Hello, Prasad!
//🧩 Q2. Arrow Function with Default Parameter
            const greet2 = (name = 'Guest') => `Hello, ${name}!`;
            console.log(greet2()); // Hello, Guest!
            console.log(greet2('John')); // Hello, John!    