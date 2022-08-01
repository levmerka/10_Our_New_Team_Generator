const Intern = require(`../lib/Intern`);

it(`school test`, () => {
  const schoolName = `internSchool`;
  let employee = new Intern(``, ``, ``, schoolName);
  expect(employee.schoolName).toBe(schoolName);
  expect(employee.getSchoolName()).toBe(schoolName);
});
