// Functions:
// Normal Function
function test() {
    return console.log("Hello world");
}

test();

// Arrow function
const arrowTest = () => console.log("Hello this is arrow function");

arrowTest();

// What is difference between normal and arrow function?
// 1. In normal functions this is dynamic, it means it depends on how the function is called.
// 2. In Arrow function this is lexically bound, it means it depends on surrounding code where the function is defined.
// 3. In Normal we have the own arguments object.
// 4. In arrow function we don't have the own arguments it's coming from the parent scope.
// 5. Normal function can be used as constructor.
// 6. Arrow function can't be used as constructor.

//Example:
const obj = {
    value: 100,
    normalFunc: function () {
        console.log(this.value);
    },
    arrowFunc: () => {
        console.log(this.value);
    }
};
obj.normalFunc(); // 100
obj.arrowFunc(); // undefined

//Example 2:
// Arrow function doesn't have the own this.
// It will take the this from the parent scopt.
// Example:
const obj1 = {
    value: 100,
    function() {
        const arrow = () => {
            console.log('Arrow Function : ', this.value);
        }
        arrow();
    }
};
obj1.function(); // Arrow Function : 100

// ------------------------------------------------------------------------------

// ---> When to use Normal Functions & Arrow functions?
//  ✅ Normal Function → Object methods, class methods, this, arguments, hoisting.

//  ✅ Arrow Function → map(), filter(), reduce(), subscribe(), setTimeout(), callbacks, and when you want the parent scope's this.

//      Normal Functions:
//          1. If we want to own this, we can use the Normal functions.
//          2. If we need arguments we use the normal functions.
//          3. We want to define objects, classes will use normal functions.
//          4. And the normal functions are support hoisting.
//          Ex:
            const employee = {
                name: 'Prasad',

                displayName: function() {
                    console.log(this.name);
                }
            };
            employee.displayName();

//      Arrow Functions:
//          1. Arrow functions are using for shorter syntax.
//          2. This will come parent scope.
//          3. Use this we can write callbacks, filter, setTimeout ans subscribe functions.

            Ex:1 
                    const add = (a, b) => a+b;

            Ex:2
                    const obj1 = {
                        val : 100,
                        function(){
                            const arrow = () => {
                                console.log(this.val);
                            }
                            arrow();
                        }
                    }
                    obj1.function();

            
