// == && === difference
a = 10;
b = "10";

//loose equality -- Compare both values after type converation
if(a == b){
    console.log(true);
}else{
    console.log(false);
}

//strick equality -- Compare both values and type.. type means datatype sting or int or boolean etc...
if( a === b){
    console.log(true);
}else{
    console.log(false);
}

//Closer is a function.. it's remembers variables from the parent scope.. Even after complete parent function execution.
/**********************/
// Map() -- If we have any arry of elements, we can transfer the each element to new array.. but we can't modify the existing array.
// forEach() -- we can't modify and return any value.. We can iterates the each element.
// filter() -- We can return the element but can modify existing one.
// reduce() -- Same we can't modify the existing array. We can reduce the elements to a single value(eg.. Sum, max).
/*********************/
//Synchronous : In synchronous executes the line by line code and blocking the further exuction util the cureent task is completed.
//Asynchoronous : It is also executes the line by line but using callbacks, promises or async/await to perform the tasks without blocking the execution.
// await/async : Using this we can perform the tasks without blocking the code execution.. It is clener way to work with asynchronous code.
// Ex:
async function testing(){
    try{
        const response = await fetch("https://w3schools.com");
        let data = await response.json();
        console.log('Data--->' +data);
    }catch(error){
        console.log("Error --->" +error);
    }
}
console.log(testing);
//Here await pause the execution until the fetch request completes.

/*************************/

// Reverse String
function reverStirng(str){
    let reverseSting = str.split("").reverse().join("");
    console.log('reverseSting--->' +reverseSting);

    return reverseSting;
}
console.log(reverStirng('hello'));