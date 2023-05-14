import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to find the word counts: "
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(`Your sentence word count is ${words.length}`);
