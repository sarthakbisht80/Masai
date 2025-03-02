class BankAccount{
    #balance;
    #accountholder;
    #trasnactions;
    constructor(accountholder,balance){
        this.#balance=balance;
        this.#accountholder=accountholder;
    }
    get accountHolder(){
        return this.#accountholder;
    }
    get balance(){
        return this.#balance;

    }s
    set accountHolder(accountholder){
        this.#accountholder=accountholder;
    
    }

}
const account = new BankAccount("John Doe", 1000);
console.log(account.accountHolder); // "John Doe"
console.log(account.balance); // 1000
 
account.accountHolder = "Jane Doe";
console.log(account.accountHolder); // "Jane Doe"
