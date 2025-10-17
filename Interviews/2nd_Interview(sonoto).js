// ---> 1. What are the Lambda Layers?
// 		1. Lambda layers are nothing but it is common code, or common libraries, we can share this entire project where we need it.
// 		2. For example if we have the common utilities and dependencies in multiple lambda functiions, we can kept this in single file or folder we can use this across all the files, this is called layers.
// 		3. Main use of layers are reduce the duplicate code.
// 		4. Improve the performance.
// 		5. Reduce the deployment package size.

// ---> 2. How you are debugging the logs?
// 		Debugging the logs in multiple ways depending on the stage.
// 			1. In local development will use the console.log and find the errors.
// 			2. For aws lambda, I check the logs in cloudWatch.
// 			3. This way I can find and fix  the issues quickely.
	
// ---> 3. How node will work? if it is single threaded?
// 		1. NodeJs is single threaded, but it will handle the asynchonous operations without blocking the code using the event loop.
// 		2. In the event loop it have the multiple phases to handle the asynchonous operations. The phases are like below:
// 			timerphase: this phase event loop execute the setTimout and setIntervels
// 			inputPhase: This phase event loop execute the all input callbacks.
// 			PollPhase: This phase it will poll the new input operations like reading files or network calls.
// 			CheckPhase: This phase setImmediate will execute.
// 			microTasks: This phase promises, asysn/await functions will execute.
// 		3. Like this nodeJs will work.
	
// ---> 4. Challenging task?
// ---> 5. Brif Introducation?
// ---> 6. Remove the duplicates from array, and sort the result based on the duplicate value count?
			function sorting(arr){
				const unique = {}; // Here we created a empty object.
				arr.forEach(value => { // And then are using the foreach loop and find the each number how many times appears.
					unique[value] = (unique[value] || 0) + 1;
				});
				return [...new Set(arr)].sort((a,b) => unique[b]-unique[a]); // And using the new Set removing the duplicate from array. And using the sort we can compare the counts and put the highest to lowest.
			}

			console.log(sorting([1,1,1,2,2,2,2,3,3,3,3,3,2,2,3,3,4,4,4,4,3,2,1]))