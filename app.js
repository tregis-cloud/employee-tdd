const inquirer = require("inquirer");
const fs = require("fs");
// const employee = require("./Employee");
const render = require("./lib/htmlRenderer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employeeArray = [];
createManager();
function buildTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "What type of employee are you creating?",
        choices: ["Exit", "Engineer", "Intern"],
      },
    ])
    .then(function (data) {
      if (data.employeeType == "Exit") {
        exitProgram();
      } else if (data.employeeType == "Engineer") {
        createEngineer();
      } else if (data.employeeType == "Intern") {
        createIntern();
      }
    });
}

function createManager() {
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
        name: "managerOfficeNumber",
        message: "Please enter manager's office number: ",
      },
    ])
    .then(function (data) {
      const manager = new Manager(
        data.managerName,
        data.managerID,
        data.managerEmail,
        data.managerOfficeNumber
      );
      employeeArray.push(manager);
      buildTeam();
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Please enter engineer's name: ",
      },
      {
        type: "input",
        name: "engineerID",
        message: "Please enter engineer's id: ",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Please enter engineer's email: ",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Please enter engineer's Github: ",
      },
    ])
    .then(function (data) {
      const engineer = new Engineer(
        data.engineerName,
        data.engineerID,
        data.engineerEmail,
        data.engineerGithub
      );
      employeeArray.push(engineer);
      buildTeam();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Please enter intern's name: ",
      },
      {
        type: "input",
        name: "internID",
        message: "Please enter interns's id: ",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Please enter intern's email: ",
      },
      {
        type: "input",
        name: "internSchool",
        message: "Please enter intern's school: ",
      },
    ])
    .then(function (data) {
      const intern = new Intern(
        data.internName,
        data.internID,
        data.internEmail,
        data.internSchool
      );
      employeeArray.push(intern);
      buildTeam();
    });
}
function exitProgram() {
  const employeeData = render(employeeArray);
  fs.writeFile(outputPath, employeeData, function (err) {
    if (err) throw err;
    console.log(employeeData);
    console.log("Success!");
  });
}
