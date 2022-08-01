const Intern = require(`../lib/Intern`);

it(`school test properties`, () => {
  const schoolName = `internSchool`;
  let employee = new Intern(``, ``, ``, schoolName);
  expect(employee.schoolName()).toBe(schoolName);
  expect(employee.getSchoolName()).toBe(schoolName);
});

it(`school test methods`, () => {
  const schoolName = `internSchool`;
  let employee = new Intern(``, ``, ``, schoolName);
  expect(employee.schoolName()).toBe(schoolName);
});
