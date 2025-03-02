class BankAccount{
    #balamce,
    #accountholder,
    #trasnactions,
    constructor(accountholder,balance){
        this.#balamce=balance;
        this.#accountholder=accountholder;
    }
    get accountholder(){
        return this.accountholder;
    }
    get balance(){
        return this.balance;

    }
    set accountholder(accountholder){
        this.accountholder=accountholder;
    
    }

}