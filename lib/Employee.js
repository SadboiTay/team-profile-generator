class Employee {
    constructor({ name, id, email }) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log('yeet');
    }
    
    getId() {
        console.log('yeet');
    }

    getEmail() {
        console.log('yeet');
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;