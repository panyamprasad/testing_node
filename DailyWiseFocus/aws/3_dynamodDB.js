// --- DynamodDB ---

// 🟡 1. What is DynamoDB?

        // Amazon DynamoDB is a fully managed NoSQL database provided by Amazon Web Services.
        // It is fast, scalable, and serverless — so you don’t have to manage servers, upgrades, or backups manually.
        // It can handle large amounts of traffic automatically.

    // 🟢 Why do we use it?
        // Because it gives very fast performance (single-digit millisecond response time).
        // It scales automatically when the traffic increases.
        // No need to worry about infrastructure — AWS manages it.

    // 🧾 Example:
        // Suppose we want to build any e-commerce or social netwrok applicaitons.
        // We need to store porifle, orders and products.
        // During the storing and time, dynamoDb automatically scalling and store the data.
        // Performance wise it will fast.
//------------------------------------------------------------

// 🟡 2. Explain Partition key and Sort key?

    // Partition Key:
        // Partition key is nothing but it is primary key.
        // Partition key main key it will uses to decide where to store the data.
        // It must be unique.
    
    // Sort Key:
        // It is optional, basically will use this for sorting purpose. 
        // It will allow us to create multiple items under the same partition key.
        // Basically sortKeys are like cratedData, orderId like that.
    
    // Ex:
        // For example we build e-commerce order table is there. One user order multiple orders. So here userId is unique as partition key, but orderId and crated data is different so these are the sort keys.
        // So we can easily filter the iteams useing thie userId, cratedData or orderId.
//------------------------------------------------------------

//  3. What is the Index?
    // Index in the one of the way to access the data from this dynamoDB.
    // Normaly will use the Portition key and sort key to featch the data from db.
    // Some times we want to search a differnt attributes. That's way the index will help us.
    // It will help us query data in another way without scanning full table.

    // Uses:
        // Speed up queries and get the data with other fields.
        // To avoid full table scans, which are slow and expensive.
        // When we want search or filter a column that is not a primary key.
    
    // There are two types of index are there.
        // Global secondary index : 
                // If both Partition key and sort key are different we can use the global secondary index.
                // We can use this we can filter the data in complete different way.
                // Ex: Basically in Orders table : 
                    // Primary Key → userId (Partition Key) + orderDate (Sort Key)
                // But we change the both we fetch the data like below:
                    // Partition Key → orderStatus
                    // Sort Key → orderId
                    const params = {
                        TableName: "Orders",
                        IndexName: "OrderStatusIndex",  // GSI name
                        KeyConditionExpression: "orderStatus = :status",
                        ExpressionAttributeValues: {
                            ":status": { S: "Delivered" }
                        }
                    };

        // Local seconadary index : 
                // If Parition key is same but use the different sort key we use the Local secondary index.
                // It will useful when we need data with different sortkey and same partition key.
//----------------------------------------------------------------------

// 4. Explain DynamoDB architecture and key concepts?
    // 1. DynamoDB is fully managed , no-sql, serverless and key-value database. it will use the distributed architecture and give the fast performance.
    // 2. Data store in tables, iteams and attributes. Each item can identified with Partition key and sorting with sort key.
    // 3. And it have the index to filter and get the data from different Parition and sort key.
    // 4. It have the two types of Index GSI and LSI. Based on the request will use this.
    // 5. And It can have the streams, real time processing. Because of this it will give the hign performance without managing the servers.
//----------------------------------------------------------------------

// 5. What is RCU & WCU in Amazon DynamoDB?
    // RCU menas Read capacity Unit
    // WCU meand write capacity Unit.
    // Uisng this we can find the speed limits on how much fast your table can read and write the data.
    // Use this we can control the cost
    // And Handle the traffic control
//----------------------------------------------------------------------

// 6. What is DynamoDB Streams?
    // 1. Streams are change traker, in the dynamoDB.
    // 2. When somthing happend in the data like insert, update, delete use this streams we can capture the event.
    // 3. Use the capture event we can trigger the actions like sending notificaitons, update another table or sync the data.
    // Use:
            // Tracking purpose who changed the data.
            // Sync the data between the regions or tables
            // Trigger the events.
            // Evnt driven architecutres.
//----------------------------------------------------------------------

// 7. What is TTL (Time to Live) in DynamoDB?
    // TTL (Time to Live): TTL means it will delete the records automatically form the db. 
    // We have to set the time for each item, when it reach that time record autmatically delete.

    // Use:
        // Always maintain the table clean and maintanable.
        // To save the storage data.

    // We have to add the numaric attribute like expiretime.
    // We have to enable to TTL for the table and we have to tell db which attribute to use.
    // Basically use this for 
                    // OPT/Tokes
                    // Temporary notificaitons
                    // session Handling
//-----------------------------------------------------------------------

// 8. Explain Global Tables (Multi-region replication)?
    // Global tables are allow us to replicate the dynamoDB tables accross multiple regions automatically.
    // Event change set like inert, update, create and delete can be update one regions it will automatically change other regions.
    // There is no manuval replicatioin required AWS Handle everything.

    // Advantages:
        // Users can connect nearest regions.
        // If one region fails, the traffice will move to anohter region.
        // For Disaster recovery. If any regional failurs.
        // Ditribute read/write traffic accors the multiple regions to handle the hevay load.
//-----------------------------------------------------------------------

// 9. Common DynamoDB Real-Time Use Cases?
    // 1. Store data and login sessions with fast accees.
    // 2. Auto expire session using the TTL.
    // 3. Triggers workflows automatically.
    // 4. MilliSeconds api response.
//-----------------------------------------------------------------------

// How to configure the dynamoDB in serverless applicaiton?
    // Basically will use the serverless yaml or cloudformation we can configure the dynamoDB tables.
    // Insted of manuvally creation we use this we can create tatbles, stream, replication and other details we can configure autmaticaaly when we upload this files.
//-----------------------------------------------------------------------

// How do you handle dynamoDB error in lambda?
    // Using the try/catch block.   
    // Implementing the retry mechanisam to fix this issues.
//-----------------------------------------------------------------------

// How do you trigger lambda form dynamoDB?
    // Enable the streams in the dynamoDB table, and attach the lambda funcions or event. When the data insert/updata/delete the lambda will trigger.
//-------------------------------------------------------

// How to implement ttl in table?
    // Enable the ttl in dynamoDB table.
    // Add the value when we inserting the data.
    // Once the value is expire the record will delete automatically.
    // Ex: if we add the attribute expireTime.. once the time is reach record will delete.
//------------------------------------------------------

// How to do multi-region replication in serverless apps?
    // Use the dynamoDB global tables.
    // Add the replica regions from yaml or manuvall.
    // If we add the data one region it will automatiicaly replicating other region.

// How do you optimize DynamoDB cost in serverless apps?
    // Use On-Demand tabels for unpredictable traffic.
    // Use TTL for delete expired data items.
    // Use Batch for read/write to reduce number of requests.
    // Enable to Autoscaling.


