const inquirer = require("inquirer");
const fs = require('fs');

// variables for questions


// variables for answers


// array of questions for user
const questions = [
    "title", 
    "description", 
    "toc", 
    "license"
];

// function to write README file
function writeToFile(fileName, data) {
    
    const filename = data.name.toLowerCase().split(' ').join('') + ".json";
    
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

        if (err) {
          return console.log(err);
        }
    
        console.log("Success!");
    });
}

// function to initialize program
function init() {
    
   inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your title?"
    }, 
    {
        type: "input",
    }
   ]).then(function(data) {

    writeToFile();
   })

    
}

// function call to initialize program
init();
