#! /usr/bin/eng node
import inquirer from "inquirer";
const answere = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    {
        message: "Enter your second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "select one of operators to perform action",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
//    CONDITIONAL STATEMENT
if (answere.operator === "ADDITION") {
    console.log(answere.firstNumber + answere.secondNumber);
}
else if (answere.operator === "SUBTRACTION") {
    console.log(answere.firstNumber - answere.secondNumber);
}
else if (answere.operator === "MULTIPLICATION") {
    console.log(answere.firstNumber * answere.secondNumber);
}
else if (answere.operator === "DIVISION") {
    console.log(answere.firstNumber - answere.secondNumber);
}
else {
    "Please select correct operator";
}
