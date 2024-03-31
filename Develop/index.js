// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path'); 
const generateMarkdown = require('./generateMarkdown');
const questions = require('./questions');


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    const filePath = path.join(__dirname, fileName); 
    fs.writeFile(filePath, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully wrote: " + filePath);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
      writeToFile("DemoREADME.md", generateMarkdown(data));
    })
 }

// Function call to initialize app
init();
