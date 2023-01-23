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
    message:
      "Please enter a consice description of the project? (Motivation? Why was it built?)",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter steps for installation:",
    name: "install",
  },
  {
    type: "input",
    message: "Enter instructions or usage examples:",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Please enter contributions (People, tutorials, third-party assets):",
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
    message: "Please choose license:",
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
  {
    type: "input",
    message:
      "Please enter your repository name for badge (leave blank for none):",
    name: "repo",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("SAMPLEREADME.md", data, (err) =>
    err ? console.error(err) : console.log("Done")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => writeToFile(generate(answers)));
}

// Function call to initialize app
init();
