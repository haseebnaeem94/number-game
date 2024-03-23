#! /usr/bin/env node

import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 3 + 1);
const answers = await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message: "Please guess the number",
    }
]);
if(answers.randomNumber == answers.userNumber) {
    console.log("congralutions you guess the correct number");
}else {
    console.log("you guess wrong number please guess the number again");
}