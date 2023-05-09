// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter your installation details',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Enter instructions on how users can use your software',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Which license did you use?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Who helped you with this software?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'List the type of tests your software contains',
        name: 'tests',
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log('File created successfully.')
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const md = `# ${response.title}
## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contribution)
- [Tests](#Tests)
---
## Description 
${response.description}
## Installation
${response.install}
## Usage
${response.usage}
## License
${response.license}
## Contribution
${response.contribution}
## Tests
${response.tests}`;
            writeToFile(`README.MD`, md);
        })
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();

