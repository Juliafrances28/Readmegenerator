// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.project}
  ## ${answers.description}
  ## ${answers.installation}
  ## ${answers.usage}
  ## ${answers.license}
  ![badge](https://img.shields.io/badge/License-${answers.license}-yellow
  ## ${answers.contributed} 
  ## ${answers.tested}
  ## ${answers.username }
  ## ${answers.repo}
`;
}

module.exports = generateMarkdown;
