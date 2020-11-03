const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

const generateREADME = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "createdBy",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your application?",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your application: ",
    },
    {
        type: "input",
        name: "linktodeployed",
        message: "Link to the deployed Application: "
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license:",
        choices: [
            "MIT",
            "Apache",
        ],  
    },
];

function promptQuestions() {
    return inquirer.prompt(questions);
};

// function to write README file
// function writeToFile("README.md", data) {
    
  
// }


// function to initialize program
function init() {

   promptQuestions().then(function(answers){
    const README = generateREADME(answers);
    return writeFileAsync("README.md", README);
   })
   .then(function(){
       console.log("Successfully wrote to README.md file");
   })
   .catch(function(err){
       console.log(err);
   });
   
    
};

// function call to initialize program
init();
