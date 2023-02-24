const inquirer = require("inquirer");
const fs = require("fs");


const questions = ['what is the name of your project?', 
'what is the deployed link to your project?', 
'What is the image path your using for deployed screenshot',
'Explain your project.',
'Who created this project?',
'what is their github profile url?'];



inquirer 
    .prompt([
        {
            type: "input",
            message: 'what is the name of your project?',
            name: "title",
        },
        {
            type: "input",
            message: 'what is the deployed link URL to your project?',
            name: "link",
        },
        {
            type: "input",
            message: 'what is the name of your project?',
            name: "img",
        },
        {
            type: "input",
            message: 'what is the deployed link URL to your project?',
            name: "descr",
        },
        {
            type: "input",
            message: 'what is the name of your project?',
            name: "install",
        },
        {
            type: "input",
            message: 'what is the deployed link URL to your project?',
            name: "usage",
        },
        {
            type: "input",
            message: 'what is the name of your project?',
            name: "license",
        },
        {
            type: "input",
            message: 'what is the deployed link URL to your project?',
            name: "contributor",
        },
        {
            type: "input",
            message: 'what is the name of your project?',
            name: "tests",
        },
        {
            type: "input",
            message: 'what is the name of your project?',
            name: "github",
        }
    ]).then((data) => {
        const preloadGen = genReadme(data)
        
        fs.writeFile('README.MD', preloadGen, (err) => {
            err ? console.log(err) : console.log('sucess')
        })
    })



function genReadme({title, link, img, descr, install, usage, license, contributor, tests, github}) {
  return (
    `
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
   
    - ${descr}




    <a name="install"></a>
    ## Installation
    
    - ${install}




    <a name="usage"></a>
    ## Usage
    
    - ${usage}

    


    <a name="license"></a>
    ## License

    ${license}
   


    <a name="contributions"></a>
    ## Contributions

    
    ${contributor}


    
    
    #Tests
    
    ${tests}



    #Questions
    
    ${github}

    `);

};
