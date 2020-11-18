// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.project}

   ## table of contents
     * [Email](#Email)
     * [Username](#Username)
     * [Description](#Description)
     * [Instructions](#Instructions)
     * [Usage](#Usage)
     * [Guidlines](#Guidelines)
     * [Installation](#Installation)
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

  ## Username
  ${answers.username }

  ## Repo
  ${answers.repo}
`;
}

module.exports = generateMarkdown;
