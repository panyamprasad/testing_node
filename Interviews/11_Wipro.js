// Senarios Based questions like: Where you deploy the code which server 
//      - We are using serverless architecture, so awa lambda run our code. AWS managed infrastructure.
//
// Micro Services advantages & DisAdvantages?
//      - Advantages: Easily development , deployment, scalability, flexibility, Error isolation
//      - DisAdvantages: Debugging, testing, Data management, High Infra Management
//
// How you handle the ER relationships in DynamoDB?
//      - DynamoDb doesn't support traditional relationships like Foreign Key, Joins like that.
//      - Generally we can use the Partition Keys and Sort Keys we can maintain the relations.
//      - For example One-to-Many relationship between a customer and orders.
//      - We can use the same Partition keys and will store multiple sort keys for different orders.
//
// How will find Memory leaks in Production? How you will fix?
// What is NodeJs Event Loop?
// How you will handle the Scaling in NodeJs?
// What is Cluster?
// How you will do the authentication & authorization?
// When new user came how you will provide the permissions to the user?