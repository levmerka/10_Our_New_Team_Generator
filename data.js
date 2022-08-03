const questions = [
  {
    type: 'input',
    message: 'name',
    name: 'name',

  },
  {
    type: 'input',
    message: 'id',
    name: 'id',
  },
  {
    type: 'input',
    message: 'email',
    name: 'email',

  },

]
const manager = [
  ...questions,
  {
    type: `input`,
    message: `office no.?`,
    name: `officeno`,
  },
]
const intern = [
  ...questions,
  {
    type: `input`,
    message: `school`,
    name: `school`,
  },
]
const engineer = [
  ...questions,
  {
    type: `input`,
    message: `github`,
    name: `github`,
  },
]
const role = [
  {
    type: `list`,
    message: `type of employee?`,
    name: `role`,
    choices: [
      `Manager`,
      `Intern`,
      `Engineer`,
      `Done?`,
    ],
  },
]
module.exports ={questions, manager, intern, engineer, role}