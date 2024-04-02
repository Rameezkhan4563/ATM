import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1235;

let answer = await inquirer.prompt([{
    message: "Enter your pin here",
    type: "number",
    name: "Pin" 
}])

if(answer.Pin === myPin){console.log("Welcome! lets proceed");}
else{console.log("wrong pin");}
