const inquirer = require("inquirer");
const fs = require ("fs");

// array of questions for user
const generateReadme = (answers) =>{
console.log (answers)
} 

//  In the in class activitiy we had to put some html code in the index.js file to make it generate to the index.html file. 
// I am thinking that the same action should be down here. Only now we need some code frolm the readme file in the index.js file. 
//The question is what code do I  need to input below to allow it to write to the readme?  

// This prompts the questions 
inquirer
.prompt([

  // {
  //   type: "input",
  //   name: "overide",
  //   message: "Do you want to Overide the exsisting readme file?",
  // },

  // {
  //   type: "input",
  //   name: "HTMl",
  //   message: "Do you want the HTML default styling?",
  // },

  {
    type: "input",
    name: "Project",
    message: "What is the project name?",
  },
  {
    type: "input",
    name: "license",
    message: "What license do you want to use?",
  },

  {
    type: "input",
    name: "account",
    message: "Please link to your Github account:",
  },

])

// function to write README file
// on line 66 and 67 do I need fs.writeFile or can it just be writeFile


    // do I need a function here? 
      // json.stringify is used here. when I write to readme make sure it a readme md
 .then((answers) => { 
  fs.writeFile("Readme.md", generatereadme(answers),(err) => {

      if (err) { 
        console.error(err); 
      } else {
        console.log 
        ("Successfully wrote to Readme.md");
        
      }
    });
    }); 
  
      // fs.writeFile("Readme.md", json.stringify(answers, null,'\t'), (err) => {
      //   err ? console.log(err) :console.log('Success!') 
      // });

// function to initialize program

  inquirer.prompt(generateReadme).then(answers => {
    writeFile ("Readme.md", answers)
  }); 



// function call to initialize program
init();
