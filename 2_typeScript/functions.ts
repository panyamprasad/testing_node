// Functions: 
        // Functions in TS are blocks of reuseable code, defined to perform specific tasks, it will work similar to JS functions.
        // In TS there are different type of functions declarations are there.

        // If which function didn't return anything it will called as the void type.
            function apple(){}
        
        // Type Annotations:
            // If we assign any type when we declare the function it's should return that type only otherwise it's give error, it's called as type Annotations.
            let a = 55;
            let b = "Prasad"
            function add(): number{
                return a;
            }
        
        // Function Expression:
            // If any varable can assign the any anonamous function it's called as a function expression.

            const addingNumbers = function(c:string, d: number){
                return c+d; 
            }
            addingNumbers("Prasad", 55);
        
        // Optional parameters:
            // If we declare any paramenter with ? operator it's called as a optional paramerts. When we call this fucntion without this argument, it will not give any error.
            
            const addParams = function(name:string, age?: number){
                return name;
            }
            addParams("Prasad");
    // -----------------------------------------------------------------------------------
        
    // Difference between any, void and never in functions return types?
        // any: Can retrun anything and it's not recommanded.
        // void: If any function does't have any return it's called void return type.
        // never: If any function never succesfully returns, it will throw error or infinte loop.
    
    // How are optional and default parameter different in typescript?
        // Optional: If a function declares an optional parameter, then when calling the function we may or may not pass a value for that parameter.
                function testing(name: string, age:number, city?: string){
                    return `My name is ${name}, and my age is ${age}`
                }
                console.log(testing("prasad", 38));

        // Default: Default parameters are declared to avoid null or undefined results when an argument is not provided.
                function defaultTest(name: string, age:number = 38){
                    return `My name is ${name}, and my age is ${age}`
                }
                console.log(defaultTest("Praasd"));

    // What is function overloading in TS and why it is useful?
        // Function overloading is define the multiple signatures for same functions.
        // It will useful for when we got the different arguments types.
                // function overload(input: string);
                // function overload(input: number);
                function overload(input: any) {
                    console.log(input); 
                }
                
    // Why should we specify return types explicitly in functions?
        // It will make code more readable and understanding way.
        // It will handle to stop the wrong return values.
        // It will help to catch the bug when doing the refactoring.
    
    // What is the difference between a regular function and an arrow function in TypeScript?
        //Regular Function:
                // Regular funciton this is dynamic, it means it's depends how the funciton is called.
                // This functions have the own arugument object.
                // This functions used the constructor.
            
        //Arrow Function:
                // Arrow functions this is loxical scope, it means it depends on the surrounding code where the function is defind.
                // Arrow functions don't have the aruguments, it will come from parent scope.
                // We can't use the constructor.
    
    // Can we define the functions types in TypeScript?
        // yes, we can define the type in functions..
            function type(name: string, age: number): number{
                return age;
            }
    
    // Mock Interview Coding Tasks:
        // Write a function getUserInfo(id: number, includeAddress?: boolean): string.
            function getUserInfo(id: number, icludeAddress?: boolean): string{
                let user = {
                    id: id,
                    name: "prasad",
                    Address: "Bangalpore"
                };
                if(icludeAddress){
                    return `User name ${user.name}, id ${user.id}, and address ${user.Address}`;
                }else{
                    return `id ${user.id}, name ${user.name}`
                }
            }
            
            console.log(getUserInfo(1));
            console.log(getUserInfo(2, true));

    // Create a function calculate that works for both numbers and strings (overloading).
        // function calculate(name: string);
        // function calculate(id: number);
        function calculate(index: any){

            return indexedDB;
        }

        console.log(calculate("name"));
        console.log(calculate(55));
