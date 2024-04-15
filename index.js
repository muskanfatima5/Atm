#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1214;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
}
;
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "Please select option",
        type: "list",
        choices: ["Withdraw", "Check balance"]
    }
]);
if (operationAns.operation === "Withdraw") {
    let withdrawAns = await inquirer.prompt([
        {
            name: "withdrawMethod",
            message: "Select a withdrawl method",
            type: "list",
            choices: ["Fast cash", "Enter amount"]
        }
    ]);
    if (withdrawAns.withdrawMethod === "Fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Select amount :",
                type: "list",
                choices: ["2000", "5000", "7000"]
            }
        ]);
        if (fastCashAns.fastcash > myBalance) {
            console.log("Insufficient balance");
        }
        else {
            myBalance -= fastCashAns.fastcash;
            console.log(fastCashAns.fastcash);
        }
    }
    else if (withdrawAns.withdrawMethod === "Enter amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance" + " " + myBalance);
        }
    }
}
else if (operationAns.operation === "Check balance") {
    console.log("Your balance is :" + myBalance);
}
else {
    console.log("Incorrect pin number");
}
