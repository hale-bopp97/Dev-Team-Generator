const path = require('path');
const fs   = require('fs');

const templateDir = path.resolve(__dirname, '../src');

const render = employees => {

    const html = [];

    html.push(...employees
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => renderMan(manager)));

    html.push(...employees
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => renderEn(engineer)));

    html.push(...employees
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => renderIn(intern)));

    //console.log(html);
    return renderPage(html.join(''));

};

const renderPage = html => {

    const  template     = fs.readFileSync(path.resolve(templateDir, 'main.html'), 'utf-8');
    return changeHolder(template, 'team', html);

};

const changeHolder = (template, holder, value) => {

    // console.log(holder + '<-holder');
    // console.log(value + '<-value');
    const pattern = new RegExp('## ' + holder + ' ##', 'gm');
    // console.log(pattern + '<-pattern');
    return template.replace(pattern, value);

}

const renderMan = manager => {

    let template = fs.readFileSync(path.resolve(templateDir, 'manager.html'), 'utf-8');

    template = changeHolder(template, 'name', `${manager.getName()}`);
    template = changeHolder(template, 'role', manager.getRole());
    template = changeHolder(template, 'id', manager.getId());
    template = changeHolder(template, 'email', manager.getEmail());
    template = changeHolder(template, 'officeNumber', manager.getOfficeNum());
    
    return template;

}

const renderEn = engineer => {

    let template = fs.readFileSync(path.resolve(templateDir, 'engineer.html'), 'utf-8');

    template = changeHolder(template, 'name', engineer.getName());
    template = changeHolder(template, 'role', engineer.getRole());
    template = changeHolder(template, 'id', engineer.getId());
    template = changeHolder(template, 'email', engineer.getEmail());
    template = changeHolder(template, 'github', engineer.getGithub());
    
    return template;

}

const renderIn = intern => {

    let template = fs.readFileSync(path.resolve(templateDir, 'intern.html'), 'utf-8');

    template = changeHolder(template, 'name', intern.getName());
    template = changeHolder(template, 'role', intern.getRole());
    template = changeHolder(template, 'id', intern.getId());
    template = changeHolder(template, 'email', intern.getEmail());
    template = changeHolder(template, 'school', intern.getSchool());
    
    return template;

}


module.exports = render;