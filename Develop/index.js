// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{type: 'input',name: 'title',message: 'What is your project title?'},
{type: 'input',name: 'description',message: 'What is the project description?'},
{type: 'input',name: 'instructions',message: 'Are there any special installation instructions?'},
{type: 'input',name: 'usage',message: 'What usage information would you like to add?'},
{type: 'input',name: 'guidelines',message: 'What contribution guidelines do you have?'},
{type: 'input',name: 'testing',message: 'Do you have testing instructions?'},
{type: 'list',name: 'license',choices:["MIT","GPL","BSD","APACHE","NONE"],message: 'Please choose a license for your application.'},
{type: 'input',name: 'username',message: 'What is your github username?'},
{type: 'input',name: 'email',message: 'What is your email address?'}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
  
         console.log('Page created! Check out ReadMe.MD in this directory to see it!');
       });
}

// TODO: Create a function to initialize app
function init() {
      inquirer.prompt(questions).then(answers => { const pageHTML = generateMarkdown(answers)
        writeToFile('Dist/ReadMe.MD', pageHTML);
});
}

// Function call to initialize app
init();
