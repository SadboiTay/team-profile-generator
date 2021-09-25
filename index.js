const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const mockChase = {
    name: 'Chase',
    id: '1',
    email: 'chase.com',
    officeNumber: '13'
}

const mockTaylor = {
    name: 'Taylor',
    id: '2',
    email: 'Taylor.com',
    github: 'SadboiTay'
}

const mockDallin = {
    name: 'Dallin',
    id: '3',
    email: 'Dallin.com',
    github: 'dallindawg2'
}

const mockKaikee = {
    name: 'Kaikee',
    id: '4',
    email: 'Kaikee.com',
    school: 'HomePoint Financial'
}

mockTeamData = [
    new Manager(mockChase),
    new Engineer(mockTaylor),
    new Engineer(mockTaylor),
    new Engineer(mockTaylor),
    new Engineer(mockDallin),
    new Engineer(mockDallin),
    new Engineer(mockDallin),
    new Intern(mockKaikee),
    new Intern(mockKaikee)
]

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
                addIntern(teamData);
                break;
            case "I'm done adding team members":
                endProcess(teamData);
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
                endProcess(teamData);
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
                endProcess(teamData);
        }
    })
}

const writeToFile = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
        }

        console.log(`
            -------------------------------
            Team Profile Webpage Generated!
            -------------------------------
        `);
    })
}

const copyCssFile = () => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
            console.log(err);
        }
    })
}

const endProcess = teamData => {
    const pageTemplate = generateHTML(teamData);
    writeToFile(pageTemplate);
    copyCssFile();
}

// initialize();

endProcess(mockTeamData);