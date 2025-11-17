//---> clear step-by-step guide for setting up a CI/CD pipeline with GitHub and deploying to AWS:
//        1. First, we need to have a GitHub repository where our application code is stored.
//        2. For Node.js, ensure you have:
//           - A package.json file with all dependencies.
//           - A build script defined in package.json (e.g., "build": "npm run build").
//           - Unit tests defined (e.g., using Jest or Mocha).
//           - If serverless, a serverless.yml file for Lambda/API Gateway configuration.
//        3. Create a folder in your project: Create a file, e.g., ci-cd.yml.
//        4. In the ci-cd.yml file, define the workflow:
//           - Checkout code
//           - Setup Node.js
//           - Install dependencies
//           - Run tests
//           - Configure AWS credentials
//           - Deploy to AWS (Serverless or other deployment commands)
//        4. Add AWS Secrets in GitHub:
//           - Go to your GitHub repository settings.
//           - Under "Secrets and variables", add AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY.
//        5. Push Code to GitHub:
//           - Commit and push your code changes to the GitHub repository.
//        6. Monitor the Workflow:
//           - Go to the "Actions" tab in your GitHub repository to monitor the CI/CD workflow execution.
//        5. Finally, we will set up a CI/CD pipeline using AWS CodePipeline to automate the entire process from code commit to deployment.

//      -------------------------------------------------

// ---> If any thing fail in deployments what will do the maintenance...?
//      1. First, we check the CloudWatch logs to identify the root cause of the deployment failure and start the investigation.
//      2. If we’re unable to fix the issue immediately or don’t find a quick solution, we rollback to the previous stable version to restore the application.
//      3. Next, we reproduce the issue in a lower environment (like dev or QA) to analyze and fix the root cause.
//      4. After identifying and fixing the issue, we test the fix thoroughly in the lower environment.
//      5. Once verified, we redeploy the fixed version to production using the CI/CD pipeline.
//      -------------------------------------------------

// ---> What is CI-CD how it will work?
//		1. CI/CD stands for Continuous Integration and Continuous Deployment, which means an automated deployment process — instead of deploying manually.
//		2. When we push the code to GitHub, the CI/CD pipeline (like Jenkins, GitHub Actions, or GitLab CI) automatically gets triggered.
//        3. It first installs all dependencies, then runs unit tests and integration tests.
//        4. If all tests pass, it verifies code quality through tools like SonarQube using quality gates.
//        5. After successful verification, the pipeline builds a Docker image for the application.
//        6. This Docker image can be deployed to any environment (dev, QA, prod) without dependency issues.
//        7. The image is deployed into containers, and Kubernetes manages these containers — handling deployment, scaling, load balancing, and self-healing (automatically restarting failed containers).
//        8. Finally, once the deployment is done, the team performs validation and monitoring to ensure everything is working as expected.
//		------------------------------------------------------
