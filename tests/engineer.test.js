//requiring the emplyee file to test it
const Engineer = require("../lib/engineer");

describe("engineer", () => {
  const engineer = new Engineer(
    "Lara",
    "147852",
    "Lara@email.com",
    "Lara-github"
  );
  //test engineer name
  it("should returns the name from the input", () => {
    const engineerName = engineer.getName("Lara");

    expect(engineerName).toMatch("Lara");
  });

  //test engineer id
  it("should returns the id from the input", () => {
    const engineerID = engineer.getId("147852");

    expect(engineerID).toEqual("147852");
  });

  //test engineer email
  it("should returns the email from the input", () => {
    const engineerEmail = engineer.getEmail("Lara@email.com");

    expect(engineerEmail).toBe("Lara@email.com");
  });

  //test engineer github
  it("should returns the GitHub username from the input", () => {
    const engineerGithub = engineer.getGithub("Lara-github");

    expect(engineerGithub).toBe("Lara-github");
  });

  //test engineer role
  it("should returns the role Engineer from the input", () => {
    const engineerRole = engineer.getRole();

    expect(engineerRole).toMatch("Engineer");
  });
});
