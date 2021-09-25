const Employee = require("../lib/Employee");

const generateManagerCard = (teamData) => {
    const [manager] = teamData;

    return `
    <div class="col-4 card mt-5 mx-3 shadow">
        <div class="card-header">
            <h2>${manager.getName()}</h2>
            <h4><i class="fas fa-star"></i> Manager</h4>
        </div>
        <div class="manager card-body">
            <div class="card-text"><strong>ID: </strong>${manager.getId()}</div>
            <div class="card-text"><strong>Email: </strong>${manager.getEmail()}</div>
            <div class="card-text"><strong>Office Number: </strong>${manager.getOfficeNumber()}</div>
        </div>
    </div>
    `;
}

const generateEngineerCard = (teamData) => {
    const engineers = teamData.filter(employee => employee.getRole() === 'Engineer');

    return engineers.map((engineer) => {
        return `
        <div class="col-3 card mt-5 mx-3 shadow">
            <div class="engineer card-header">
                <h2>${engineer.getName()}</h2>
                <h4><i class="fas fa-hammer"></i> Engineer</h4>
            </div>
            <div class="card-body">
                <div class="card-text"><strong>ID: </strong>${engineer.getId()}</div>
                <div class="card-text"><strong>Email: </strong>${engineer.getEmail()}</div>
                <div class="card-text"><strong>GitHub: </strong>${engineer.getGithub()}</div>
            </div>
        </div>
        `;
    }).join('');
}

const generateInternCard = (teamData) => {
    const interns = teamData.filter(employee => employee.getRole() === 'Intern');

    return interns.map((intern) => {
        return `
        <div class="col-3 card mt-5 mx-3 shadow">
            <div class="intern card-header">
                <h2>${intern.getName()}</h2>
                <h4><i class="fas fa-hammer"></i> Intern</h4>
            </div>
            <div class="card-body">
                <div class="card-text"><strong>ID: </strong>${intern.getId()}</div>
                <div class="card-text"><strong>Email: </strong>${intern.getEmail()}</div>
                <div class="card-text"><strong>GitHub: </strong>${intern.getSchool()}</div>
            </div>
        </div>
        `;
    }).join('');
}

module.exports = (teamData) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <header class="shadow">
            <h1 class="text-center p-4">My Team</h1>
        </header>
    
        <div class="container">
            <div class="row justify-content-center">
                ${generateManagerCard(teamData)}
            </div>
            <div class="row justify-content-center">
                ${generateEngineerCard(teamData)}
            </div>
            <div class="row justify-content-center">
                ${generateInternCard(teamData)}
            </div>
        </div>
    
    </body>
    
    </html>
    `;
}