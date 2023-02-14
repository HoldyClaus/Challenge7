const inquirer = require('inquirer');
const fs = require('fs');

const licenseBadge= {
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }



  inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of the project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License: ',
        choices: Object.keys(licenseBadge),
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributors: ',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests: ',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Your GitHub username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'GitHub email: ',
    }
    
  ])

  .then((data) => {
    const chosenLicenseBadge = licenseBadge[data.license];
    console.log(data);
    var readMe = `# ${data.title} \n ${chosenLicenseBadge} \n ## Table of Contents \n
     \n 1. [Description](#description) \n 2. [Installation](#installation) \n 3. [Usage](#usage) \n 4. [License](#license)
     \n 5. [Contributing](#contributing) \n 6. [Tests](#tests) \n 7. [Username](#username) \n 8. [Email](#email)
     \n ## Description \n ${data.description} \n ## Installation \n ${data.installation} \n ## Usage \n ${data.usage}
     \n ## License \n ${data.license} \n ## Contributing \n ${data.contributing} \n ## Tests \n ${data.tests}
     \n ## Username \n ${data.username} \n ## Email \n ${data.email}`;
    fs.writeFile("README.md", readMe, (err) =>
    err ? console.log(err) : console.log('Success')
  );
});