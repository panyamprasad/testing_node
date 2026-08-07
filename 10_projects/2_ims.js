//--- IMS ---
//          1. IMS means Insurance and Money Services.
//
//---> Project Overview:
//          1. IMS API Platform is a MonoRepo-based microservice architecture built using Node.Js/ NestJS.
//          2. We use NPM Workspaces and Turborepo to manage multiple APIs and shared libraries with in the single repo.
//          3. Each business requirement developed as an independent service.
//          4. And common functionality is maintained in reusable packages.
//
//--->      5. I have worked on the few of the services
//          6. Ex: 
//                  1. Customer Forms
//                  2. Customer Portfolios
//                  3. Customer pay by Vouchers
//          7. Each service handle it's own responsibility.
//
//---> API Development:
//          8. After service creation we have implement the business logic using the NestJs framework.
//          9. In development phase will use:
//                  1. Controllers (For API Routing and validation)
//                  2. Services (For Business Logic implementation)
//                  3. DTO's (Request/Response Modules)
//                  4. Validation, Error handling and Logging we are maintain the separate layers.
//          10. Most of the services are not work alone, we have to connect Tesco Internal server system.
//
//---> Integrate with Other Services:
//          11. So for that we have genarate the auth token using the respective details and will process this along with request.
//
//---> Documentation:
//          10. And Each and every services will prepare the full documentation, and will include
//                  1. APi Uses.
//                  2. Define the request Format and response.
//                  3. And will add the swagger specification in the Confluence page.
//
//---> Local Testing:
//          11. After development we have to the local testing. We are using the MOCK SOAP Services and will perform the testing.
//          12. Using the Jest and will write the unit testcases. And will use the sonarQube and will check the quality.
//
//---> Deployment to AWS:
//          13. Once development and validation is done, will push the code to GITHub.
//          14. Basically we are not moving the code to directly to AWS, instead of that will use the Jenkins.
//          15. CI-CD is managed through Jenkins pipelines are written in Groovy.
//          16. When code merge to main branch, Jenkins automatically install dependencies and execute all UT's.
//          17. Once it's done build the application, and create the deployable package and stores in Nexus.
//          18. In Nexus we download Artifact from Nexus and will deploy and update the aws lambda using to the Terraform.
//
//---> Once deployment is done, will validate the api's through the API Gateway. And will provide the Bruno collection to testing team.
//------------------------------------------------------------------
//
//---> Q1: Why they designed like this Instead of direct deployment to AWS?
//          1. Direct deployment from Jenkins to AWS:
//                  1. Direct deployment is possible but in enterprise projects usually avoid it.
//                  2. Because there is some problems. For Ex: If we have to deploy in different env, each evn will do different build.
//                  3. But using Jenkins + Terraform, build once, store in Nexus, deploy same artifact in all environments.
//
//---> Q2: Why Nexus?
//          1. Nexus is a warehouse.
//          2. So developer creates the package, store in Nexus, Anyone can deploy same package later.
//          3. And it will handle the different version control.
//          4. If anything breaks we can rollback easily.
//
//---> Q3: Why Terraform?
//          1. Terraform is infrastructure as Code (IaC).
//          2. Instead of manually doing:
//                  1. AWS Login
//                  2. Create Lambda
//                  3. Create API Gateway
//                  4. Configure IAM etc...
//          3. Using terraform we can define everything in code.
//          4. If anything fails terraform can rollback to previous version without rebuilding.
//
//---> Q4: What is difference between Serverless & Terraform?
//          1. Serverless Framework can also create AWS resources from code, and it works well for smaller serverless applications. 
//          2. But in enterprise projects like IMS, Terraform is preferred because it manages the entire infrastructure, not just the application deployment. 
//          3. It provides better control, reviewability, consistency, and separation between application code and infrastructure.
//          4. In our project, Jenkins builds and publishes the Lambda artifact to Nexus, 
//          5. while Terraform retrieves the artifact and deploys it to AWS, ensuring infrastructure and application deployment are managed in a standardized way.
//-----------------------------------------------

//---> What is Terraform?
//          1. Terraform is a Infrastructure as Code tool.
//          2. It will allows us manage and control the Cloud resources using code, instead of manual configuration.
//
//
//----> Why do we use Terraform?
//          1. Using Terraform, we can automatically create and maintain infrastructure in cloud.
//          2. We can do version controlling.
//          3. Maintain the consistency environments across multiple evn.
//          4. We can reduce the manual work.
//
//
//---> What is Infrastructure as Code?
//          1. Infrastructure as code means define the resources such as:
//              1. Lambda, gateway, dynamoDB, networking related services etc..
//          2. We can create and store from the code like application code.
//
//
//---> What is Terraform State?
//          1. Terraform state means it's similar to Memory.
//          2. Here we can manage the existing features what are available, and what new feature are came.
//          3. So both compare and create only new features.
//          
