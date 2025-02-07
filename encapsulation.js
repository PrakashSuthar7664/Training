function BankAccount(balance) {
    let _balance = balance; // Private variable

    return {
        deposit: function(amount) {
            _balance += amount;
            console.log(`Deposited: ${amount}, New Balance: ${_balance}`);
        },
        getBalance: function() {
            return _balance;
        }
    };
}

const myAccount = BankAccount(1000);
console.log(myAccount.getBalance());
myAccount.deposit(500); 
console.log(myAccount._balance);



// class Example {
//     somePublicMethod() {
//       this.#somePrivateMethod();
//     }
  
//     #somePrivateMethod() {
//       console.log("You called me?");
//     }
//   }
  
//   const myExample = new Example();
  
//   myExample.somePublicMethod(); 
  
//   myExample.#somePrivateMethod(); 
  