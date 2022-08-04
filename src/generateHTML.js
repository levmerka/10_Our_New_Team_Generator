const { prompt } = require("inquirer");
const { role, questions, manager, intern, engineer } = require("../data");
const Manager = require("../lib/Manager");
const fs = require(`fs`);

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
    

    <div class="card">
      <h1>${data.name}</h1>
      <h2>${data.role}</h2>
      <ul>
        <li>ID:${data.id}</li>
        <li>email:${data.email}</li>
        <li>unique</li>
      </ul>yes e
    </div>


  </body>
</html>
  `;

  console.log(data);
}
// Prompts inquirer questions
// and loops through
async function init() {
  const roster = [];
  try {
    const answers = await prompt(questions);
    let newManager = new Manager
    (
      answers.name, 
      answers.id, 
      answers.email);

    roster.push(newManager);
    console.log(roster);
    
    let nextEmployee = await prompt(role);
    if (nextEmployee.role == "Intern") {
      answers = await prompt(intern);
    }
    if (nextEmployee.role == "Engineer") {
      answers = await prompt(engineer);
    }
    if (nextEmployee.role == "Manager") {
      answers = await prompt(manager);
    }
    while (nextEmployee.role != `Done?`) {
      nextEmployee = await prompt(role);
    }

    writeToFile(generateHTML(answers));
  } catch (err) {
    console.error(err);
  }
}

module.exports = { init };
