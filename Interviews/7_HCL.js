//---> 1. What is Hoisting? And gave one example and asked output of the below code snippet?
//---> 2. What is the call, apply and bind in JavaScript? How will use it? Example? simple words?
//---> 3. What are phases are there in event lop?
//---> 4. What is the Cluster & Work threads in Node.js? How it will work? Example?
//---> 5. File Upload to AWS S3 bucket? If User upload the multiple files, if anything fails, how will handle?
//---> 6. How implemented Authentication and Authorization in your projects?
//----------------------------------------------------------------------------------------------------------------------

//---> 7. How will do the rollback the data from the database if any service fails in microservices?
//----------------------------------------------------------------------------------------------------------------------

//---> 8. Do you know the database design standards? Did you done any thing from your project?
//          1. Yes I have been involved in database design activities in my project.
//          2. First we gather and understand the requirements. Based on requirements we analyze what data needs to be
//             stored and how the application will access the data.
//          3. During the design phase we identify the what 
//                  - tables are required, 
//                  - partition Keys, 
//                  - Indexes, 
//                  - Naming standards
//                  - And audit fields such as createdAT, updateAt, deleteAt
//          4. In dynamoDB mainly will focus on partition and index keys, because it will impact performance and scaling.
//          5. Once analysis is done will discuss with design calls with architect team, once finalize.
//          6. Will start develop using cloudFormation template.33
//
//----------------------------------------------------------------------------------------------------------------------

//---> 9. Gave one array [0,1,0,2,4,3,5,0,0] with multiple values, asked to write the code and output [1,2,3,4,5,0,0,0,0].
function sortingArray(arr){
    let result = 0;

    for(let i=0; i< arr.length; i++){
        if(arr[i] !== 0){
            arr[result] = arr[i];
            result++;
        }
    }
    while(result < arr.length){
        arr[result] = 0;
        result++;
    }
    return arr;
}
console.log(sortingArray([1,0,2,0,3,0,4]))
//----------------------------------------------------------------------------------------------------------------------

//---> 10. What is the difference between the monolithic and microservices architecture? 
//         And what are the advantages and disadvantages of both?
//
//         Monolithic Architecture:
//              1. Monolithic Architecture means we can build the all the feature in single codebase.
//              2. And all modules deployed at once.
//              3. If one small change happen we have to deploy entire code.
//              4. if any issue happen it will impact all features.
//              5. But we can easily debug, deploy better for small applications.
//
//         MicroServices:
//              1. Using this we can divide the large scale applications into small small services.
//              2. Each and every service we can develop independently and deploy independently.
//              3. And it is technology flexibility.
//              4. And services communicate through the RestAPI's, Events, message queue like sns/sqs/Kafka.
//              5. Better for large-scale applications.
//              6. But debugging is complex, more monitoring and logging, and more devOps and infra effort required.
//          
//----------------------------------------------------------------------------------------------------------------------

//---> 11. What is the difference between the synchronous and asynchronous programming? 
//         And what are the advantages and disadvantages of both?
//
//          Synchronous:
//                  1. In Synchronous the tasks will execute one by one.
//                  2. If first one complete the it will go next, so the blocking will happen.
//                  3. it is simple and easy to understand.
//                  4. Better for small tasks.
//              Adv: Easily debugging, understand.  DisAd: Blocking, time taking, not suitable for complete and multiple tasks.
//
//          Asynchronous:
//                  1. Asynchronous means non-blocking, simantanisoly execute multiple tasks.
//                  2. Fast performance, handle multiple tasks and scalable.
//              DiAd: Debugging is complex,  error handling, code can be complex.
//      
//----------------------------------------------------------------------------------------------------------------------
//---> 12. What is the difference between the REST and SOAP API? And what are the advantages and disadvantages of both?
//        - REST & SOAP are two different architectural styles for building API's.
//
//          REST: Coming to the REST
//                  1. REST is a architectural style for building web api's.
//                  3. In REST mainly will use HTTP methods like GET/POST/PUT/DELETE.
//                  4. In REST apis usually will follow the JSON format.
//                  5. REST is faster, lightweight and more scalable, so mainly using this in:
//                          - Developing the web applications
//                          - Mobile applications
//                          - Microservices &
//                          - Cloud applications        
//                  6. Disadvantages of REST:
//                          - It is less secure because it doesn't have built-in features like Error handling & Security.   
//                          - Transaction Handling is difficult, because during the microservices communication, 
//                          - If anything fails we have to implement the rollback mechanism using the Saga pattern 
//                            or event-driven architecture.
//
//          SOAP: Coming to the SOAP
//                  1. SOAP is a Protocol for communication between the applications.
//                  3. And SOAP use the XML format for communication.
//                  4. And It will follow the strict standard rules, 
//                     it means it will use the WSDL (Web Services Description Language).
//                  5. Both client and server needs to know the input and output, and datatypes.
//                  6. And more secure compare to the REST.
//                  5. Because it will support multiple security mechanisms using the WS-Security standard, 
//                        - and it will support the following security features: Like
//                              a. Username Token
//                              b. X-509 Digital Certificate
//                              c. SAML Token
//                              c. Encryption
//                              d. Digital Signature
//                  5. Mostly we can use the SOAP in: 
//                                                  a. Banking
//                                                  b. Finance
//                                                  c. Insurance
//                                                  d. Govt applications & Enterprise applications.
//
//---> In our current IMS project, we are using the SOAP API, we are creating the SOAP client and calling the SOAP API using the WSDL file. And the SOAP library automatically convert the JSON to XML and XML to JSON. And during the soap call we are not sending any tokens or authentication, we jest sending the request and getting the data, the security everything handling thought the infra side.