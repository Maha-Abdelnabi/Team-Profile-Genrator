//requiring the emplyee file to test it
const Employee = require("../lib/employee.js");

//describe used to group multi-tests at the same time..and organize the logs in the terminal
describe("Employee", () => {
  const employee = new Employee("sarah", "548967", "sarah@email.com");

  //test employee name
  it("it should returns the name from the input", () => {
    // This creates a variable to test
    const employeeName = employee.getName("sarah");
    // This test confirms if the variable to test matches the expected value
    expect(employeeName).toMatch("sarah");
  });
  //test employee id
  it("it should returns the id from the input", () => {
    const employeeID = employee.getId("548967");

    expect(employeeID).toEqual("548967");
  });
  //test employee email
  it("it should returns the email from the input", () => {
    const employeeEmail = employee.getEmail("sarah@email.com");

    expect(employeeEmail).toMatch("sarah@email.com");
  });
  ////test employee role
  it("it should returns the role Employee from the input", () => {
    const employeeRole = employee.getRole();

    expect(employeeRole).toMatch("Employee");
  });
});
