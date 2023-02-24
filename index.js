const inquirer = require("inquirer");
const fs = require("fs");

function genReadme({
  title,
  link,
  img,
  descr,
  install,
  usage,
  license,
  contributor,
  tests,
  github,
}) {
  return `
  # ${title}

  ## Table of contents
  
  1. [ Link ](#link)
  2. [ ScreenShot ](#ss)
  3. [ Description ](#descr)
  4. [ Installation ](#install)
  5. [ Usage ](#usage)
  6. [ License ](#license)
  7. [ Contributions ](#contributions)
  8. [ Test ](#test)
  9. [ Questions ](#question)
  
  <a name="link"></a>
  
  ## Link
  
  Click [${link}] to go to the live link.
  
  <a name="ss"></a>
  
  ## ScreenShot
  
  ![image](${img})
  
  <a name="descr"></a>
  
  ## Description
  
  ${descr}
  
  <a name="install"></a>
  
  ## Installation
  
  ${install}
  
  <a name="usage"></a>
  
  ## Usage
  
  ${usage}
  
  <a name="license"></a>
  
  ## License
  
  ${license}
  
  <a name="contributions"></a>
  
  ## Contributions
  
  ${contributor}
  
  <a name="test"></a>
  
  ## Tests
  
  ${tests}
  
  <a name="question"></a>
  
  ## Questions
  
  ${github}
  
  `;
}

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the deployed link URL to your project?",
      name: "link",
    },
    {
      type: "input",
      message: "What is the url or file path to the deployed screenshot?",
      name: "img",
    },
    {
      type: "input",
      message: "Describe your project.",
      name: "descr",
    },
    {
      type: "input",
      message: "Explain how to install package.",
      name: "install",
    },
    {
      type: "input",
      message: "Explain how to use the package",
      name: "usage",
    },
    {
      type: "input",
      message: "what is the name of license being used",
      name: "license",
    },
    {
      type: "input",
      message: "Who are the contributors?",
      name: "contributor",
    },
    {
      type: "input",
      message:
        "How to test application or what tests have been run on the application?",
      name: "tests",
    },
    {
      type: "input",
      message:
        "what github do they contact if they have questions regarding this repo?",
      name: "github",
    },
  ])
  .then((data) => {
    const preloadGen = genReadme(data);

    fs.writeFile("README.md", preloadGen, (err) => {
      err ? console.log(err) : console.log("sucess");
    });
  });
