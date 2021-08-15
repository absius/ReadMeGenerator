// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{type: 'input',name: 'name',message: 'What is your name?'},
{type: 'input',name: 'title',message: 'What do you do?'},
{type: 'input',name: 'hobby',message: 'Spare time?'}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
      inquirer.prompt(questions).then(answers => { const pageHTML = generateMarkdown(answers)
      fs.writeFile('Dist/index.html', pageHTML, err => {
      if (err) throw new Error(err);

       console.log('Page created! Check out index.html in this directory to see it!');
     });});
}

// Function call to initialize app
init();
