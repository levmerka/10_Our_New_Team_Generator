const Employee = require(`../lib/Employee`) 

it (`test properties`, () =>{
  // arrange
  const name = `employeeName`
  const id = `employeeId`
  const email = `employeeEmail`

  //  act, 
  let employee = new Employee(name, id, email);

  // assert
  expect(employee.name).toBe(name)
  expect(employee.id).toBe(id)
  expect(employee.email).toBe(email)
})

it (`test methods`, () =>{
  // arrange
  const name = `employeeName`
  const id = `employeeId`
  const email = `employeeEmail`

  //  act, 
  let employee1 = new Employee(name, id, email);

  // assert
  expect(employee1.getName()).toBe(name)
  expect(employee1.getId()).toBe(id)
  expect(employee1.getEmail()).toBe(email)
})