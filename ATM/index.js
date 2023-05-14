import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Kindly enter your iD: "
    },
    {
        type: "input",
        name: "userPIN",
        message: "Kindly enter your PIN: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type: ",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select your transaction: ",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [500, 1000, 2000, 5000, 10000, 200000],
        message: "Select your Amount: ",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your Amount: ",
        when(answers) {
            return answers.transactionType == "Withdraw";
        },
    }
]);
if (answers.userID && answers.userPIN) {
    const balance = Math.floor(Math.random() * 100000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remianing = balance - EnteredAmount;
        console.log("Your remaining balance is", remianing);
    }
    else {
        console.log("Insuficient Balance");
    }
}
