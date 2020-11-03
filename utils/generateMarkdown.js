// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Link to the Deployed Application
  ${data.linktodeployed}

  ## Link to Github Repo
  https://github.com/${data.username}/${data.createdBy}

  ## Description
  ${data.description}
 
  ## License
  ${data.license}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

  ### Contact
  ${data.createdBy}
  ${data.email}

  #### Credits
  © Copyright ${data.year} ${data.title}
`;
}

module.exports = generateMarkdown;
