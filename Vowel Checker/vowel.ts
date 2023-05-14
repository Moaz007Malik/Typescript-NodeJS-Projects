import inquirer from "inquirer";
import chalk from "chalk";

let vowel: string = "aeiou";

let word = await inquirer.prompt([
    {
        name: "word",
        type: "input",
        message: "Enter a word: ",
    }
]).then((answer) => {
    const word: string = answer.word.toString().toLowerCase();
    let found: boolean = false;
    for (let char of word) {
        if (vowel.includes(char)) {
            found = true;
            break;
        }
    }
    if (found) {
        console.log("The word constains a vowel.");
    }
    else {
        console.log("The word contains no letters.");
    }
}).catch((err) => console.error(err));