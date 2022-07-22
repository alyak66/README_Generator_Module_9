// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's title?",
        validate: (titleInput) => {
            if(titleInupt) {
                return true;
            } else {
                console.log("Please submit project title")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why and how of your project",
        validate: (descriptionInput) => {
            if (descriptionInupt) {
                return true;
            } else {
                console.log("Please submit the project's description")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
        validate: installationInput => {
            if (installationInupt) {
                return true;
            } else {
                console.log("Please submit the project's installation instructions")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use",
        validate: usageInput => {
            if (usageInupt) {
                return true;
            } else {
                console.log("Please submit the project's installation instructions")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "credit",
        message: "List your collaborators, if any, with links to their GitHub Profiles.",
        validate: creditInput => {
            if (creditInupt) {
                return true;
            } else {
                console.log("Please list all collaborators")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "license",
        message: "Please select a license for your project.",
        choices: ["MIT", "GNU GPLv3", "Mozilla 2.0", "Apache 2.0", "Unlicensed"]
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your github username.",
        validate: usernameInput => {
            if (usernameInupt) {
                return true;
            } else {
                console.log("Please enter your github username.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address.",
        validate: emailInput => {
            if (emailInupt) {
                return true;
            } else {
                console.log("Please enter your email address.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Please enter testing instructions.",
        validate: testInput => {
            if (testInupt) {
                return true;
            } else {
                console.log("Please enter testing instructions.")
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        const dir = "./dist"

        //check to see if the dist directory exists, if not, create it
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, err => {
                if (err) {
                    reject(err);
                    return;
                }
            });  
        }
        //write the README.md file to the ./dist directory
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: "File created!"
            });
        });
    });
    
}

module.exports = writeToFile;

// TODO: Create a function to initialize app
const promptUser = userQuest => {
    return inquirer.prompt(userQuest);
}

const init = () => {
    promptUser(questions)
        .then(userInput => {
            return generateMarkdown(userInput);
        })
        .then(pageData => {
            writeToFile("./dist/README.md", pageData);
            console.log("All done!");
        })
        .catch(err => {
            console.log("Error");
        });
}

// Function call to initialize app
init();
