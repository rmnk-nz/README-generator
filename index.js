// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for project'
    },
    {
        type: 'list',
        name: 'license',
        choices: [
            'MIT',
            'GNU',
            'Mozilla',
            'Apache',
            'ISC',
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Include contributing guidelines for project',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Include test instructions for the project',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your Github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err
    ? console.log(err)
    : console.log('Success! README file created')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) =>  {
        writeToFile('README.md', generateMarkdown(answers))
    });
}
// Function call to initialize app
init();
