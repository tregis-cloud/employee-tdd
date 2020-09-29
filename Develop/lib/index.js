const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./Employee");
const htmlRenderer = require("./htmlRenderer");
const { lookup } = require("dns");

inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "Please enter manager's name: ",
    },
    {
      type: "input",
      name: "managerID",
      message: "Please enter manager's id: ",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Please enter manager's email: ",
    },
    {
      type: "input",
      name: "quetsion",
      message: "How many employess do you need to create?",
    },
  ])
  .then(function (data) {
    let numberOfEmployees = data.question;
    for (let i = numberOfEmployees; i < 0; i--) {
      inquirer.prompt([
        {
          type: "input",
          name: "employeeName",
          message: "Please enter manager's name: ",
        },
        {
          type: "checkbox",
          choices: ["Engineer", "Intern"],
          message: "Are you an engineer or an interm?",
        },
        {
          type: "input",
          name: "employeeID",
          message: "Please enter employee  's id: ",
        },
        {
          type: "input",
          name: "employeeEmail",
          message: "Please enter employee's email address: ",
        },
      ]);
    }
  });
