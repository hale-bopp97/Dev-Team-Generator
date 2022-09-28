const Employee = require('../lib/Employee');

test('Testing instantiation of Employee instance', () => {

    const employee = new Employee();
    expect(typeof(employee)).toBe('object');

});

test('Testing getRole equal Employee', () => {

    const employee = new Employee();
    expect(employee.getRole()).toEqual('Employee');

});

test('Testing Employee constuctor and getters', () => {

    const employee = new Employee('Bob', 3, 'bob@bob.com');
    
    expect(employee.getName()).toEqual('Bob');
    expect(employee.getId()).toEqual(3);
    expect(employee.getEmail()).toEqual('bob@bob.com');

});