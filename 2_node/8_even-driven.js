// -- Event Driven Architecture --
    // Event driven architecture means design pattern, here componenets and modules are communicate and respond through the events, instead of calling functions or methods directly. 
    // It will making them faster, flexiable and scalable.
    // In Event Driven Architecture, one componenet release an event, other componet listen that event and take the action.
    // For example, when a user clicks a button, submits a form, or receives a message, these actions can trigger events that other components can respond to.
//-------------------------------------------------------------------------------------------------

// Difference between EDA and Request-Response Architecture
    // Request-Response Architecture: This is a traditional architecture, where a client sends a request to as server, until the server process this request and sedn the response back, the remaing events will be blocked.
    // EDA: In EDA, components communicate through the events, one componenet release an event, the next component listedn this, and take the further action. It is asynchronous, it means the other events will not be blocked.
//-------------------------------------------------------------------------------------------------

// What are the benefits of EDA?
    // 1. Scalability: EDA allows systems, and components can be add or remove the events, without affecting the other components.
    // 2. Flexibility: EDA allows systems to be more flexiable, as components can be added or removed without affecting the other components.
    // 3. Asynchronous Processing: EDA allows systems to process events asynchronously, which can improve performance and reduce latency.
    // 4. loosely coupled: It means, components are independent, they can be devloped and deployed independently.
// -------------------------------------------------------------------------------------------------

// What are the challenges of EDA?
    // 1. Complexity: EDA can be more complex than traditional architectures, as it requires a different approach to designing and building systems.
    // 2. Debugging and Testing: EDA can be more difficult to debug and test, as events can be triggered by multiple components, and it can be difficult to trace the flow of events.
//-------------------------------------------------------------------------------------------------

// How to implement EDA in Node.js?
    // In Node.js, we can implement EDA using the built-in EventEmitter class, which allows us to create and manage events.
    // Ex:
    const EventEmitter = require('events');
    const eventEmitter = new EventEmitter();

    // Listener for 'userRegistered' event
    eventEmitter.on('userRegistered', (user) => {
        console.log(`Welcome email sent to ${user.email}`);
    });
    eventEmitter.on('userRegistered', (user) => {
        console.log(`Logging registration for ${user.username}`);
    });

    // Function to register a user
    function registerUser(username, email) {
        const user = { username, email };
        console.log(`User ${username} registered successfully.`);
        eventEmitter.emit('userRegistered', user);
    }
//--- ---------------------------------------------------------------------------------

// How EDA is used in real-world applications?
    // 1. Microservices Architecture: EDA is commonly used in microservices architecture, where services communicate through events, instead of direct API calls.
    // 2. Real-time Applications: EDA is used in real-time applications, such as chat applications, where events are triggered by user actions, and other users can respond to these events in real-time.
    // 3. IoT Applications: EDA is used in IoT applications, where devices communicate through events, and other devices can respond to these events.
//-------------------------------------------------------------------------------------------------

// How EDA is used in microservices architecture?
    // 1. Basically Event driven architecture means system design patteran, used thie we communicate the components, modules throguht the event, instend of direct connecct with api.
    // 2. MicroServices means we can build multiple services indeually, each and every service can connect throught the Rest api's. So it is tightly copuled, because if any service down it will impact other.
    // 3. So to overcome this we can use EDA in microservices, we connect the services insted of api, we can use the events. It means if any service or module emit an event, the other services listen this and start the further actions.
    // 4.For example if we have the orderservice, payment servie, and email service. these all communicate throught the evnt instend of REST API's.
    // 5. If any user place an order, the order service emit this order and the remaing services listen this and do there process.
    // For Example: When a user places an order.
    // 1. Order Service: When a user places an order, the order service will create the order and emit an 'orderPlaced' event.
    // 2. Payment Service: The payment service will listen to the 'orderPlaced' event, and process the payment for the order.
    // 3. Inventory Service: The inventory service will listen to the 'orderPlaced' event, and update the stock for the ordered items.
    // 4. Notification Service: The notification service will listen to the 'orderPlaced' event, and send a confirmation email to the user.
