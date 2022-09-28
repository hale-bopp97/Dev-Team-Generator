const path = require('path');
const fs   = require('fs');

// const distDir     = path.resolve(__dirname, '../dist');
const templateDir = path.resolve(__dirname, '../src');

const render = employees => {

    const html = [];

    html.push(...employees
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => renderMan(manager)));

    // html.push(...employees
    //     .filter(employee => employee.getRole() === 'Engineer')
    //     .map(engineer => renderEngineer(engineer)));

    // html.push(...employees
    //     .filter(employee => employee.getRole() === 'Intern')
    //     .map(intern => renderIntern(intern)));

    return renderPage(html.join(''));

};

const renderPage = html => {

    const  template     = fs.readFileSync(path.resolve(templateDir, 'main.html'), 'utf-8');
    return changeHolder(template, 'team', html);

};

const changeHolder = (template, holder, value) => {

    const pattern = new RegExp('{{ ' + holder + '}}', 'gm');
    return template.replace(pattern, value);

}

const renderMan = manager => {

    let template = fs.readFileSync(path.resolve(templateDir, 'manager.html'), 'utf-8');

    template = changeHolder(template, 'name', manager.getName());
    template = changeHolder(template, 'role', manager.getRole());
    template = changeHolder(template, 'email', manager.getEmail());
    template = changeHolder(template, 'officeNum', manager.getOfficeNum());
    
    return template;

}

module.exports = render;