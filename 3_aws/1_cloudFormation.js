// What is Cloud Formation:
    // 1. Cloud formation is an infrastructure as a code service from AWS.
    // 2. We can define aws infrastructure like EC2, Lambda, dynamoDB, S3 etc... in a yaml or json file.
    // 3. When we upload this file cloudFormation will create, update and delete all these resources automatically.
    //-----------------------------------------------------

// Why use CloudFormation?
    // 1. We don't have to click and create the resources manuvally in aws console.
    // 2. Same template we can use multiple environments like dev, qa, stage and prod.
    // 3. We can store infrastructure in the git hub based on verion.
    // 4. And cloudFormation understand the order of creating resources.
    //-----------------------------------------------------

// When will use CloudFormation?
    // 1. When we need multiple resources then will follow the cloudFormation instend of manuval creation.
    // 2. When we need automatic deployment using ci/cd
    // 3. When we need same infrastructure in all environments.
    //-----------------------------------------------------

// Why do we use cloudformation instend of manuval creation?
    // It is automatic process, reduce the errors, version controling, and environment consistent.
    //-----------------------------------------------------

// Stacks and template?
    // !. Template is file it includes all the resource related information.
    // Stack:
        // 1. Stack is the collection of aws resources, those resources are created form the template.
        // 2. When we deploy the template, cloudformation creates a stack that containes all defined services like lambda, apigateway, s3 etc.
    //-----------------------------------------------------

// What is changeSet?
    // change set is nothing but it is review of changes what we have made in template, before upload it will review to us.
    //-----------------------------------------------------

// Lambda deployment with serverless framework?
    // 1. If we have the serverless project, when we deploy the code using serverless deploy, it actuvally create the cloudformation template and it's includes all the resoucres details.
    // 2. like Lambda functions, IAM Role, API Gateway, S3 Buckets and dynamoDB etc.
    //-----------------------------------------------------

// Rollback after deployment failure?
    // 1. Rollback is nothing but reverting the code or taking the previous stable version.
    // 2. For example in deployment if any table creation is failed, so cloudfomation automatically rollback all successfull resources and revert the previous stable version.
    //-----------------------------------------------------

// What is different between serverless.yaml and cloudformation.yaml?
    // Serverless.yaml:
        // 1. Serverless yaml is the part of in serverless frameswork, using this we can define the all the configurations.
        // 2. Like Lambda functions, IAM roles & polices, Events like APIgateway, SQS etc, environment variable.
    
    // CloudFormation:
        // It is pure AWS Cloudformation, used to define the infra directly without any exra framewrk, we must specify the all the resource properties.
    
    // The main difference is when we use the serverless framework, and we define the all resources in serverless, and we have to deploy. After deployment it's internally covert the file into the cloudformation template and use AWS Cloudformation and manage all the resources like Lambda, API Gateway, DynamoDB etc.
    // So both serverless.yaml and cloudFormation both are related but not same.
    //-----------------------------------------------------



    

