// Streams, Buffers, Cluster & Worker Threads

//--- Buffers ---
    // 1. Buffer is temporary memory, it will store binary data (like audio/videos) while it's being transferred between the processes.
    // 2. Javascript basically allows strings and JSON, but binary data are handled using buffers.
    // 3. It is like a bucket they stored temarory before used it.
    // Ex:
            const buf = Buffer.from('Hello');
            console.log(buf); // Store as binary data
            console.log(buf.toString()); // covert binary data to string.

    // UseCases:
        // While using the large files like videos, instead of loading the full file into memory, NodeJs loads it in chuncks into a buffer.
        // Used to streaming the data and processing the image or video.
    
    // Interview Questions:
        // 1: What is Buffer?
        // Ans: It is temparory stroage, it will store binary data, used when working with streams or file system.

        // 2: Why buffers are needed in NodeJs?
        // Ans: Because JavaScript doesn't handle binary data natively.

        // 3: How do you convert a buffer to a string?
        // Ans: Using .toString() method we can convert buffer to string.

        // 4: What is Buffer.alloc() and Buffer.from()?
        // Ans: Buffer.alloc() is used to create a empty buffer. Buffer.from() is created from existing data.
//------------------------------------------------------------------------------------------------------------

//--- Streams ---
    // 1. Streams are used to read or write the data piece by piect instead of loading full data at once. Basically we can use this for large files like audio/video or network files.
    // 2. There are different types of streams are there:
            // 1. Readable - read the data
            // 2. Writable - Write data
            // 3. Duplex - Both read and write
            // 4. Transform - Modify the data
    // Ex:
        // const fs = require('fs');
        // const readable = fs.readFileSync('test.txt', 'utf-8');
        // const Writable = fs.writeFileSync('write.txt', 'utf-8');

        // readable.pipe(Writable); // useing pipe we can read/write the file.


    // EX:2 Want to copy data from input file to out file:

        const fs = require('fs');

        const readable1 = fs.createReadStream("C:/Users/prasad/OneDrive/Desktop/input.txt");
        const writable2 = fs.createWriteStream("C:/Users/prasad/OneDrive/Desktop/output.txt");

        readable1.pipe(writable2);

        console.log("File copied successfully.");
    //---------------------------------------------------------
    // Ex:3 Chain multiple pipes -- Compress a file
        const zip = require('zlib');

        const readable2 = fs.createReadStream('C:/Users/prasad/OneDrive/Desktop/input.txt');
        readable2.pipe(zip.createGzip())
                .pipe(fs.createWriteStream('C:/Users/prasad/OneDrive/Desktop/input.txt.gz'))
                .on('finish', () => console.log('File upload successfully'));
//------------------------------------------------------------------------------------------------

//--- Work threads --
    // 1. NodeJs is signle threaded, but some tasks are blocked it like cpu intensive tasks.
    // 2. So work threads allows to run the multiple threads parallal to handle the cpu intensive tasks.

    // Usecases:
        // 1. image or video processing
        // 2. Heavy calculation. 
        // 3. Parshing large data.

//-------------------------------------------------------------------------------------------------

//--- Cluster ---
    // Cluster is used to handle the multiple request symantaniosaly, because it will create the multiple processes using the cpu cors.
    // It will increase the performance for nodeJs applicaiton.

//-------------------------------------------------------------------------------------------------

//--- Real-Time Scenario --- Video Upload Service...
    // 1. Buffer - It is temparory stroage, upload the binary data.
    // 2. Stream - It will read the data piece by piece instend of load all the file at a time. and uplod to s3.
    // 3. Work Thread - Process and compress the video.
    // 4. Cluster - It will handle the multiple video uploads simultaneously.

//-------------------------------------------------------------------------------------------------