#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    accountNumber;
    accountHolder;
    balance;
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
        }
        else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
        }
        else {
            console.log("Invalid withdrawal amount.");
        }
    }
    getBalance() {
        return this.balance;
    }
    getAccountDetails() {
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
