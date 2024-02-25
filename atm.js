import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        type: `list`,
        name: "Enterance Confirmations",
        choices: ["Cradit Card", "BioMatric"],
        message: "Please Enter Your Cradir Card Or BioMatric  "
    },
    {
        type: `list`,
        name: "Account Selction",
        choices: ["CINC", "Account Number", "Number"],
        Message: "Please select the following:",
    },
    {
        type: 'number',
        name: "UserID",
        message: "Please enter your UserID"
    },
    {
        type: 'number',
        name: "UserPIN",
        message: "Please enter your UserPIN"
    },
    {
        type: `list`,
        name: `Account Type`,
        choices: ["Current Account", "Saving Account"]
    },
    {
        type: `list`,
        name: "Transactiontype",
        choices: ["Fastcash", "Withdraw"],
        message: "Please select your transaction type"
    },
    {
        type: `list`,
        name: "amount",
        choices: [500, 1000, 5000],
        message: "Please select your amount",
        when(answers) {
            return answers.Transactiontype === "Fastcash";
        }
    },
    {
        type: `number`,
        name: "amount",
        message: "Please select your amount",
        when(answers) {
            return answers.Transactiontype === "Withdraw";
        }
    },
]);
console.log(answers);
if (answers.UserID && answers.UserPIN) {
    const balance = Math.floor(Math.random() * 1000000);
    const enteramount = answers.amount;
    if (enteramount <= balance) {
        let remain = balance - enteramount;
        console.log(`${enteramount}withdraw sucessful and your remaining balance is ${remain}`);
    }
}
;
