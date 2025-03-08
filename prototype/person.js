
function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// Employee constructor function (inherits from Person)
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Call Person constructor
    this.jobTitle = jobTitle;
}

// Setting up prototypical inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Adding work method to Employee prototype
Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// Demonstration
const person1 = new Person("Alice", 30);
const employee1 = new Employee("Bob", 25, "Software Engineer");

person1.introduce(); // Hi, my name is Alice and I am 30 years old.
employee1.introduce(); // Hi, my name is Bob and I am 25 years old.
employee1.work(); // Bob is working as a Software Engineer.
