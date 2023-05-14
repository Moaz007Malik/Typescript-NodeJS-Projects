import inquirer from "inquirer";
import chalk from "chalk";


let answers = await inquirer.prompt([
    {
        name: "number1",
        type: "number",
        message: "Please enter 1st number: ",
    },
    {
        name: "number2",
        type: "number",
        message: "Please enter 2nd number: ",
    }
])
let operation = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Please select an operation:",
        choices: [
            "+",
            "-",
            "*",
            "/",
            "%"
        ]}
])
switch(operation.operation){
    case "+":
        console.log(chalk.blue("The sum of " + answers.number1 + " and " + answers.number2 + " is " + (answers.number1 + answers.number2) + "."));
        break;
    case "-":
        console.log(chalk.red("The sub of " + answers.number1 + " and " + answers.number2 + " is " + (answers.number1 - answers.number2) + "."));
        break;
    case "*":
        console.log(chalk.yellow("The mul of " + answers.number1 + " and " + answers.number2 + " is " + (answers.number1 * answers.number2) + "."));
        break;
    case "/":
        console.log(chalk.green("The div of " + answers.number1 + " and " + answers.number2 + " is " + (answers.number1 / answers.number2) + "."));
        break;
    case "%":
        console.log(chalk.whiteBright("The mod of " + answers.number1 + " and " + answers.number2 + " is " + (answers.number1 % answers.number2) + "."));
        break;
    default:
        console.log("Unknown Operation.");
}