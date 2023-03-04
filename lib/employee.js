//the Employee class has the main properties that is going to inheret the other employees..so they can add their owns to the inherited prop..

//parent class
class Employee {
  constructor(name, id, email) {
    //properties
    this.name = name || "Unknown";
    this.id = id || "Unknown";
    this.email = email || "Unknown";
  }
  //methods
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}
 module.exports = Employee;