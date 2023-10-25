// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown  = require('./Develop/Utils/generateMarkdown1');




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err? console.log(err) : console.log("success!");
    });
}

// TODO: Create a function to initialize app
function initialize(){
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown.generateMarkdown(data));
        console.log(data);
    });
    
    
}

    const questions = [
        { 
            
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
    
        {
            type: 'input',
            name: 'descript',
            message: 'Enter the description of the project.' 
        },
    
        {
            type: 'input',
            name: 'installInstruc',
            message: 'Enter the Install Instructions of the project.' 
        },
        
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Enter the Usage Information of the project.' 
        },
        
        {
            type: 'input',
            name: 'ctbGuid',
            message: 'Enter the Contribution Guidelines of the project.' 
        },
        
        {
            type: 'input',
            name: 'textInstr',
            message: 'Enter the Text Instructions of the project.' 
        },
    
        {
            type: 'list',
            name: 'license',
            message: 'Select the desired license.',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 
                      'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 
                      'The Unlicense']
        },

        {
            type: 'input',
            name: 'gitHub',
            message: 'Enter your GitHub username.',
            default: '*Case Sensitive*'
        },

        {
            type: 'input',
            name: 'email',
            message: 'Select the desired license.',
            default: 'someone@somewhere.com'
        },
    ];

  // Function call to initialize app
initialize();
