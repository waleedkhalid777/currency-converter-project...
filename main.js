import inquirer from "inquirer";
// IN PKR
let conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0037,
        "PKR": 1,
    },
    // IN GBP
    "GBP": {
        "USD": 1.21,
        "PKR": 350,
        "GBP": 1,
    },
    // IN DOLLARS 
    "USD": {
        "PKR": 277.58,
        "GBP": 0.83,
        "USD": 1,
    }
};
// STEP TWO : USING INQUIRER
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "select your currency..?"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "select your conversion currency "
    },
    // conversion amount
    {
        type: "number",
        name: "amount",
        message: "enter your coversion amount"
    }
]);
// STEP 3 OUTPUT
const { from, to, amount } = answer;
// check input in given programs
if (from && to && amount) {
    // formula
    let result = conversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result} `);
}
else {
    // generate error 
    console.log("invalid inputs");
}
