const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('Testing instantiation of Manager instance', () => {

    const manager = new Manager('john', 2, 'john@john.com');
    expect(typeof(manager)).toBe('object');

});

test('Testing getRole equal Manager', () => {

    const manager = new Manager();
    expect(manager.getRole()).toEqual('Manager');

});

test('Testing constructor and getters', () => {

    const manager = new Manager('Manager Mark', 13, 'boss@manager.com', 44);
    
    expect(manager.getName()).toEqual('Manager Mark');
    expect(manager.getId()).toEqual(13);
    expect(manager.getEmail()).toEqual('boss@manager.com');
    expect(manager.getOfficeNum()).toEqual(44);

});