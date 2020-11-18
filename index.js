const inquirer = require("inquirer");
const fs = require("fs");
const generate = require ("./generateMarkdown");

// the answer to the questions run in node index.js are then generated in the Markdownfile. The result will then appear in the Readme file. 
  
const init = async () => {
  try {
    const answers = await inquirer.prompt([

      {
        type: "input",
        name: "project",
        message: "What is your project's title?",
      },
     
      {
        type: "input",
        name: "description",
        message: "What is your project's description?",
      },

      {
        type: "input",
        name: "installation",
        message: "What is your project's installation?",
      },
      {
        type: "input",
        name: "usage",
        message: "What is your project's usage?",
      },
      {
        type: "list",
        name: "license",
        message: "What license do you want to use?",
        choices: [ 'GNU', 'Mozilla', 'Apache', 'MIT', 'Boost',  'Unlicense'],  
      },
      {
        type: "input",
        name: "contributed",
        message: " who contributed on the project?",
      },
      {
        type: "input",
        name: "tested",
        message: "how is your project tested?",
      },
      {
        type: "input",
        name: "username",
        message:"What is your Github Username:"
      },

      {
        type: "input",
        name: "repo",
        message: "What is your repo link?",
      },
 
    ]);
    const md = generate(answers);
    fs.writeFileSync("README.md", md);
    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();
//![icon for license](${licenseURL}) for license stuff 
