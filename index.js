const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const initialize = () => {
    const teamData = [];

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter team manager's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager's id:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's id number");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number:",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'Select a team member to add:',
            choices: [
                'Engineer',
                'Intern',
                "I'm done adding team members"
            ]
        } 
    ]).then(managerData => {
        const { addTeamMember } = managerData;

        const manager = new Manager(managerData);

        teamData.push(manager);

        switch (addTeamMember) {
            case 'Engineer':
                addEngineer(teamData);
                break;
            case 'Intern':
                console.log("Intern coming right up");
                break;
            case "I'm done adding team members":
                console.log("have a nice day");
        }
    })
}

const addEngineer = (teamData) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter engineer's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter engineer's id:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's id number");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: "Enter engineer's email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'github',
            message: "Enter engineer's GitHub username:",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub username");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'Select a team member to add:',
            choices: [
                'Engineer',
                'Intern',
                "I'm done adding team members"
            ]
        }
    ]).then(engineerData => {
        const { addTeamMember } = engineerData;
        const engineer = new Engineer(engineerData);

        teamData.push(engineer);

        switch (addTeamMember) {
            case 'Engineer':
                addEngineer(teamData);
                break;
            case 'Intern':
                addIntern(teamData);
                break;
            case "I'm done adding team members":
                console.log("have a nice day");
        }
    })
}

const addIntern = (teamData) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter intern's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter intern's id:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's id number");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: "Enter intern's email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'school',
            message: "Enter intern's school:",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'Select a team member to add:',
            choices: [
                'Engineer',
                'Intern',
                "I'm done adding team members"
            ]
        }
    ]).then(internData => {
        const { addTeamMember } = internData;
        const intern = new Intern(internData);

        teamData.push(intern);

        switch (addTeamMember) {
            case 'Engineer':
                addEngineer(teamData);
                break;
            case 'Intern':
                addIntern(teamData);
                break;
            case "I'm done adding team members":
                console.log("have a nice day");
                console.log(teamData);
        }
    })
}

initialize();