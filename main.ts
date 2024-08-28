#! /usr/bin/env node
class BankAccount {
    private accountNumber: number;
    private accountHolder: string;
    private balance: number;

    constructor(accountNumber: number, accountHolder: string, balance: number = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }

    public getBalance(): number {
        return this.balance;
    }

    public getAccountDetails(): void {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Balance: ${this.balance}`);
    }
}

const myAccount = new BankAccount(123456, "Aliza", 1000);
myAccount.getAccountDetails();
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.getAccountDetails();
