// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the README tile?',

    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the description for this project?',

    },
    {
        type: "input",
        name: "installation",
        message: "Installation Instructions",

    },
    {
        type: "input",
        name: "Usage",
        message: "What is this app used for?",
    },
    {
        type: "input",
        name: "Test",
        message: "What command do you use to test this App?",
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Who worked on this project?',

    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is the github user namer?',

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'license?',
        choices: ['Apache License 2.0',
            'GNU General Public License (GPL) v3',
            'Mozilla Public License 2.0',
            'BSD 3-Clause License', 'MIT', 'none'],

    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile("./demo/"+fileName, data, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log ("Successfully wrote: " + fileName);
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
      writeToFile("./demo/DemoREADME.md", generateMarkdown(data));
    })
 }

// Function call to initialize app
init();
