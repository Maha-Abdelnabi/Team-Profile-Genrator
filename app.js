const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee.js");
const Maneger = require("./lib/maneger.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");


//This creates the prompt to determine which role needs to be added to the team.
function chooseEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((response) => {
      console.log(response);

      switch (response.employee) {
        case "Manager":
          createManager();
          break;
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          buildTeam();
      }
    });
}

chooseEmployee();
