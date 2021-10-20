// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // console.log('license', license);
  if(license !== 'None') { 
    return  `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  if (renderLicenseBadge(data.license) === '') {
    return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.test}

  ## License
  This application is not covered by any license.

  ## Questions
  Link to my Github: https://github.com/${data.githubUsername} </br>
  If you have any questions with regards to this project please contact via email: </br>
  ${data.email}`

  } else {
    
  } return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.test}

  ## License
  This application is covered by ${renderLicenseBadge(data.license)} license.

  ## Questions
  Link to my Github: https://github.com/${data.githubUsername} </br>
  If you have any questions with regards to this project please contact via email: </br>
  ${data.email}`
;}

module.exports = generateMarkdown;
