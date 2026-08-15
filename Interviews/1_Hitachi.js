//---> 1. Self Introduction
//---> 2. How will fetch the data from dynamoDB? What is the use of Index? If existing tables should we create GSI & LSI?
//---> 3. What is Provisancy Cucarrency? Cuncorancey? When will use senarios?
//---> 4. What is SNS/SQS what is senarios? when to use why to use?
//---> 5. If we have the data in csv file and it will very large file huge data is there? How will store the data in db?
//---> 6. From api gateway level will trigger a lambda but lambda not trigger what is the problem? How to verify this?
//---> 7. In lambda level how will store the data and after that how will push to s3?
//---> 8. Write a nodeJs function that takes an array of numbers and returns a new array with prime numbers with double.
function primeNumbers(arr){
    return arr
        .filter(num => num % 2 ===0)
        .map(num => num * 2);

}

console.log(primeNumbers([1,2,3,4,5]))

//---> 9. What is the output of the function? How will get the name?
// const obj = {
//     name : 'john',
//     greet: function(){
//         console.log(this.name);
//     }
// };

// const greet = obj.greet();
// greet();
// //------------------
// //Ans:
// const obj = {
//     name : 'john',
//     greet: function(){
//         console.log(this.name);
//     }
// };

// const greet = obj.greet.bind(obj);
// greet();

//---> 10. Solve this Problem:
// input: [1,2,3,[4,5], 6];
// Output: [1,2,3,4,5,6]
function testing(arr){
    let result = [];
    for(let i=0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            result.push(...testing(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(testing([1,2,[3,4],5]))
