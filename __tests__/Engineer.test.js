const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('Testing instantiation of Engineer instance', () => {
    
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object');

});

test('Testing getRole equal Engineer', () => {

    const engineer = new Engineer();
    expect(engineer.getRole()).toEqual('Engineer');

});

const engineer = new Engineer('Earl', 5, 'earl@engineer.com', 'someGitHub@github.com');

test('Testing engineer getName()', () => {

    let expectedValue = 'Earl';
    let actualValue = engineer.getName();
    expect(actualValue).toBe(expectedValue);
    
});