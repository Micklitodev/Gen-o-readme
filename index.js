const inquirer = require("inquirer");
const fs = require("fs");
const licenses = require('./utils/generateMarkdown')

function genReadme({
  title,
  link,
  img,
  descr,
  install,
  usage,
  contributor,
  tests,
  github,
  email, 
  license
}) {
  return `
  # ${title}


  ## Description
  
  ${descr}



  ## Table of contents
  
  - [ Link ](#link)
  - [ Screenshot ](#screenshot)
  - [ Installation ](#installation)
  - [ Usage ](#usage)
  - [ Contributions ](#contributions)
  - [ Tests ](#tests)
  - [ Questions ](#questions)
  - [ License ](#license)
  

  ## Link
  
  [Click Here](${link}) to go to the live link.
  


  ## Screenshot
  
  ![image](${img})
  

  
  ## Installation
  
  ${install}


  
  ## Usage
  
  ${usage}
  
  
  ## Contributions
  
  How to contribute?: 
  ${contributor}
  

  
  ## Tests
  
  ${tests}
  

  
  ## Questions
  
  ${github}

  ${email}

  When contact me please be mindful of timezones, Please check my profile for my
  current time information. Also, if it pertains to a bug, Please, use a clear,
  legible, instructions on how to recreate this bug as well as any videos or 
  screenshots will be appriciated. Please also make the subject the specified project
  name with a short description of what the contact pertains to. Thank you! 

  ${licenses(license)}
  
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
      message: "How do users contribute and What are the guide lines for contributing?",
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
        "Who do they contact if they have questions regarding this repo?",
      name: "github",
    },
    {
      type: "input",
      message:
        "What is the best email for people to contact you regarding quesitons?",
      name: "email",
    },
    {
      type: "list",
      message: "what is the name of license being used",
      name: "license",
      choices: ['MIT', 'GPL', 'BSD', 'ASF', 'CDDL', 'EPL']
    }
  ])
  .then((data) => {
    const preloadGen = genReadme(data);

    fs.writeFile("README.md", preloadGen, (err) => {
      err ? console.log(err) : console.log("sucess");
    });
  });
