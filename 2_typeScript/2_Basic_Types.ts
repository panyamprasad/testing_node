// 🟢 2. Basic Types

// ---> 1. string, number, boolean
//          1. string: Using this we can declare string values like name.. And declare this inside the braces.
//          2. number: Using this we can declared only number values.. like age, amount like that.
//          3. Boolean: Boolean means true or false using this we can check conditions.
//
// ----------------------------------------------------------------------
//
// ---> 2. null, undefined
//          1. Null: Used when the developer intentionally indicate 'no value' it means null.
//                  let user = null;
//
//          2. Undefined: After variable declaration, if we can't assign any value it will give undefined.
//                  let name;
//                   console.log(name); -- output: undefined
// ----------------------------------------------------------------------
//
// ---> 3. array, tuple:
//          1. Array:
//                  1. Array stores multiple values with same data type.
//                  2. There is no fixed length of size, dynamically it will take.
//                  3. Easily we can iterate the data.
//                  4. Collection of similar data.
//                  Ex:
let employees: string[] = ['prasad', 'panyam', 'babu']
//
//          2. Tuple:
//                  1. Using tuple we can store the multiple types of data.
//                  2. When we now the exact size and format of data will use the Tuple.
//                  3. And order is mandatory using tuple. If we miss the order throw the error.
//                  4. We have declare type like [string, boolean, number]
//                  5. So when we have fixed size, different type and position will go with this.
//                  Ex:
let user: [string, number, boolean] = ['prasad', 28, true]
//
// ----------------------------------------------------------------------
//
// ---> 4. enum:
//          1. Using enum we can declare the constants.
//          2. Like Role Names, Departments, Insurance types like that.
//          3. Enums or fixed values with meaningful names.
enum Role { ADMIN, MANAGER, HR, DEVELOPER }
//
// ----------------------------------------------------------------------
//
// ---> 5. What is difference between ANY & UNKNOWN?
//          1. ANY:
//              1. Any means will not check the data type. We can assign any value.
//              2. But using any will miss the type safety. And it will risky
//              3. Why it's risky means if will assign a value as number... 
//              4. After that somewhere if will convert same value as uppercase that time will get error at run time.
let value: any = "Hello";

value.toUpperCase(); // ✅ No Error

value = 100;
value.toUpperCase(); // ✅ Compiles but crashes at runtime
//
//          2. Unknown:
//              1. Compare to ANY unknown is safer.
//              2. When use Unknown we have to check the type.   
//              3. Recommended for unknown data like API response, userData etc.
let val: unknown = "Hello";

if (typeof val === "string") {
    console.log(val.toUpperCase());
}
//  
//          3. Both ANY & UNKNOWN can store any type of value. The difference is that ANY disables the type checking.
//          4. But using UNKNOWN type checking is required.
//          5. So UNKNOWN is better than ANY.
// 
// never
// void