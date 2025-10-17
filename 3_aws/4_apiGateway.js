// API Gateway:
    // Api gatway is fully managed service to create, publish, secure and monitor the api's.
    // It will work between clients(web api's) and backend services (EC2, lambda, dynamoDB etc...)
    // It will work both rest and webSocket api's.
    // it will handle authenticaiton, logging, cors and monitoring.

// When use API Gateway:
    // When we need public/private api's for the applicaitons.
    // Best fit process for serverless apps. 
    // When we need central control like authentication, logging.

// Difference between apigateway and load balancer?
    // APIGateway: It will handle the api's for authenticaion, logging everything.
    // Load Balancer: It will use distribute the traffice across the servers.