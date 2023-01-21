// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");

console.log("Welcome. Please answer questions to generate a README file.");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a consice description of the project?",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter installation instructions:",
    name: "install",
  },
  {
    type: "input",
    message: "Enter important usage information:",
    name: "usage",
  },
  {
    type: "input",
    message: "Please enter contribution guidelines:",
    name: "contribute",
  },
  {
    type: "input",
    message: "Please enter testing instructions:",
    name: "tests",
  },
  {
    type: "list",
    choices: ["MIT", "Apache", "BSD", "Unlicense"],
    message: "Re-enter password to confirm:",
    name: "license",
  },
  {
    type: "input",
    message: "Please enter your email:",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter your GitHub username:",
    name: "username",
  },
 
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('README.md', data, (err) => 
  err ? console.error(err) : console.log('Done'))
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((info) => writeToFile(generate(info)))
}

// Function call to initialize app
init();
