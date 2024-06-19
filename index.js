class Person {
    Name;
    Age;
    constructor(Name, Age) {
        this.Name = Name;
        this.Age = Age;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(Name, Age, rollNumber) {
        super(Name, Age);
        this.rollNumber = rollNumber;
    }
    registerforcourses(course1) {
        this.courses.push(course1);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(Name, Age, salary) {
        super(Name, Age);
        this.salary = salary;
    }
    assignCourse(course1) {
        this.courses.push(course1);
    }
}
class course {
    id;
    name;
    students = [];
    Instructor = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(Std) {
        this.students.push(Std);
    }
    setInstructor(intr) {
        this.Instructor.push(intr);
    }
}
class Departments {
    Name;
    courses = [];
    constructor(Name) {
        this.Name = Name;
    }
    addcourse(cousre) {
        this.courses.push(cousre);
    }
}
const std1 = new Student("ismail", 25, 1234);
const std2 = new Student("Hammad", 18, 1235);
const int1 = new Instructor("ali", 35, 50000);
const int2 = new Instructor("Hamza", 25, 40000);
const course1 = new course(1, "blockchain");
const course2 = new course(2, "fullstack");
const D1 = new Departments("ComputerScience");
course1.setInstructor(int1);
course1.addStudent(std1);
course1.addStudent(std2);
course2.setInstructor(int2);
course2.addStudent(std2);
std1.registerforcourses(course1);
std2.registerforcourses(course1);
std2.registerforcourses(course2);
int1.assignCourse(course1);
int2.assignCourse(course2),
    D1.addcourse(course1);
D1.addcourse(course2);
console.log(std1.courses);
export {};
