// File System & Streams
// --- File System ---
//      1. Node js have the in build function as fs module(file system).
//      2. The file system allows us to read, write, update, delete and rename the files, in both synchronously and asynchronously.
//  Example:
        const fs = require('fs'); // import fs from 'fs'; --ES6
        const { threadCpuUsage } = require('process');
        fs.readFile('C:/Users/prasad/OneDrive/Desktop/VCM/JavaScript/eventLoop.txt', 'utf8', (err, res) => {
            if(err) throw err;
            console.log("File data : ",+ res.length);
        });

// --- Stream ---
//      1. Stream is nothing but way to handle the file. 
//      2. It means handle the data piece by piece, instead of loading the all the data at once.
//      3. Useful for large files, network data, video/audio file etc.
//      4. NodeJs have 4 different types of streams.
//          1. Readable --> Reading data
//          2. Writable --> writing data
//          3. Duplex --> Both read and write
//          4. Transform --> Modify the data.
//      Example:
            // const fs = require('fs');
            const fileStream = fs.createReadStream('C:/Users/prasad/OneDrive/Desktop/VCM/JavaScript/eventLoop.txt', 'utf-8');

            fileStream.on('data', (chunk) => {
                console.log("Reading data : ", chunk.length);
            });

            fileStream.on('end', () =>{
                console.log("Completed....")
            })

// -- What is Backpressure in Node.js? --
//      1. Backpressure is a flow control mechanism in NodeJs Streams.
//      2. When the Readable stream produces data faster than writable stream.
//      3. NodeJs pausing the readable stream until the writable stream ready for taking more data.
// ------------------------------------------------------

// ---> What is difference between .readFile() and .crateReadStream()..?
//          1. Both methods are using to read the data from the file. 
//          2. But they have a difference in their approach to memory management.
//              .readFile(): 
//                  1. Reads the entire file at once into memory.
//                  2. Simple to use the small files.
//                  3. Not efficient for large files.

//              .createReadStream():
//                  1. Read the file piece by piece.
//                  2. Very efficient for larger files.
// -------------------------------------------------------

//---> What is difference between buffer and stream?
//      Buffer:
//          1. Buffer is temporary storage in memory.
//          2. It hold the binary data when reading/writing the file.
//          3. Once it's done it will process.
//          Example:
                const buffer = Buffer.from("Hello");
                console.log(buffer);

//      Stream:
//          1. Stream is like a pipeline.
//          2. It will read the file piece by piece instead of waiting for full file.
//          3. It will work for large files like video/audio etc.
//          Example:
            // const fs = require('fs');
            const stream = fs.createReadStream('C:/Users/prasad/OneDrive/Desktop/VCM/JavaScript/eventLoop.txt', 'utf-8');

            stream.on('data', chunk => {
                console.log('Stram data : ' ,chunk.length);
            })
//---------------------------------------------------------------------------

//  1. Streams are used to process data in chunk-by-chunk instead of load full data at once in memory.
//  2. In Steams we are different types readable streams read the data, writable steam write the data, transform it will modify the data.
//  3. And these are commonly used for large file processing, file uploads, CSV Imports, compression and real time data handling.

//---> How will store data in dynamoDB using .csv file if it will more than 20gb?
//      - For Large file should never read whole file into memory. Using steams we can write the data in db in batches.
//          1. At the first we have to store the file in S3.
//          2. Because we no need to store in application server and Using s3 we can do the lambda trigger.
//          3. After that use stream we should read the file from s3.
//          4. Then will use the csv parser read the data row by row.
//          5. And convert the each row into a dynamoDB item.
//          6. And use the BatchWrite in batches of up to 25 items. Until the file is complete.

//      - But in very large file in enterprise applications we follow the different way.
//          1. For large file 20, 50, 100gb files, first will store file in S3.
//          2. After file uploaded, a lambda will trigger, And start the process.
//          3. So the file is too large, will split the file in multiple parts using steam.
//          4. Then every split file will push to SQS.
//          4. Then lambda scales automatically, and execute all the split files parallel.
//          5. Then using the streams we can process the csv records,and store the data in dynamoDb using batch writes.
//          6. If any thing fail,will use the retry mechanism, after several retries still fails will use DLQ.
//          7. Then will use the cloud logs and will fix the issue.

// Upload Lambda -> S3 -> Lambda Trigger -> SQS -> Lambda Workers -> DynamoDB.
// Here we need IAM Permission for upload for read and push to sqs and store to DynamoDB.