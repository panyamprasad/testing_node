// 1. What is difference between var, let and const?
// Ans:
        // var: Var is the function scope, it means we can access the variables anywhere in the function. 
                // And it is hoisted, we can reassign the value.
        // let: Let is the blocked scope, it means we can't access this variable outside the block. And it is hoisted, we can reassign the value.
        //Const: Const is similar the let, but we can't reassingn the value for this.

// 2. Explain the closures with real time usecase?
    // Ans: A Closure allows a function to access a variable from it outer scope, even after the finish outer function execution.
    // Ex:
            function createBankAccount(initialBalance){
                let balance = initialBalance;

                return {
                    deposit: (amount) => {
                        balance += amount;
                        console.log('Deposit amount :' + amount + ', current balance : ' + balance);
                    },

                    withdraw: (amount) => {
                        if(amount > balance){
                            console.warn('Insufficient Balance');
                        }else{
                            balance -= amount;
                            console.log('Withdraw amount :' + amount + ', current balance : ' + balance);
                        }
                    },

                    checkBalance: (amount) => console.log('Balance amount :' + amount + ', current balance : ' + currentBalance)
                }
            }

            const panyamAccount = createBankAccount(100);
            panyamAccount.deposit(400);
            panyamAccount.withdraw(50);
            panyamAccount.withdraw(150);
            panyamAccount.checkBalance;

// Advantages:
            // We can keep the variable private without exposing them.
            // You can stop the variable pollution.
            // You can create the function factory. It means inside the function we can maintain mutiple methods and inner functions.
            // You can keep the varible alive between the multiple calls, even the outer scope completed.

// Disadvantages:
            // Memory leaks: For example for large data structures we can refer in anywhere, we can't close them it will stay in memory it's causing memory leak.
            // Difficult to debugging and maintenance: New developers can't understand for this there is multiple nested loops.
//-------------------------------------------------------------------------------------------------



     