// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
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
        messgae: 'Provide usage information for project'

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
        message: 'Include test Instructions for the project',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your Github Username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
