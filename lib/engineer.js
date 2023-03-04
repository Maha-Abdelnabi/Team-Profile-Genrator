const Employee = require('./employee.js')

//derived class..which inheret from the parent class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    //using super to confirm the properties that i need from the parent class
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;