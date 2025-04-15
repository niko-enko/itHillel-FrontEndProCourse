class BankAccount {
    constructor(initialDeposit) {
        this.money = initialDeposit;
    }

    deposit(number) {
        this.money += number;
    }

    withdraw(number) {
        this.money -= number;
    }

    getBalance(){
        return this.money;
    }

}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300