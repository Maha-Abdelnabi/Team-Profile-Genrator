const Employee = require("./employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    //using super to confirm the properties that i need from the parent class
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
