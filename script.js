class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get name(){
        return this.name;
    }
    
    set age(value){
        this.age = value;
    }

	get age() {
	    return this.age;
    }
}

class Student extends Person {

    constructor(){
        super();
    }

    Study(){
        console.log(this.name + " is Studying")
    }
}

class Teacher extends Person {
    constructor(){
        super();
    }

    teach(){
        console.log(this.name + " is Teaching")
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

