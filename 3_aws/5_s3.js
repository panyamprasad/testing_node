// --- S3 ---

// 1. What is Aws S3?
    // S3 means simple storage service, use this we can store and retrieve the data at any time and any where.
    // It is similar to hardDisk, we can store files like images, videos and audios.
    // it is durable it means the data is safe even if anything fail in aws services.
    // S3 is scalable, secure and cheep.

// 2. What is S3 bucket and object?
    // Bucket means folder, we can create any number folders in the s3, each bucket name is unique.
    // Object means file, that is stored in the bucket.

// 3. What are the S3 storage classes?
    // S3 provide different storage classes based on the purpose we can use it.
    // Standard -- For everyday use we can use this.
                // It is very cost compare to remaining.
                // And it is very fast
                // Data is store in multiple places for safety purpose.
                // Used this to store profile photos, frequently used documents.
    
    // Standard IA -- In frequently used
                // Store the files those not used daily, but need quick access when required.
                // Less cost compare to standard.
                // it is fast
                // Store backup files, monthly reports, old but important files.
    
    // Intelligent-Tiering:
                // S3 automatically move the file from frequent to inFrequent storage depends on how you are use them.
                // Fast access..
                // Use for Logs, files
            
    // Glacier:
                // Cheap 
                // Take a 5 min time
                // Old projects backup
        
    // Glacier Deep Archive:
                // The files not required, but keep store it long time.
                // Cheap
    
   // 🧠 Real Example from a Company:
                // Imagine a banking application:
                    // Profile Photos and documents - Standard
                    // Monthly reports -- Standard-IA
                    // Daily transaction logs -- intelligent-Tiering
                    // Old files -- Glacier
  //---------------------------------------------

// 4. How do you control access to s3?
    // IAM Policies: Provide the permissions user or roles to access the data.
    // Bucket Policies: Apply the rules to the bucket.
    // ACL (Access Control Lists): Grant read/write access to the users.
    // Presigned Url: This are temporary url use this to read and write the files.

// 5. Explain S3 Versioning?
    // Versioning means backup. If any file delete or update we can store the previous file or delete file in backup.
    // We can enable this options in s3 bucket settings or we can enable this from cloudformation or yaml file configuration.
    // Why use:
        // For any accidental delete
        // Accidental updata
        // Data Protection

// 6. How do you handle large files in S3?
    // Basically if we upload the large file like 5 gb or more, if any network issues the upload is fail again it will start again.
    // To overcome this problem, we use the multipart upload.
    // Multipart upload means:
            // Intend of load the full file at once, we can split the files in small chucks.
            // These chucks are uploaded in parallel.
            // If any think is fail, it will not impact remaining , only that chuck will reupload.
            // After upload all the chucks, S3 combined them into one and store it in bucket.
    // This is more faster, more reliable and save the time.

    // How will do this process:
        // First we Install AWS SDK. This will give us the tools to upload the file to s3.
        // We have to import the modules like
        // fs - read the local file like chucks.
        // s3Client - It will connect to s3.
        // Upload - It will handle the chuck upload. This class automatically split the file into chucks and process them to upload.

        // 📝 In simple words — Process Summary:

        // 📂 Use fs to read the file from your local system.

        // ☁️ Use AWS SDK (Upload class) to split the file into chunks.

        // 🚀 Upload chunks to S3 in parallel.

        // 🧩 S3 joins the chunks back into one file.

        // 🆗 Done ✅
//-----------------------------------------

// 7. What is S3 Event Notification?
    // Based on the object creation/update in s3. Some aws services trigger automatically like Lambda, sns/sqs.
    // Based on the configuration we have trigger the services.
    // When we upload the file/image to s3, we have to create the event notification in the s3.
    // Based on the requirement we configure it like lambda/sns/sqs.

// 8. How do you optimize S3 for performance??
    // Use the multipart upload for big files.
    // Avoid storing all files with similar prefixes.
    // Use the right storage class based on usage.
    // Maintain the lifeStyle rules to automatically move the old file to cheaper storage and delete it after a period.

