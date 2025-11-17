// Cloud Watch: 
    // 1. Cloud watch is monitoring and observability service in AWS.
    // 2. It will helps us to track the
            // Metrics: Metrics means cpu usage, memory and request count etc.
            // Logs: It will give the applicaiton and lambda logs
            // Alarms: If something is wrong any thing tha alaram will trigger.
            // Events
    
        // In cloud watch we have two types of monitorings
            // Basic monitoring
                // It is free of cost, every 5 min it will be refresh and update the logs
            // Details monitoring
                // We have to enable this service, we have pay for this service, every 1min it will refresh.
    
    // Where will use cloudwatch?
        // AutoScaling: Scalling polacies
        // EC2: Status check - 2/2  -- 1/2
        // Alarms: W`

    // Why Use cloudWatch?
        // 1. Monitoring application and servers 
        // 2. Find the problams early.
    
    // When use cloudWatch?
        // 1. If we want to monitor aws resources.
        // 2. When we need alerts if something went wrong.
        // 3. When we want debugging issues using log.
        // 4. When we want automatic scaling and recovery.
    
    // Example:
        // 1. When we deploy the nodeJs api on EC2.
        // 2. Enable the cloudwatch metrics and observe the CPU uses.
        // 3. Set the alarms if cpu uses > 80% it will send the notification.
        // 4. Store the applicaiton logs in cloudwatch for debugging.
//-------------------------------------------------------------------------------------------
// Interview Questions & Answers:
    // What is CloudWatch in aws?
        // Cloudwatch is useing for monitoring and obserability service in aws.
        // It will collect metrics, logs and set alarams to keep track the applicaiton in real time.

    // What are cloudwatch metrics?
        // Metrics are numaric data points, using for verify the cpu utilization, request count, collected form aws resources.

    // How Aws alerm will work?
        // Alerams are observe the metrics, logs and event if anything went wrong it will send the noticiaions.

    // Difference between cloudWatch & metrics?
        // cloudWatch logs are details text records(errors, requests), metrics are numaric data find the cpu and memory utilization.
    
    // Difference between cloudWatch & cloudTrail?
        // Cloudwatch is using for monitoring and obserability and cloudTrail is api activity and security auditlog.
    
    // What is the alarm?
        // AWS alarm is a feature of cloudWatch, it's monitor the specific metrics for the aws resources. It will trigger the notifications when the metrics cross the configured therehold.
            // There are three types of alarms
                // OK -- it will show in between the data
                // Insuffiecient -- default alarm
                // Alarm -- Cross the data.
    
