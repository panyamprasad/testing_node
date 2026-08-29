// ---- Basic ----
// ---> What is CloudFormation? 
//          1. Cloud Formation is Infrastructure as code Service.
//          2. Instead of creating the AWS service manually, using the cloudFormation we can configure the all the aws resources
//              in yaml or json file.
//          3. Once the deployment is complete CloudFormation use the yaml file and create the infra automatically.
//          4. Main Advantages of CloudFormation is:
//              - Automation
//              - Version Control
//              - Reusability: same template we use multiple env.
//              - Rollback
//
//---> What is Infrastructure as Code?
//          1. Infrastructure as Code is a service, using this we can create the all AWS resources automatically.
//          1. Like Lambda, API Gateway, DynamoDB, S3, SNS, SQS etc.
//
//---> What is a Stack?
//          1. Stack is a Collection of AWS resources, During the CloudFormation template execution it will create.
//          2. What are the resources we created those all resources are available in stack.
//          3. Each and every environment will create different stack.
//          4. Using this we can do Easy Deployment, Easy Update, Manage Everything Together.
//
//---> What is a Template?
//          1. Template is blueprint of yaml file.
//          2. It contains what AWS resources cloudFormation should create.
//          3. And How those resources should be configured.

// ---- Intermediate ----
//---> What is Change Set?
//          1. Change Set is one of the feature in CloudFormation.
//          2. It will show the changes what we made in template, before update the resources.
//
//---> What is Drift Detection?
//          1. Drift Detection is one of the feature in CloudFormation.
//          2. Using this we can identify the changes, if any one change the configuration manually.
//          
//---> What is Rollback?
//          1. Rollback is one of the feature in CloudFormation.
//          2. CloudFormation automatically rollback the changes if anything fail during the deployment.
//
//---> What are Parameters?
//          1. Parameters are input values, it will provide the instructions to cloudFormation Template during stack creation.
//          2. Using this we can define the:
//              - Environments (DEV, QA, Prod)
//              - Lambda Memory Size
//              - DynamoDB tables
//              - S3 Bucket Names
//              - VPC IDs
//              - EC2 Instances
//          3. Instead of creating the multiple templates for each env we use the parameters we can define all env configuration.
//
//---> What are Outputs?
//          1. Outputs are the values, cloudFormation provide the details after stack creation or update.
//          2. It will provide useful information like API URL, dynamoDB table names, S3 Bucket Names.
//          3. Instead collect these from cloud once create the stack it will provide the details.

// ---- Advanced ----
//---> CloudFormation vs Terraform?
//
//---> How do you deploy to multiple accounts?
//          1. Generally will use the StackSets and will deploy the same infrastructure in multiple accounts.
//          2. Coming to the enterprise projects we use the git and deploy it from Jenkins or CI/CD pipelines with
//             cross-account IAM roles.
//
//---> How do you manage environment-specific configurations?
//          1. We can define the parameter values.
//          2. And we pass the environment specific configuration for each and every environment.
//
//---> How do you troubleshoot CREATE_FAILED?
//          1. First will check the cloudFormation Event Tab, it will provide full information about the issue.
//          2. Then will check the cloudformation template configuration.
//          3. Like Parameter values, IAM Permissions before redeploying the template.
//

// ---- Scenario Based ----
//---> Deployment failed midway. What will you do?
//          1. First will check the CloudFormation Event, it will provide the failure information.
//          2. Then will verify the template, based on the error information.
//          3. If RollBack is enable, cloudformation automatically revert it previous stable version..
//
//---> Resource created manually. How will you identify it?
//          1. In CloudFormation have one feature like Drift detection.
//          2. Using this we can found the changes created by manually.
//
//---> Same infrastructure needed across regions?
//          1. Will use the StackSets we can upload the same infra in multiple aws account.
//          2. Or else using the git we can process through the Jenkins or ci/cd pipelines with cross-account IAM role.
//
//---> Rollback failed. How will you troubleshoot?
//          1. Even Rollback also fail means first will check the events, and try to fix the issue.
//          2. Then will check the issue regarding rollback.
//          3. Basically RollBack fail means due to the previous version deleted or table missing or ims permission missing.
//
//---> Template size has grown to 5000+ lines. How will you manage it?
//          1. If template size is more than 5000+ lines, we can segregate the template into Nested stacks.
//          2. It means:
//                  - main-template.yaml
//                  - lambda-template.yaml
//                  - database-template.yaml
//                  - network-template.yaml
//                  - message-template.yaml
//
//---> What is Ref?
//          1. Using Ref we can take the reference of another resource or parameter.
//          2. During the lambda creation we can use Ref and attach the IAM Permissions and API Gateway.
//
//---> How do you create Lambda in CloudFormation?
//          1. In Cloud Formation under the resource section will add the lambda function.
//          2. First we can add the API GATEWAY.
//          3. Under the Gateway will add the resource, resource means path
//          4. Then we create the lambdaFunction, under the function will add FunctionName, Runtime, IAM Role, Handler etc.
//          5. After this we create the GET/POST/PUT/DELETE methods.
//          6. And provide the lambda Execution permissions.
//          7. Finally will add the integration, use this we can connect API.
//
//---> How does Lambda publish to SNS?
//          1. First we have to create the SNS topic
//          2. Then we have to create the IAM Role with respective permissions and policies.
//          3. Then we have to create the lambda and attach the lambda Permissions using !GetAtt.
//          4. Then we have attach the sns topic to lambda using !Ref.
//          5. Finally inside lambda function will use AWS-SDK will publish the message to SNS.
//
//---> What is Different between !Ref & !GetAtt?
//          1. Use Ref we can take the reference of name or IDs.
//          2. Use GetAtt, when we need a specific attribute like ARN, Endpoint, or URL.
//
// - TemplateVersion
// - Description
// - Parameters
// - Mapping
// - Resources
// - Output

