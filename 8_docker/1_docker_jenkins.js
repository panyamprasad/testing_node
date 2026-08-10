//---> 1. What is the Docker?
//     1. Docker is a tool, it helps us package our application and its dependencies into a container.
//     2. And it will allow us to run our application in any environment without worrying about infrastructure.
//     Uses:
//     3. Using docker same container we can use multiple environments like dev / test / Production.
//     4. Dependency management is very easy with docker, we can maintain all the dependencies in all environments.
//     5. Docker is very lightweight, it uses less resources than virtual machines.
//     6. It will works in CI/CD pipeline, it will help us to automate our application deployment process.
//     Note:
//     Mainly used during deployment, in microservices architecture, and in CI/CD pipeline.
//     --------------------------------------------------------------------------------------

//---> How Docker will perform in our project?
//     1. In our project, we use docker-compose to manage multiple services. 
//     2. The compose file passes build arguments like app name and function directory to the Dockerfile. 
//     3. The Dockerfile then builds the image for that specific service.
//     4. And docker-compose runs it as a container along with environment configurations.
//     Note:
//     1. We can use docker for local development, testing. 
//     -------------------------------------------------------------------------------

//---> 2. What is Dockerfile?
//     1. Dockerfile is a text file, it is a set of instructions used to build a docker image by defining the environment and the dependencies.
//     2. Basically we can define the command to run our application, copy the files, dependencies and other configurations.
//     -------------------------------------------------------------------------------

//---> 3. Docker local testing, steps to run the docker image locally?
//     Run this commands in terminal:
//     1. cd ims-api-platform
//     2. docker compose -f docker/docker-compose-ims-api-customers-portfolios-v1.yaml up --build


//     -------------------------------------------------------------------------------

//---> Explain your Jenkins pipeline?
//     1. When we push the code to git repository, the Jenkins pipeline will trigger automatically.
//     2. The Jenkins pipeline install the required dependencies, packages, and prepare the environment for the application.
//     3. It will execute the test cases, and if all the test cases are passed, it will start the build process.
//     4. The Jenkins build the application using Turbo (monorepo build), and converts code into production artifacts.
//     5. The build process will create and package the application as a zip file, stores in Nexus.

//     Terraform Deployment Flow:
//     1. After Jenkins completes the build process, Terraform handles the deployment process.
//     2. Deployment pipeline retrieves the zip file from Nexus and
//     3. And using the Terraform will fetch the zip file from Nexus, and store it in S3.
//     4. S3 is used to storage for lambda code. Terraform will update the aws lambda function and configure the API Gateway.
//     Note:
//     1. Jenkins is used for build and test automation, while Terraform is used for infrastructure provisioning and deployment.
//     2. Both tools work together to automate the entire software delivery process, from code commit to production deployment.
//     --------------------------------------------------------------------------------------
//         Jenkins
//            ↓
//        Build ZIP
//            ↓
//      Store in Nexus
//            ↓
//      GitHub Actions triggered
//            ↓
//      (terraform-action.yml)
//            ↓
//      Download ZIP from Nexus ✅
//            ↓
//      ZIP available locally ✅
//            ↓
//      Terraform runs
//            ↓
//      Upload ZIP → S3 ✅
//            ↓
//      Deploy Lambda ✅
//            ↓
//      API Gateway ✅