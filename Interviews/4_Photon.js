//---> 1. How many project do you worked in microservice?
//---> 2. What is microservices?
//---> 3. What is Radis
//---> 4. Api Gateway
//---> 5. Lambda & Advantages
//---> 6. DynamoDB
//---> 7. S3 and uses
//---> 8. SNS & SQS
//---> 9. How configure gateway and Lambda and sns topics
//---> 10. Pre-signed Url
//---> 11. Git Stash & Git Rebase
//---> 12. What is Hoisting
//---> 13. What is Cluster
//---> 14. What is Closure
//---> 15. What is Promise
//---> 16. CI-CD experience
//---> 17. How will genarate Security JWT tokens
//---> 18. Gave one array remove duplicates and do the sorting [21,1,2,13,21,22,1,1,2,21,24,3,22]
function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }

    for (let i = 0; i < unique.length; i++) {
        for (let j = 0; j < unique.length - 1 - i; j++) {
            if (unique[j] > unique[j + 1]) {
                let val = unique[j];
                unique[j] = unique[j+1];
                unique[j+1] = val;
            }
        }
    }
    return unique;
}
console.log(removeDuplicates([21, 1, 2, 13, 21, 22, 1, 1, 2, 21, 24, 3, 22]))