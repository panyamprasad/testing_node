// async function test(){
//     try{
//         const data = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data2 = await data.json()
//         console.log(data2);

//     }catch{error}{
//         // console.error(error);

//     }

// };

// test();

	// function accountOpen(minimumBalance){
	// 	let balance = minimumBalance;
	// 	return{
	// 		deposit: (amount)=>{
	// 			balance += amount;
	// 			console.log('Balance : '+balance);
	// 		},
	// 		withdraw: (amount)=> {
	// 			if(amount > balance){
	// 				return console.log('Insufficient balance');
	// 			}else{
	// 				balance -= amount;
	// 				console.log('Withdraw completed');
	// 			}
	// 		},
	// 		balanceEnquiry:() =>{
	// 			console.log('BalanceEnqiry' + balance);
	// 		}
	// 	}
	// }
	
	// const account = accountOpen(500);
	// // account.deposit(400);
	// account.withdraw(99);
	// account.balanceEnquiry();

    // function removeDuplicates(){
    //     const seen = new Set();

    //     return function(arr){
    //         let result = [];
    //         for(let value of arr){
    //             if(!seen.has(value)){
    //                 seen.add(value);
    //                 result.push(value);
    //             }
    //         }
    //         return result;
    //     }
    // }

    // const unique = removeDuplicates();
    // console.log(unique([1,1,2,2,3,3,4,4,5,6]));

    // function sorting(arr){
    //     const unique = {};
    //     arr.forEach(value => {
    //         unique[value] = (unique[value] || 0) + 1;
    //     });
    //     return [...new Set(arr)].sort((a,b) => unique[b]-unique[a]);
    // }

    // console.log(sorting([1,1,1,2,2,2,2,3,3,3,3,3,2,2,3,3,4,4,4,4,3,2,1]))