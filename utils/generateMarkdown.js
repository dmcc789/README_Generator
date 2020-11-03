// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

  ## Link to the Deployed Application
  ${data.linktodeployed}

  ## Link to Github Repo
  https://github.com/${data.username}/${data.createdBy}

  ## Description
  ${data.description}
 
  ## License
  ${data.license}

  #### Credits
  © ${data.year} ${data.createdBy}
`;
}

module.exports = generateMarkdown;
