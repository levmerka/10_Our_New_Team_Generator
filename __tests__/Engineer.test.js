const Engineer = require(`../lib/Engineer`);

it (`github test` , () =>{
const github = `engineerGithub`
let employee = new Engineer(``,``,``,github);
expect(employee.github).toBe(github)
expect(employee.getGithub()).toBe(github)
})



