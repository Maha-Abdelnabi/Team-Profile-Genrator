const Maneger = require("../lib/maneger");

describe("maneger", () => {
  const maneger = new Maneger("Alex", "324861", "Alex@email.com", "2");
  //test maneger name
  it("should returns the name from the input", () => {
    const manegerName = maneger.getName("Alex");

    expect(manegerName).toMatch("Alex");
  });

  //test maneger id
  it("should returns the id from the input", () => {
    const manegerID = maneger.getId("324861");

    expect(manegerID).toEqual("324861");
  });

  //test maneger email
  it("should returns the email from the input", () => {
    const manegerEmail = maneger.getEmail("Alex@email.com");

    expect(manegerEmail).toMatch("Alex@email.com");
  });

  //test maneger office number
  it("should returns the office number from the input", () => {
    const manegerOfficeNum = maneger.getOfficeNumber("college");

    expect(manegerOfficeNum).toMatch("2");
  });

  //test maneger role
  it("should returns the role maneger from the input", () => {
    const manegerRole = maneger.getRole();

    expect(manegerRole).toMatch("Maneger");
  });
});
