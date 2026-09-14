//---> 1. What is Service?
//          1. Service means application Name or projectName.
//          2. When we deploy serverless Framework, the cloudFormation is create the stack using this service Name.
//          3. If Service name is IMS: It will create IMS-Dev, IMS-Qa, IMS-SIT like this based on the env it will create.
//          4. And Lambdas, gateways creation also will use this service name and will create for understanding purpose.
//          5. Using this for :
//                              - Identification Purpose
//                              - Create CloudFormation Stack
//

//---> 2. FrameWork Version:
//          1. This is serverless framework version.
//          2. Most of the companies are using 3. The latest version is 4.0.0
//

//---> 3. What is Provider?
//          1. In the Provider Section will define the all cloud related configuration.
//          2. Like where we have to deploy the code I mean which cloud like AWS, Azure like that.
//          3. And we can define the runtime, regions and stage, IAM roles and permissions and Environments.
//          4. Under Environment section if we required different configuration, we add that.
//          5. Will do this in three ways:
//              1. Custom Section: Same yaml we can add multiple env section will configure. Based on deployment stage it will use.
//              2. Create separate .env files and we can use those.
//              3. We can create the separate yaml files for configuration we can use it. In Enterprise application use this.
//--EX:
//
// provider:
//   name: aws
//   runtime: nodejs20.x
//   stage: ${opt:stage, 'dev'}
//   region: ap-south-1

//   environment:
//     STAGE: ${self:provider.stage}

//     DYNAMODB_TABLE: ${self:custom.config.dynamodbTable}
//     S3_BUCKET: ${self:custom.config.bucketName}

//     SNS_TOPIC_ARN:
//       Ref: UserCreatedTopic

//     SQS_QUEUE_URL:
//       Ref: UserProcessingQueue
//  
//   iam:
//

//---> What is the Functions?
//          1. Function section is very important in serverless.
//          2. Under this we can define the all AWS lambda function configurations.
//          3. Each function we can specify the Handler name, memory size, timeout and event sources.
//          4. Under Event we can define API GATEWAY, S3, SNS, SQS configuration.
//          5. During the deployment serverless creates separate lambda function each and every function section.
// Ex:
functions:

  createUser:
    handler: src/handlers/createUser.handler
    memorySize: ${self:custom.config.memorySize}
    timeout: 30
    events:
      - http:
          path: users
          method: post
          cors: true

  processUser:
    handler: src/handlers/processUser.handler
    timeout: 60
    events:
      - sqs:
          arn:
            Fn::GetAtt:
              - UserProcessingQueue
              - Arn
          batchSize: 10
        

//---> What is Resources?
//          1. Under the Resources we can define AWS Infra configuration.
//          2. Like DynamoDB tables, S3 Buckets, SNS, SQS related topics.
//          3. During the deployment the cloudFormation create the respective configuration resources automatically.
//
//---> What is Ref and Fn::GetAtt? Why are both used in serverless.yml?
//          1. Ref: Using Ref we can identify the resources like DynamoDB tables, S3 bucket names.
//          2. GetAtt: Using GetAtt we can refer specific Attribute of resource, it means exact path of the resource. It contains location of table, region and account full path.