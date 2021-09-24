const Engineer = require('../lib/Engineer');

const donaldMockData = {
    name: 'Donald',
    id: 3,
    email: "donaldsworld@yahoo.com",
    github: 'https://github.com/donaldstheman'
}

test('creates engineer object', () => {
    const engineer = new Engineer(donaldMockData);

    expect(engineer).toEqual(expect.any(Object));
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('gets name value', () => {
    const engineer = new Engineer(donaldMockData);

    expect(engineer.getName()).toEqual('Donald');
})

test('gets id value', () => {
    const engineer = new Engineer(donaldMockData);

    expect(engineer.getId()).toEqual(engineer.id);
})

test('gets email value', () => {
    const engineer = new Engineer(donaldMockData);

    expect(engineer.getEmail()).toEqual(engineer.email);
})

test('gets github value', () => {
    const engineer = new Engineer(donaldMockData);

    expect(engineer.getGithub()).toEqual(engineer.github);
})

test('gets role value, overriden from employee', () => {
    const engineer = new Engineer(donaldMockData);

    expect(engineer.getRole()).toEqual("Engineer");
})