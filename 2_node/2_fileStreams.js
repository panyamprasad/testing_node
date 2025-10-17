// File System & Streams
    // --- File System ---
    // Node js have the in build function as fs module(file systme).
    // the file system allows us to read, write, update, delete and rename the files, in both synchronously and asynchronously.
    // Example:
        const fs = require('fs'); // import fs from 'fs'; --ES6
const { threadCpuUsage } = require('process');
        fs.readFile('C:/Users/prasad/OneDrive/Desktop/VCM/JavaScript/eventLoop.txt', 'utf8', (err, res) => {
            if(err) throw err;
            console.log("File data : ",+ res.length);
        });
    
    // --- Stream ---
    // Stream is nothing but way to handle the file. It means handle the data piece by piece, instend of loading the all the data at once.
    // Useful for large files, network data, video/audio file etc.
    // NodeJs have 4 different types of streams.
    // 1. Readable --> Reading data
    // 2. Writable --> writing data
    // 3. Duplex --> Both read and write
    // 4. Transform --> Modify the data.
    // Example:
        // const fs = require('fs');
        const fileStream = fs.createReadStream('C:/Users/prasad/OneDrive/Desktop/VCM/JavaScript/eventLoop.txt', 'utf-8');

        fileStream.on('data', (chunk) => {
            console.log("Reading data : ", chunk.length);
        });

        fileStream.on('end', () =>{
            console.log("Completed....")
        })
    // ------------------------------------------------------

    // What is difference between .readFile() and .crateReadStream()..?
    // Both methods are using to read the data from the file. But they have a difference in their approach to memory management.
    // .readFile(): 
            // 1. Reads the entire file at once into memory.
            // 2. Simple to use the small files.
            // 3. Not effcient for large files.

    // .createReadStream():
            // 1. Read the file piece by piece.
            // 2. Very effcient for larger files.
    // -------------------------------------------------------

    // What is difference between buffer and stream?
        //Buffer:
            // 1. Buffer is temporary stroage in memory.
            // 2. It hold the binary data when reading/writing the file.
            // 3. Once it's done it will process.
            // Example:
                const buffer = Buffer.from("Hello");
                console.log(buffer);
        
        //Stream:
            // 1. Stream is like a pipline.
            // 2. It will read the file piece by piece instend of waiting for full file.
            // 3. It will work for large files like video/audio etc.
            // Example:
                // const fs = require('fs');
                const stream = fs.createReadStream('C:/Users/prasad/OneDrive/Desktop/VCM/JavaScript/eventLoop.txt', 'utf-8');

                stream.on('data', chunk => {
                    console.log('Stram data : ' ,chunk.length);
                })
//---------------------------------------------------------------------------
