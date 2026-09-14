//---> What is EventBridge?
//      1. EventBridge is one of the service in AWS.
//      2. Using this we can communicate different applications and services.
//      3. One service send an event, and event bridge automatically 
//         routes that event to respective services based on predefined rules.
//      4. In simple way event bridge is traffic police, based on single they will allow to service.
//
//---> What are components are there in Event Bridge?
//      - In Event Bridge has four main components
//          - Event: If any action happen in the system or api.
//          - Event Bus: It will receive and collet all the events
//          - Rules: Rules means it will decide where should we deliver the event. I mean services
//          - Targets: Target means nothing but services like lambda, sns, sqs.
//
//---> What is different between SNS/SQS and Event Bridge?
//      - Both SNS/SQS and EventBridge are support event-driven architecture.
//          1. Most of the projects, SNS and SQS are using for event-driven architecture.
//          2. SNS publish an event or message to multiple services and SQS stores the message and process it.
//
//          3. EventBridge is useful when we need more control and rules.
//          4. It means based on the content type should we distribute the event for specific services.