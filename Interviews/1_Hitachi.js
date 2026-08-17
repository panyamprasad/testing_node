//---> 1. Self Introduction
//---> 2. How will fetch the data from dynamoDB? What is the use of Index? If existing tables should we create GSI & LSI?
//          1. Will fetch the data from dynamoDB, using Get, query and scan.
//          2. Query is most preferable way, because will using the keys and fetch the data.
//          3. And Index also will use based on business requirement. If we want different Partition Key & Sort Key.
//          4. There are two types of Index are there 
//                  1. Global Secondary Index
//                      1. Using GSI it will allow different Partition Key and different SortKey.
//                      2. For existing tables also we can create the GSI.
//                      3. Max per table 20 GSI.
//                  2. Local Secondary Index
//                      1. Using this will allow same Partition Key but different sortKey.
//                      2. When we creating table that time only we have to create.
//                      3. Max 5 LSI will be allow each table.
//
// Query:
const params = {
    TableName: 'UserTable',
    KeyConditionExpression: 'userId = :id',
    ExpressionAttributeValues: {
        'id': 'u1001'
    }
};
//
// Using Index:
const params = {
    TableName: 'UserTable',
    IndexName: 'status',
    KeyConditionExpression: '#st = :status',
    ExpressionAttributeValues: {
        ':status': 'Active'
    }
}
//---> 3. What is Provesancy Concurrency? Reserve Concurrency? When will use senarios?
//          1. First we have to understand what is Concurrency.
//          2. Concurrency means how many lambda executions are running at the same time.
//              Per account the max Concurrency is 1000.
//          3. Reserve Concurrency: means we have to assign a specific limit of concurrency for a lambda function.
//          4. Other lambdas can't use this reserve concurrency.
//          5. Provesancy Concurrency means it will maintain some instance up and running, use this to overcome cold start.
//
//---> 4. What is SNS/SQS what is senarios? when to use why to use?
//
//---> 5. If we have the data in csv file and it will very large file huge data is there? How will store the data in db?
//          1. For large files should never read whole file at once, instead of that we have to use streams then will process it.
//          2. 1st we have to store the file in s3 using steam.
//          3. After store the file we have two approaches to push the data to dynamoDB.
//              1. Approach One:
//                  1. We have to read the file from s3 using steam.
//                  2. Then we can use the csv parser, will read the data row by row.
//                  3. And convert the each row into a item.
//                  4. Then push the data to dynamoDB using the batchWrite.
//              
//              2. Approach Two:
//                  1. If we have more items or large file will go this way.
//                  2. Once the file will upload to s33 we have to trigger lambda and start the process.
//                  3. So the file will too large then will split it multi parts.
//                  4. Each part will push to SQS.
//                  5. Then lambda will automatically scaling and process the all parts parallel.
//                  6. Then we can process the csv records,and store the data in dynamoDb using batch writes.
//                  7. If anything went wrong will do retry.
//
//---> 6. From api gateway level will trigger a lambda but lambda not trigger what is the problem? How to verify this?
//          1. When API Gateway does not trigger lambda means there are several problems are there.
//          2. It is incorrect Integration between Gateway to lambda.
//          3. Lambda Permission missing.
//          4. Changes are not available, I mean not deployed api changes.
//          5. Wrong routing, authentication failure.
//          6. So we have to verify these all, most of the time permission issue will happen.
//
//---> 7. In lambda level how will store the data and after that how will push to s3?
//          1. Basically the lambda memory size is 10gb.
//          2. So we haven't load large files such as 20gb csv file into lambda memory.
//          3. Instead of that will store the file in s3, and use the lambda to process it in chunks.
//          4. So this will allows us to handle the large files without using lambda memory.
//
//---> 8. Write a nodeJs function that takes an array of numbers and returns a new array with prime numbers with double.
function primeNumbers(arr) {
    return arr
        .filter(num => num % 2 === 0)
        .map(num => num * 2);

}

console.log(primeNumbers([1, 2, 3, 4, 5]))

//---> 9. What is the output of the function? How will get the name?
const obj = {
    name : 'john',
    greet: function(){
        console.log(this.name);
    }
};

// const greet = obj.greet();
// greet();
// //------------------
// //Ans:
const obj = {
    name : 'john',
    greet: function(){
        console.log(this.name);
    }
};

// const greet = obj.greet.bind(obj);
// greet();

//---> 10. Solve this Problem:
// input: [1,2,3,[4,5], 6];
// Output: [1,2,3,4,5,6]
function testing(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...testing(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(testing([1, 2, [3, 4], 5]))
