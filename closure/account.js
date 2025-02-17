function createBankAccount(balance){
    
    let bal=balance;
    return {
        deposit : function(amount){
             bal+=amount;
             return bal;
        },
        withdraw: function(amount){
            bal-=amount;
           return bal;
        },
        getbalance: function(){
            return bal;
        }
    };

}
const account = createBankAccount(200);
console.log("original balance");
console.log(account.getbalance());  

console.log(" after money deposit ");
console.log(account.deposit(50));
console.log(" after money withdraw");
console.log(account.withdraw(30)); 
console.log("final balance ");
console.log(account.getbalance()); 