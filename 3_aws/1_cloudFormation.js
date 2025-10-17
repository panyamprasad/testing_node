// What is Cloud Formation:
    // 1. Cloud formation is an infrastructure as a code service from AWS.
    // 2. We can define aws infrastructure like EC2, Lambda, dynamoDB, S3 etc... in a yaml or json file.
    // 3. When we upload this file cloudFormation will create, update and delete all these resources automatically.
 
// Why use CloudFormation?
    // 1. We don't have to click and create the resources manuvally in aws console.
    // 2. Same template we can use multiple environments like dev, qa, stage and prod.
    // 3. We can store infrastructure in the git hub based on verion.
    // 4. And cloudFormation understand the order of creating resources.

// When will use CloudFormation?
    // 1. When we need multiple resources then will follow the cloudFormation instend of manuval creation.
    // 2. When we need automatic deployment using ci/cd
    // 3. When we need same infrastructure in all environments.

// Why do we use cloudformation instend of manuval creation?
    // It is automatic process, reduce the errors, version controling, and environment consistent.

// Stacks and template?
    // !. Template is file it includes all the resource related information.
    // 2. Stack is the live collection those resources are created form the template.

// What is changeSet?
    // change set is nothing but it is review of changes what we have made in template, before upload it will review to us.


    

