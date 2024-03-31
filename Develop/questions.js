// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the README title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description for this project?',
    },
    {
      type: "input",
      name: "installation",
      message: "Installation Instructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is this app used for?",
    },
    {
      type: "input",
      name: "test",
      message: "What command do you use to test this App?",
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Who worked on this project?',
    },
    {
      type: 'input',
      name: 'userName',
      message: 'What is the GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['Apache License 2.0', 'GNU General Public License (GPL) v3', 'Mozilla Public License 2.0', 'BSD 3-Clause License', 'MIT', 'none'],
    },
  ];
  
  module.exports = questions;
  