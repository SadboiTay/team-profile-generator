const Employee = require('../lib/Employee');

const edMockData = {
    name: 'Ed',
    id: 1,
    email: "edsworld@yahoo.com"
}

test('creates employee object', () => {
    const employee = new Employee(edMockData);

    expect(employee).toEqual(expect.any(Object));
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('gets name value', () => {
    const employee = new Employee(edMockData);

    expect(employee.getName()).toEqual("yeet");
})

test('gets role value', () => {
    const employee = new Employee(edMockData);

    expect(employee.getRole()).toEqual("Employee");
})