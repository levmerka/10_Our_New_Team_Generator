const { prompt } = require("inquirer");
const { questions, manager, intern, engineer, role } = require("../data");
const Manager = require("../lib/Manager");
const fs = require(`fs`);

async function init() {
  const roster = [];
  try {
    const answers = await prompt(manager);
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeno
    );
    roster.push(newManager);
    console.log(roster);
    let nextEmployee = await prompt(role);
    while (nextEmployee.role != `Done?`) {
      
      nextEmployee = await prompt(role);
    }
    // writeToFile(generateHTML(answers));
  } catch (err) {
    console.error(err);
  }
}
module.exports = { init };
