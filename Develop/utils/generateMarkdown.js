// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${data.title} Read Me</title>
  </head>

  <body>
    <h1>${data.title}</h1>
    <h2>Description</h2>
    ${data.description}
    <h2>Table of Contents</h2>
    <a href="#install">Installation Instructions</a>
    <a href="#usage">Usage</a>
    <a href="#license">License</a>
    <a href="#contribute">Contributing</a>
    <a href="#tests">Tests</a>
    <a href="#questions">Questions</a>
    <h2 id="install">Installation</h2>
    ${data.instructions}
    <h2 id="usage">Usage</h2>
    ${data.usage}
    <h2 id="license">License</h2>
    ${data.license}
    <h2 id="contribute">Contributing</h2>
    ${data.guidelines}
    <h2 id="tests">Tests</h2>
    ${data.testing}
    <h2 id="questions">Questions</h2>
    ${data.email} https://github.com/${data.username}
  </body>
  </html>
`;
}

module.exports = generateMarkdown;
