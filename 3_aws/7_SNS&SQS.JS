// SNS
    // SNS means simple notification service.
    // Sns is fully managed messaging service. Using this we can send the notifications from one service to multiple subscriners.
    // There are different subscribers are there.
            // SMS
            // Email
            // Http
            // Https
            // EC@, lambda etc..

    // what are the topic & Subscriptions?
        // Topic: Topic is nothing but it is a group.
        // Subscription: It means users who/what messages will recevied.

// SQS
    // SQS means simple Queue service.
    // It allows to send, recevie and store the messages in the queue
    // It will work as asynchorous way. 

// Differece between sns & sqs
    // SNS: sns push the notificaiton to multiple subscribers(sms, email, lambda etc).
            // It's used for broadcasting one to many.
    // SQS: sqs store the messages until consumers pull and push the notificaitons.
            // It's used for task queue.
            
