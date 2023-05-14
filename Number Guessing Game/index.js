import inquirer from "inquirer";
async function startFunc() {
    const systemGeneratedNo = Math.floor(Math.random() * 10);
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Write your guess between 1 to 10: "
        }
    ]);
    const { userGuess } = answers;
    console.log(userGuess, "is your guess and", systemGeneratedNo, "is the guess number.");
    if (userGuess === systemGeneratedNo) {
        console.log("Yeah! Your answer is correct. \nYou Win!");
    }
    else {
        console.log("You lost!");
    }
}
async function startAgain() {
    do {
        await startFunc();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: " Do you want to restart? Press Y or N: "
        });
    } while (again.restart == "Y" || again.restart == "yes" || again.restart == "y" || again.restart == "Yes");
}
startAgain();
