// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge;
    switch (license)
    {
      case 'GNU AGPLv3':
          badge = "![Static Badge](https://img.shields.io/badge/License-GNU_AGPLv3-e017ec)";
          break;
        case 'GNU GPLv3':
          badge = "![Static Badge](https://img.shields.io/badge/License-GNU_GPLv3-1b0bed)";
          break;
          case 'GNU LGPLv3':
            badge = "![Static Badge](https://img.shields.io/badge/License-GNU_LGPLv3-b20b5a)";
            break;
          case 'Mozilla Public License 2.0':
            badge = "![Static Badge](https://img.shields.io/badge/License-Mozilla_Public_License_2.0-71e16a)";
            break;
          case 'Apache License 2.0':
            badge = "![Static Badge](https://img.shields.io/badge/License-Apache_License_2.0-6f66ea)";
            break;
          case 'MIT License':
            badge =  "![Static Badge](https://img.shields.io/badge/License-MIT_License-36ecf3)";
            break;
          case 'Boost Software License 1.0':
            badge = "![Static Badge](https://img.shields.io/badge/License-Boost_Software_License_1.0-51d277)";
            break;
          case 'The Unlicense':
            badge = "![Static Badge](https://img.shields.io/badge/License-The_License-c2266b";
            break;
          default: " ";
            break;
    }
    return badge;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    let link;
    switch (license)
    {
      case 'GNU AGPLv3':
          link = "https://choosealicense.com/licenses/agpl-3.0/";
          break;
  
        case 'GNU GPLv3':
          link = "https://choosealicense.com/licenses/gpl-3.0/";
          break;
  
          case 'GNU LGPLv3':
            link = "https://choosealicense.com/licenses/lgpl-3.0/";
            break;
          case 'Mozilla Public License 2.0':
            link = "https://choosealicense.com/licenses/mpl-2.0/";
            break;
          case 'Apache License 2.0':
            link = "https://choosealicense.com/licenses/apache-2.0/";
            break;
          case 'MIT License':
            link = "https://choosealicense.com/licenses/mit/";
            break;
          case 'Boost Software License 1.0':
            link = "https://choosealicense.com/licenses/bsl-1.0/";
            break;
          case 'The Unlicense':
            link = "https://choosealicense.com/licenses/unlicense/";
            break;
          default: " ";
            break;
    }
    return link;
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    let licenseSec;
    switch (license)
    {
      case 'GNU AGPLv3':
          licenseSec = 'GNU AGPLv3';
          break;
  
        case 'GNU GPLv3':
         licenseSec = 'GNU GPLv3';
          break;
  
          case 'GNU LGPLv3':
            licenseSec = 'GNU LGPLv3';
            break;
          case 'Mozilla Public License 2.0':
            licenseSec = 'Mozilla Public License 2.0';
            break;
          case 'Apache License 2.0':
            licenseSec = 'Apache License 2.0';
            break;
          case 'MIT License':
            licenseSec = 'MIT License';
            break;
          case 'Boost Software License 1.0':
            licenseSec = 'MIT License';
            break;
          case 'The Unlicense':
            licenseSec = 'The Unlicense';
            break;
          default: " ";
            break;
    }
    return licenseSec;
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    console.log(data);
    return `# ${data.title}  ${renderLicenseBadge(data.license)}
  
  
  ## Description
  
  ${data.descript}
  
  ## Table of Contents
  
  - [Installation Instructions](#installationInstructions)
  - [Usage Information](#usageInformation)
  - [Contribution Guidelines](#contributionGuidelines)
  - [Text Instructions](#textInstructions)
  - [License](#license)
  - [Questions](#questions)
  
  ## Install Instructions
  
  ${data.installInstruct}
  
  ## Usage Information
  
  ${data.usageInfo}
  
  ## Contribution Guidelines
  
  ${data.ctbGuid}
  
  ## Text Instructions
  
  ${data.textInstr}
  
  ## License
  
  ${renderLicenseSection(data.license)}  
  Website: ${renderLicenseLink(data.license)}
  
  # Questions
  
  Github: [${data.gitHub}](https://github.com/${data.gitHub}/)  
  Email:  ${data.email}
  `;
  };

  module.exports = {generateMarkdown};