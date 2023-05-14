import inquirer from "inquirer";
let vowel = "aeiou";
let word = await inquirer.prompt([
    {
        name: "word",
        type: "input",
        message: "Enter a word: ",
    }
]).then((answer) => {
    const word = answer.word.toString().toLowerCase();
    let found = false;
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
