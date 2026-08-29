//---> 🟡 6. Generics ⭐ (MOST IMPORTANT)
//              1. Generics are typeScript feature.
//              2. It will allow us to create the reusable and Type-safe functions, classes, interfaces and types.
//              3. Instead of create the separate code for each type , we can reuse the same code using the
//                  type placeholder such as T.
//              4. When we use the common code will pass the actual type what we need.
//              5. Generics are improve the code quality, reduce the duplication.
//              6. And when we need same business logic with different type of parameters will use Generics.
//
//--> Interface:
interface ApiResponse<T> {
    data: T;
    success: boolean;
}

const response: ApiResponse<User>;
const response: ApiResponse<Product>;
//
//--> generic functions:
//         Generic functions allow us to write a function once and reuse it in multiple places with different types.
//         With out Generic functions we can write the same code in multiple time.
//      Without Generic ex:
function getString(value: string): string {
    return value;
}
function getNumber(value: number): number {
    return value;
}
//
//--> With Generic:
function getValue<T>(value: T): T {
    return value;
}
getValue("prasad");
getValue(100);
getValue(true);
//
//--> generic classes:
class Box<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
}

const strBox = new Box<string>(
    "Hello"
);
console.log(strBox.value);
//
//-----------------------------------------------------------
//---> Function_OverLoading
//      1. Function OverLoading means, same function can accept different types of parameters or parameter combinations.
//      2. So we can define the different types of function signatures but using single implementation.
//      3. It's called function overloading.
//      Ex: 
function getUser(value: number | string): string {
    return `Searching user by Email: ${value}`;
}

getUser(1001);
getUser('Prasad')


