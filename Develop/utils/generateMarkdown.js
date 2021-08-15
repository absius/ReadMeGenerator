// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = "MIT"){
    return "![MIT License](https://shields.io/badge/license-MIT-green)"
  } else if (license = "GPL"){
    return "![GPL License](https://shields.io/badge/license-GPL-blue)"
  } else if (license = "BSD"){
    return "![BSD License](https://shields.io/badge/license-BSD-green)"
  } else if (license = "APACHE"){
    return "![APACHE License](https://shields.io/badge/license-Apache-blue)"
  } else if (license = "NONE"){
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license = "MIT"){
    return "![MIT License](https://www.mit.edu/~amini/LICENSE.md)"
  } else if (license = "GPL"){
    return "![GPL License](https://www.gnu.org/licenses/gpl-3.0.en.html)"
  } else if (license = "BSD"){
    return "![BSD License](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license = "APACHE"){
    return "![APACHE License](https://www.apache.org/licenses/LICENSE-2.0)"
  } else if (license = "NONE"){
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 return `##License` +
  renderLicenseBadge(license) +
  renderLicenseLink(license) 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    #${data.title}
    ##Description
    ${data.description}
    ##Table of Contents
    Installation Instructions (#Installation)
    Usage
    License
    Contributing
    Tests
    Questions
    ##Installation
    ${data.instructions}
    ##Usage
    ${data.usage}
    ` + 
    renderLicenseSection(data.license) +
    `
    ##Contributing
    ${data.guidelines}
    ##Tests
    ${data.testing}
    ##Questions
    ${data.email} https://github.com/${data.username}

`;
}

module.exports = generateMarkdown;
