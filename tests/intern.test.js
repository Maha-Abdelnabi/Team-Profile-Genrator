//requiring the emplyee file to test it
const Intern = require("../lib/intern");

describe("intern", () => {
  const intern = new Intern(
    "Maya",
    "753159",
    "Maya@email.com",
    "college"
  );
  //test intern name
  it("should returns the name from the input", () => {
    const internName = intern.getName("Maya");

    expect(internName).toMatch("Maya");
  });

  //test intern id
  it("should returns the id from the input", () => {
    const internID = intern.getId("753159");

    expect(internID).toEqual("753159");
  });

  //test intern email
  it("should returns the email from the input", () => {
    const internEmail = intern.getEmail("Maya@email.com");

    expect(internEmail).toMatch("Maya@email.com");
  });

  //test intern school name
  it("should returns the school name from the input", () => {
    const internShcool = intern.getSchool("college");

    expect(internShcool).toMatch("college");
  });

  //test intern role
  it("should returns the role intern from the input", () => {
    const internRole = intern.getRole();

    expect(internRole).toMatch("Intern");
  });
});
