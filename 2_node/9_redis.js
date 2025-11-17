// ---> What is Redis?
//         1. Redis means Remote dictionary server.
//         2. It is in-memory storage, data is storage in Ram, not in disk.
//         3. Used for:
//                 Cache - Store for temporary data for fast access.
//                 Session storage - User login sessions.

// ---> How to connect Redis?
//         1. We have to install the Redis dependency.
//         2. Then create client and connect the redis use the connect() method.
//         3. Use set() and get() we can store and retrieve the data.
//         4. In storage time we include the expire time.

// ---> When will store data in Redis?
//         1. When we fetch the data from db or external api, the data will expiry shortly. The expire time will add when store the data.

//         2. So we can store it in Redis, and from the next requests will get it from redis. If the data is not available in redis then again api call will happen.
        
//         3. It mean Redis is temporary storage, and it is very fast compare to db.

// ---> Api call scenarios?
//         1. First request → Redis has nothing → call external API → save in Redis (with 5 min expiry).

//         2. Second request (within 5 min) → Redis still has the data → return it directly (no external API call).

//         3. After 5 min expires → Redis removes it → next request will again call the external API → store fresh data in Redis.