// ---> 🟡 5. Interfaces (VERY IMPORTANT)
//              1. An interface is a blue print, it will tell us what properties and methods should contain in object.
//              2. Using interface we can define and declare the Object structure.
//              3. And it will help to maintain a same structure in entire application.
//              4. And It will improve the code quality and reduces error during the development.
//              5. Mainly using interface we can declare object and class implementations.
//          Uses:
//              1. API Response: It is very common in NestJs and Angular
//              2. In Function Parameters
//              3. Classes for implementations.
// Ex:
interface User {
    id: number;
    name: string;
    email: string;
}

const response: User = await getUser();

export { };

function getUser(): User | PromiseLike<User> {
    throw new Error("Function not implemented.");
}

// ---> object structure
//          1. Object Structure means, it including what properties and methods it should have.
//          2. And what type should have each property.
{
    id: number;
    name: string;
    email: string;
}
//          
//---> optional / readonly:
//          1. Optional means not mandatory.
//          2. When we declare the property in object creation we mention at optional.
//          3. If we miss also we can't get any error.
//          4. Readonly means we can edit the value, just we can read and use it.
//
//---> extending interfaces:
//          1. Extending Interface means create a new interface by reusing the properties from the existing
//             Interface.
//          2. So Instead of recreate all the properties we can reuse the existing interface data.
//          Ex: Employee have some properties, so Manager also have the same properties instead of create same will
//              extend employee
//
//---> merging:
//          1. Merging is nothing but combination of multiple interfaces with same name into single interface.
//          2. This feature is available only in Interface.
//------------------------------------------------------------------------
//
// 🟡 6. Classes & OOP
// classes
// constructor
// inheritance
// access modifiers
// abstract classes

//------------------------------------------------------------------------
// 🟡 7. Union & Intersection

//---> | (OR) : Using this Combination of multiple data types. If we want to declare a variable with multiple data types
//          will use Union. 
//          Ex: A user can login with email Or mobileNumber
             type loginId = string | number;
//
//---> & (AND) : Intersection will use in type. Using intersection will combine multiple types to another type.
//          Ex: 
                type Employee = {
                    id: number,
                    name: string
                }
                type Manager = {
                    department: string
                }
                type TeamLead = Employee & Manager

//------------------------------------------------------------------------