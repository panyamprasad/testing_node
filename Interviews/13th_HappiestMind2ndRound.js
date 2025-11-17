// What is event loop? Need end to end execution flow.. when will use each and every phase?
// What is prototype
// What is different between setTimeout and setImmediate how it will execute fs. When will use this?

//Input:
const words = ["foo", "app", "bar", "paper", "title", "egg", "add", "abc", "xyz", "aba"]
 
Output:
[
  ["foo", "app", "egg", "add"],     // pattern: abb
  ["bar", "abc", "xyz"],            // pattern: abc
  ["paper", "title"],               // pattern: abacd
  ["aba"]                           // pattern: aba
]

function getPattern(word){
	const map = new Map();
	let pattern = '';
	let charCode = 97;
	
	for(let ch of word){
		if(!map.has(ch)){
			map.set(ch, String.fromCharCode(charCode++));
		}
		pattern += map.get(ch);
	}
	
	return pattern;
}

function groupPattern(words){
	const group = new Map();
	
	for(let val of words){
		const pattern = getPattern(val);
		if(!group.has(pattern)){
			group.set(pattern);
		}
		groups.get(pattern).push(val);
	}
	return Array.from(group.values());
}

console.log(groupPattern(words));


// ----------------------------

const fs = require('fs');
 
console.log("Start");
 
process.nextTick(() => {
  console.log("nextTick 1");
});
 
Promise.resolve().then(() => {
  console.log("promise 1");
});
 
(async () => {
  console.log("inside async start");
  await Promise.resolve();
  console.log("async after await");
})();
 
setTimeout(() => {
  console.log("setTimeout 1");
}, 0);
 
setImmediate(() => {
  console.log("setImmediate 1");
});
 
fs.readFile(__filename, () => {
  console.log("fs.readFile callback");
  setTimeout(() => console.log("setTimeout (inside readFile)"), 0);
  setImmediate(() => console.log("setImmediate (inside readFile)")); 
});
console.log("End");

// Why setImmediate is executed before setTimeout inside fs.readFile?
// Because fs.readFile is I/O operation, when its callback is executed, it is in the Poll phase of the event loop. In this phase, after executing the I/O callbacks, the event loop checks for any setImmediate callbacks to execute before moving to the Timers phase where setTimeout callbacks are executed. Hence, setImmediate inside fs.readFile gets executed before setTimeout.

// Output Order:
// Start
// inside async start
// End
// nextTick 1
// promise 1
// async after await
// setTimeout 1
// setImmediate 1
// fs.readFile callback
// setImmediate (inside readFile)
// setTimeout (inside readFile)

// Explain the output step by step:
// 1. "Start" is logged first as it's a synchronous operation.
// 2. The async IIFE starts executing and logs "inside async start".
// 3. "End" is logged next as it's also synchronous.
// 4. "nextTick 1" is logged after the current operation completes, as it's scheduled in the nextTick queue.
// 5. "promise 1" is logged next, as it's resolved in the microtask queue.
// 6. "async after await" is logged after the await in the async function is resolved.
// 7. "setTimeout 1" is logged next, as it's in the timers queue.
// 8. "setImmediate 1" is logged after, as it's in the check phase.
// 9. "fs.readFile callback" is logged when the I/O operation is complete.
// 10. "setImmediate (inside readFile)" is logged next, as it's in the check phase of the event loop.
// 11. "setTimeout (inside readFile)" is logged last, as it's in the timers queue.