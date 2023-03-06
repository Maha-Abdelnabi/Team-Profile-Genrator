//requiring the emplyee file to test it
const Employee = require("../lib/employee.js");

//describe used to group multi-tests at the same time..and organize the logs in the terminal
describe("Employee", () => {
  const employee = new Employee();

  //it instead of test
  it("it should returns the name from the input", () => {
    // This creates a variable to test
    const employeeName = employee.getName();
    // This test confirms if the variable to test matches the expected value
    expect(employeeName).toMatch();
  });

  it("it should returns the id from the input", () => {
    const employeeID = employee.getId();

    expect(employeeID).toEqual();
  });

  it("it should returns the email from the input", () => {
    const employeeEmail = employee.getEmail();

    expect(employeeEmail).toMatch();
  });

  it("it should returns the role Employee from the input", () => {
    const employeeRole = employee.getRole();

    expect(employeeRole).toMatch();
  });
});
