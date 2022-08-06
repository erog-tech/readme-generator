// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(data) {
    const type = data.license[0]; 
    let badge = ""
    if (type === "MIT") {
      badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    };
    if (type === "BSD 3-clause Clear license") {
      badge = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
    };
    if (type === "Creative Commons Attribution 4.0") {
      badge = `![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)`
    };
    if (type === "GNU General Public License 3.0") {
      badge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
    if (type === "Do What The F*ck You Want To Public License") {
      badge = `![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)`
    };
    if (type === "Apache License 2.0") {
      badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    };
    return badge
    };


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [License](#License)
  7. [GitHub](#GitHub)
  8. [E-mail](#E-mail)
## Description
${data.description} 
## Installation
${data.install}
## Usage
${data.use}
## Contributing
${data.contribute}
## Tests
${data.test}
## License
${licenseBadge(data)}
## Username
${data.username}
## E-mail
${data.email}
`;
}

module.exports = generateMarkdown;
