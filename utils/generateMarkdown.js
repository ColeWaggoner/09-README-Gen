// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description
  ${data.description}
  
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributions)
  4. [Tests](#tests)
  5. [License](#license)
  6. [Questions](#questions)
  
  
  ## Installation
  ${data.install}
  
  
  ## Usage
  ${data.usage}
  
  
  ## Contributions
  ${data.contribute}
  
  
  ## Tests
  ${data.tests}
  

  ## License
  Copyright (c) [${data.username}](https://github.com/${data.username}). All rights reserved. 
  Licensed under the [${data.license} license](https://choosealicense.com/licenses/${data.license.toLowerCase()}/).
  
  
  ## Questions
  If you have any questions please contact me here:
  \nEmail: ${data.email}
  \nGitHub: ${data.username}`;
}

module.exports = generateMarkdown;