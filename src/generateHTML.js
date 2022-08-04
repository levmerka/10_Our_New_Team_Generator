const { prompt } = require("inquirer");
const { role, questions, manager, intern, engineer } = require("../data");
const Employee = require("../lib/Employee");
const fs = require(`fs`);
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const roster = []
// Generates HTML file
function writeToFile(data) {
  fs.writeFile("./dist/index.html", data, (err) =>
    err ? console.error(err) : console.log("Success :O")
  );
}
function generateHTML(data) {
  return `
  <!DOCTYPE html>
<html>
  <head>
      <meta charset="UTF-8" />
      <title>New Hires</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  </head>;

  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading">
          <h1 class="text center">New Hires</h1>
        </div>
      </div>
    </div>
    
${
  roster.map((employee)=>{
    return generateCard(employee)
  })
}

 

  </body>
</html>
  `;

  console.log(data);
}
function generateCard(data) {
  return `
  <div class="card">
  <h1>${data.name}</h1>
  <h2>${data.getRole()}</h2>
  <ul>
    <li>ID:${data.id}</li>
    <li>email:${data.email}</li>
  </ul>
</div>
`
}
// Prompts inquirer questions
// and loops through
async function init() {
  try {
    mainMenu();
  } catch (err) {
    console.error(err);
  }
}
async function mainMenu() {
  let nextEmployee = await prompt(role);
  if (nextEmployee.role == "Intern") {
    answers = await prompt(intern);
    let newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    roster.push(newIntern)
    mainMenu();
  }
  if (nextEmployee.role == "Engineer") {
    answers = await prompt(engineer);
    let newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    roster.push(newEngineer)
    mainMenu();
  }
  if (nextEmployee.role == "Manager") {
    answers = await prompt(manager);
    let newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeno
    );
    roster.push(newManager)
    mainMenu();
  }
  if (nextEmployee.role == `Done?`) {
    writeToFile(generateHTML(answers));
  }
}

module.exports = { init };
