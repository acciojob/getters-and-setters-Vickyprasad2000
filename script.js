/*  your css code here. If applicable */
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for age
    set age(value) {
        this._age = value;
    }

    // Getter for age
    get age() {
        return this._age;
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

