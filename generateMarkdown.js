// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.project}

   ## Table of Contents
     * [Email](#Email)
     * [Username](#Username)
     * [Description](#Description)
     * [Instructions](#Instructions)
     * [Usage](#Usage)
     * [Installation](#InstallaTtion)
     * [Questions](#Questions)
     * [License](#License)
     
  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage 
  ${answers.usage}

  ## license 
   ${answers.license}
  ![badge](https://img.shields.io/badge/License-${answers.license}-yellow

  ## Contributed
  ${answers.contributed} 

  ## Tested
   ${answers.tested}

  ## Questions 
   ${answers.questions}

  ## Username
  ${answers.Github }

  ## Repo
  ${answers.repo}

  ## Email 
  ${answers.email}

`;
}
module.exports = generateMarkdown;
