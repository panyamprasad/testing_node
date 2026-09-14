//---> Self introduction
//---> Project explanation
//---> What Container you are using in deployment
//---> How NodeJs Handle Concurrency
//---> NodeJs is single thread how it will work?
//---> How will handle CPU Intensive tasks
//---> What are the Cluster? what is Cluster Modules
//---> What are the advantages or MicroServices
//          - Faster development: Multiple teams can work on different services simultaneously.
//          - Easily Deployment: There is no dependency for one service to another service we can deploy easily.
//          - Flexibility: If we required we can use different technology for each service.
//          - Scaling:
//          - Failure Isolation: If any service down it will not impact entire application.
//
//---> What are the Streams?
//---> How will transaction will work in microservices?
//          - We used event-driven Saga approach.
//          - Services communicate through the events using SNS/SQS.
//          - If any service fails we can do Compensating Actions, we can trigger and rollback the previous completed services.
//
//---> Saga Patterns?
//
//---> Asked left and right join?
//      - Left Join: Keep all the records from left table and get the matched records from right table. 
//      - right join: Keep all the records from right table and get the matched records from left table.
//      - If not match it will show null values of right or left table columns.
//
//---> What is WHERE and HAVING
//         WHERE: Using this we can filter the data from the table before Group By.
//         Having: Using this we can filter the data from the table after Group By. Mostly using this for aggregate functions.
//