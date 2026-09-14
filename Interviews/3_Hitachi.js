//---> 1. Asked about the cloudFormation configuration and How will attach sqs.
//---> 2. Asked Scenario based question like how will store the .csv file from s3 to dynamoDB steps?
//---> 3. Asked After token validation we are called external API's and checking the permission? 
//        why we need this validation? in this place it will required or not? I thing so it's not required.
//          1. During the token validation if will do both authentication and authorization, 
//             don't need to check permission during the external api calls.
//          2. But in token validation we didn't check the permission we much check the permission during the external calls.
//          3. Most of the microServices we should check the permissions when we fetch the data from external api's.
//             Use External api baseURl along with clientId and secret Id will get the accessToken, use this will read the data.

//---> 4. When apiGateway trigger the lambda it's fetching the data from external API's, within a min will get the millions of request how will handle this.
