const Manager = require(`../lib/Manager`);

it(`manager test`, () => {
  const officeNo = `internSchool`;
  let employee = new Intern(``, ``, ``, schoolName);
  expect(employee.schoolName).toBe(schoolName);
  expect(employee.getSchoolName()).toBe(schoolName);
});
