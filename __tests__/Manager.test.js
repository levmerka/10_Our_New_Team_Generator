const Manager = require(`../lib/Manager`);

it(`manager test`, () => {
  const officeNo = `managerOffice`;
  let employee = new Manager(``, ``, ``, officeNo);
  expect(employee.officeNo()).toBe(officeNo);
  expect(employee.getOfficeNo()).toBe(officeNo);
});
