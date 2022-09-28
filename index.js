const inquirer   = require('inquirer');
const Engineer   = require('./lib/Engineer');
const Intern     = require('./lib/Intern');
const Manager    = require('./lib/Manager');
const render     = require('./lib/HtmlRenderer');
const fs         = require('fs');
const path       = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const distPath   = path.join(OUTPUT_DIR, 'team.html');
const employees  = [];

const managerQuestions = [

    {

        type:    'input',
        name:    'managerName',
        message: 'Manager name: ',
        
    },

    {

        type: 'input',
        name: 'managerId',
        message: 'Manager ID: ',
        
    },

    {

        type: 'input', 
        message: 'Manager email: ',
        name: 'managerEmail',

    },

    {

        type: 'input',
        message: 'Manager office number: ',
        name: 'managerOfficeNum',

    }

];

const engineerQuestions = [

    {

        type:    'input',
        name:    'engineerName',
        message: 'Engineer name: ',
        
    },

    {

        type: 'input',
        name: 'engineerId',
        message: 'Engineer ID: ',
        
    },

    {

        type: 'input', 
        message: 'Engineer email: ',
        name: 'engineerEmail',

    },

    {

        type: 'input',
        message: 'Github: ',
        name: 'engineerGithub',

    }


];

const internQuestions = [

    {

        type:    'input',
        name:    'internName',
        message: 'intern name: ',
        
    },

    {

        type: 'input',
        name: 'internId',
        message: 'Intern ID: ',
        
    },

    {

        type: 'input', 
        message: 'intern email: ',
        name: 'internEmail',

    },

    {

        type: 'input',
        message: 'University: ',
        name: 'internsUniversity',

    }

];

const makeTeamQuestions = [

    {

        type: 'list',
        message: 'Next team member: ',
        choices: ['Engineer', 'Intern', 'Generate List'],
        name: 'teamMember',
    
    }

];

function makeManager() {

    inquirer.prompt(managerQuestions).then(res => {

        employees.push(new Manager(res.managerName, 
                                   res.managerId, 
                                   res.managerEmail, 
                                   res.managerOfficeNum));

        makeTeam();

    });

}

function makeEngineer() {
    
    inquirer.prompt(engineerQuestions).then(res => {

        employees.push(new Engineer(res.engineerName,
                                    res.engineerId,
                                    res.engineerEmail,
                                    res.engineerGitHub));

        makeTeam();

    });

}

function makeIntern() {
    
    inquirer.prompt(internQuestions).then(res => {

        employees.push(new Intern(res.internName,
                                  res.internId,
                                  res.internEmail,
                                  res.internUniversity))

        makeTeam();

    });

}

function buildTeam() {

    console.log('building...');
    fs.writeFileSync(distPath, render(employees), 'utf-8');

}

function makeTeam() {

    inquirer.prompt(makeTeamQuestions).then(res => {

        switch(res.teamMember) {

            case 'Engineer':
                makeEngineer();
                break;

            case 'Intern':
                makeIntern();
                break;
                
            default:
                buildTeam();
                
        }

    });

}

function init() {

    makeManager();

}

init();