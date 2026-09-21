// Asked find the second Largest Number
const array = [12,2,3,4,5,7,6,9,8,10];

function findSecondLarge(array){
    let large = -Infinity;
    let second = -Infinity;

    for(let i=0; i< array.length; i++){
        if(array[i] > large){
            second = large;
            large = array[i];
        }else if(array[i] > second && array[i] !== large){
            second = array[i]
        }
    }

    return second;
}
console.log(findSecondLarge([12,2,3,4,5,7,6,9,8,10]));
//---------------------------------------------------------------

// Asked find the local minimum values:
const arr = [12,2,3,4,5,7,6,9,8,10];

for(let i = 1; i < arr.length -1; i++){
    if(arr[i] < arr[i-1] && arr[i] < arr[i+1]){
        console.log('local minimum :', arr[i]);
    }
}
//---------------------------------------------------------------

// What is the output:
let a = [1,2,3,4];
let b = a;

a.pop() 
b.pop()

console.log(a,b);

// Here pop means remove the last value.
// So a assign to the b. So a and b both are same array.
// When we do the a.pop() remove 4.
// When we do the b.pop() remove 3
// output is [1,2] [1,2]
//---------------------------------------------------------------

// What is output
let obj={
    name: 'ab',
    surname: 'c',
    fullname: this.name + this.surname
};

console.log(obj.fullname);

//Output : NAN - because this keyword refer only object method. But here we refers directly object property.
// Solution:
let obj={
    name: 'ab',
    lname: 'c',
    fullname(){
        return `${this.name}${this.lname}`
    }
};
console.log(obj.fullname());