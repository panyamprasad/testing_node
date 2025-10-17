// AWS Lambda:
    // Lambda is a fully managed serverless service in aws. Don't need any servers to run the code using lambda.
    // The max execution time is 15 min.
    // Lambda will runs only when triggers, for example: Api Gateway calls, dynamodDB changes, upload any file in S3 etc.
    // Based on uses it will be chargable, it means we pay only for number of requests and exection time.
    
// Common Lambda Triggers:
    // API Gateway: Run lambda for http requests.
    // DynamoDB: Run the lambda if any changes required in db. (Create/updata/delete etc).
    // S3: Run the lambda if any file should we upload in s3.
    // SNS/SQS: And if we need to send any notification using sns/sqs service lambda will trigger.
    // CloudWatch: Based on the cornJObs configuration lambda will trigger.

// Permissions:
    // Execution role:
    // Resources based policy:

// Advantages:
    // It's fully managed by aws
    // It will manage any number of requests.
    // Pay what we used, it means charged only for useges
    // We can work with other services
    // It have the IAM role policies to access other services.

// Disadvantages:
    // Execution time to very less max 15min.
    // ColdStart: it means we ar not use any lambda for a while, after some time we started again it will take little more time for execution.
    // Debugging is hard, if we find any issue we should login aws console.
    // Limitted of payload size:
        // For direct lambda invoke it will take 6mb for request.
        // For event invoke like s3, dynamoDB  it will take 256mb. 
        // Basically for file upload will use the S3.

// Common Use Cases:
    // 

// Lambda Layers:
    //

//---------------------------------------------------------------------------------------------------------

//---> How to integrate lambda and APIGateway?
    // We can integrate lambda and APIGateway from AWS console and yaml configuration.
    // From AWS Console, before integration we should create the both lambda and APIGateway, after in apiGateway we have the go integrate secion, select the lambda and porper configuration.
    // From the serverless we can easily integrate both lambda and gateway using the simple yaml configurations, it will faster and simple.

// ---> What is coldStart? How to fix this?
    // If any lambda we didn't used for a while, after some time we trigger this, it will take little more time compare to previous exectuion time, it's called clodStart.
    // Fix: We can't completly fix this issue, but we should refactor the code with small functions, remove the unused dependencies, use the faster languages like node.
    // But if we use the Provisioned Concurrency we can eliminate complete cold start, but it will chargable.

// ---> How does lambda Scale the traffic?
    // For every request lambda will create the new instance for function.
    // This allows to handle multiple requests in parallal.
    // Don't need any configuration.

// ---> How does IAM work with Lambda?
    // IAM means set of permissions and polices, this lambda wants to use any other services like s3, dynamoDB change, sns/sqs services, we should provide the IAM permissions to this lambda.

// ---> What are resource-based-polices in lambda?
    // Resource based polices means we have to provide some permission to lambda to access in other services like dynamodb, s3 etc..

// ---> What do you restrict a lambda to access only  a specific S3 bucket?
    // Every lambda function runs with a IAM Role.
    // We can attach a policy to that role. In that policy we can provide to access only one s3 bucket.
    // Steps:
        // Create an IAM Role for your Lambda.
        // Attach the above policy to the Role. -- Policy Name: least privilege policy
        // And assign this role to the lambda.
        // So now that lambda can access only that bucket, if try to access other bucket will access denied issue.

// ---> Can I restrict lambda to only specific folders inside a bucket?
    // Yes, Add the specific ARN resource to IAM Role.(Amazon Resource Name).
    // ARN means full address of resource, it will use IAM Policies, CloudFormation templates etc.

// ---> How do you handle large payloads or long-running tasks in Lambda?
    // Lambda have some limites to send the payloads. 
            // For direct invoke it will allow the 6mb size.
            // For Asyn calls it will also 256 mb size.
    // But large payloads / log running taks we have other solutions:
        // Large Payloads:
            // Insted of sending the full data to lambda, can store it in S3.
            // We pass only s3 object key to lambda.
            // From object key lambda will read the data chuck by check.

        // Log running tasks:
            // Use the step functions.
