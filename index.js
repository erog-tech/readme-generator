// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generate = require('./utils/generateMarkdown.js');
inquirer
.prompt([
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the description of the project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'How to install your application?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'How to use your application?',
            name: 'use',
        },
        {
            type: 'input',
            message: 'How to contribute for this project?',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'How to test your application?',
            name: 'test',
        },
        {
            type: "checkbox",
            message: "What is the license used for this project?",
            choices: ["MIT", "BSD 3-clause Clear license", "Creative Commons Attribution 4.0", "GNU General Public License 2.0", "Do What The F*ck You Want To Public License", "Apache License 2.0", "Educational Community License v2.0", "GNU General Public License 3.0"],
            name: "license",
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
    ])
    .then((response) =>
        fs.writeFile("README.md", generate(response), err => {
            if (err) {
                console.log('Error occured!');
            }
            
        })
             
            
    );
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
