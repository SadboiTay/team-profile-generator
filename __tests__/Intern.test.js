const Intern = require('../lib/Intern');

const ryanMockData = {
    name: 'Ryan',
    id: 4,
    email: "ryanisceo@wuphf.com",
    school: "Cornell"
}

test('creates intern object', () => {
    const intern = new Intern(ryanMockData);

    expect(intern).toEqual(expect.any(Object));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('gets name value', () => {
    const intern = new Intern(ryanMockData);

    expect(intern.getName()).toEqual('Ryan');
})

test('gets id value', () => {
    const intern = new Intern(ryanMockData);

    expect(intern.getId()).toEqual(intern.id);
})

test('gets email value', () => {
    const intern = new Intern(ryanMockData);

    expect(intern.getEmail()).toEqual(intern.email);
})

test('gets school value', () => {
    const intern = new Intern(ryanMockData);

    expect(intern.getSchool()).toEqual(intern.school);
})