const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('Testing instantiation of Intern instance', () => {

    const intern = new Intern();
    expect(typeof(intern)).toBe('object');

});

test('Testing getRole equal Intern', () => {

    const intern = new Intern();
    expect(intern.getRole()).toEqual('Intern');

});

test('Testing constructor and getters', () => {

    const intern = new Intern('Intern Ian', 33, 'intern@gopher.com', 'UCSC');
    
    expect(intern.getName()).toEqual('Intern Ian');
    expect(intern.getId()).toEqual(33);
    expect(intern.getEmail()).toEqual('intern@gopher.com');
    expect(intern.getSchool()).toEqual('UCSC');

});