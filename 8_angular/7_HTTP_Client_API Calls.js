//---> What is HTTP Client?
//---> 1. HTTP_Client is Angular's built-in service to communicate with backend api's.
//---> 1. Most front-end applications need to communicate with server through the Http protocol.
//---> 2. Using this we can download and upload the data and access the other backend services.
//---> 3. So angular provide the client HTTP API for angular applications. This class in @angular/common/http.
//---> 4. HTTP Client service features:
//          -> We can request to typed response values.
//          -> Will do Error Handling.
//                  -> A network or connection error can 
//          -> Request & Response Interception.
//                  -> Adding authentication headers to outgoing requests to a particular API.
//                  -> Retrying failed requests with exponential backoff.
//                  -> Caching responses for a period of time, or until invalidated by mutations.
//                  -> Customizing the parsing of responses.
//                  -> Measuring server response times and logging them.
//                  -> Collecting and batching requests made within a certain timeframe.
//                  -> Automatically failing requests after a configurable deadline or timeout.
//                  -> Regularly polling the server and refreshing results.
//-------------------------------------------------

//---> What is a Service?
//          -> A reusable typescript class, it contains business logic and API Communication.
//-------------------------------------------------

//---> What are the HTTP status Codes?
//          -> 200 - For Success
//          -> 201 - Created
//          -> 400 - Bad Request
//          -> 401 - UnAuthorized
//          -> 403 - Forbidden
//          -> 404 - Not found
//          -> 500 - Internal Server Error
//-------------------------------------------------

//---> What is CORS?
//          -> CORS means Cross-Origin Resource Sharing.
//          -> It is a Security Mechanism, implemented by browsers. 
//          -> It will Control whether a web application can access resources from other origin.
//          -> Angular application call backend API's hosted on different domains, Ports or protocols.
//
//-------------------------------------------------

//---> Why do we need CORS?
//          -> To protect data from unknown users or api's when they accessing data without any permission. 
