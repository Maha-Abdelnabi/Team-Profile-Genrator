const inquirer = require("inquirer");
const fs = require("fs");
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
        message: "What type of employee would you like to add to your team?",
        choices: [
          "Maneger",
          "Engineer",
          "Intern",
          "None",
        ],
      },
    ])
    .then((response) => {
      console.log(response);
      //depending on the user response, call the function then stop
      switch (response.employee) {
        case "Maneger":
          createManeger();
          break;
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;

        default:
          createTeam();
      }
    });
}
//array to push all thr answers on it
const teamMembers = [];

//create maneger prompt
function createManeger() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((response) => {
      const maneger = new Maneger(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      teamMembers.push(maneger);
    })
    .then(() => chooseEmployee());
}

//create engineer prompt
function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      teamMembers.push(engineer);
    })
    .then(() => chooseEmployee());
}

//create intern prompt
function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the name of the intern's school?",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      teamMembers.push(intern);
    })
    .then(() => chooseEmployee());
}

//creates the HTML file..and add the answers to generateTeam function
function createTeam() {
 fs.writeFileSync("./dist/index.html", generateTeam(team));
  console.log("Sucsess, the team created!");
}

//call the prompts function
chooseEmployee();
