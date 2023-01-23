// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderBadge(info) {
  if (!info.repo) {
    const noBadge = ""
    return noBadge;
  } else {
    const lanBadge =
      "![Language badge](https://img.shields.io/github/languages/top/" +
      info.username +
      "/" +
      info.repo +
      ")";
    return lanBadge;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(input) {
  return `
  # ${input.title}


  ## Description
  ${input.description}

  ![License Badge](https://img.shields.io/badge/license-${input.license}-success?style=flat)
  ${renderBadge(input)}
  
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributions](#contributions)
  4. [Tests](#tests)
  5. [License](#license)
  6. [Questions](#questions)
  
  
  ## Installation
  ${input.install}
  
  
  ## Usage
  ${input.usage}
  
  
  ## Contributions
  ${input.contribute}
  
  
  ## Tests
  ${input.tests}
  

  ## License
  Copyright (c) [${input.username}](https://github.com/${input.username}). All rights reserved. 
  Licensed under the [${input.license} license](https://choosealicense.com/licenses/${input.license.toLowerCase()}/).
  
  
  ## Questions
  If you have any questions please contact me here:
  \nEmail: ${input.email}
  \nGitHub: [${input.username}](https://github.com/${input.username})`;
}

module.exports = generateMarkdown;
