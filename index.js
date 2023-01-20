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
    message: "What is your password?",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter nstallation instructions:",
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
    message: "Please enter your GitHub username:",
    name: "username",
  },
  {
    type: "input",
    message: "Please enter your email:",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