//-------------------------------------------------------------------------------------------------

// Real-world example of EDA?
    // 1. E-commerce Applications: In e-commerce applications, when a user placed an order, the order service can release an 'order placed' event. Which can be listened by the inventory service to update the stock. And the notification service to send a confirmation email to the user.

    // 2. Social Media Applications: In social media applications, when a user posts a new status update, the post service can emit a 'newPost' event, which can be listened by the notification service to send a notification to the user's followers.

    // 3. Payment Processing Applications: In payment processing applications, when a user makes a payment, the payment service can release a 'paymentProcessed' event, which can be listened by the order service to update the order status, and the notification service to send a receipt to the user.
//-------------------------------------------------------------------------------------------------

// In Microservices we are uisng the EDA, but in my case one of the service is failidng, how to handle this?
    // In EDA, we can handle the failure of a service using the following approaches:
    // 1. Retry Mechanism: We can implement a retry mechanism, where the event is retried a certain number of times before giving up. This can be done using libraries like 'retry' or 'promise-retry'. 

    // 2. Dead Letter Queue: If retry is still fail after several attempts, We can use a dead letter queue, the faild event goes to the DLQ.This is pending issues box. Developer can check this and take the further action.

    // 3. Rollback mechanisam: If a payment fails after an order is placed, we might need to undo the other actions. And we can restore the stock and send the payment failure notification to the user.
    
    // 4. 
//-------------------------------------------------------------------------------------------------

// How eventEmitter will work in nodeJs.. How will connect one service to another service using this?
    // Ans: In Node.js, we can use the built-in EventEmitter class to connect one service to another service using events. Here is an example Explanation and code:
    // 1. Create an instance of the EventEmitter class.
    // 2. Define the events that we want to emit and listen to.
    eventEmitterA.on('userRegistered', (user) => {
        console.log(`Service A: User ${user.username} registered successfully.`);
        eventEmitterB.emit('userRegistered', user); // Emit event to Service B
    });

    eventEmitterB.on('userRegistered', (user) => {
        console.log(`Service B: Welcome email sent to ${user.email}`);
    });

// 3. In the first service, emit an event when a certain action occurs.
    function registerUserInServiceA(username, email) {
        const user = { username, email };
        console.log(`Service A: User ${username} registered successfully.`);
        eventEmitterA.emit('userRegistered', user); // Emit event to Service A
    }
    // 4. In the second service, listen to the event emitted by the first service and take the appropriate action.
    function sendWelcomeEmailInServiceB(user) {
        console.log(`Service B: Welcome email sent to ${user.email}`);
    }
    // 5. Call the function in the first service to see the event-driven communication in action.
    registerUserInServiceA('john_doe', 'john@example.com');
//-------------------------------------------------------------------------------------------------
// How to handle errors in EDA?
    // Ans: In EDA, we can handle errors using the following approaches:
    // 1. Error Events: We can emit an error event when an error occurs, which can be listened by other components to take the appropriate action.
    eventEmitter.on('error', (err) => {
        console.error('Error event received:', err);
    });
    // 2. Try-Catch Blocks: We can use try-catch blocks to catch errors and emit an error event.
    function riskyOperation() {
        try {
            // Some risky operation that may throw an error
            throw new Error('Something went wrong!');
        } catch (err) {
            eventEmitter.emit('error', err);
        }
    }
    riskyOperation();
    // 3. Monitoring and Logging: We can use monitoring and logging tools to track errors and take the appropriate action.
//-------------------------------------------------------------------------------------------------

// In microservices also we can handle DLQ and retry mechanism and we can close the chain, right?
    // Yes we can handle this in microservices but we must code it manuvaly in every service.
    // But use EDA the event broker handle this automaticaly, here there is no manuval process required.

//-------------------------------------------------------------------------------------------------
