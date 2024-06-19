class Person {
  Name: string;
  Age: number;
  constructor(Name: string, Age: number) {
    this.Name = Name;
    this.Age = Age;
  }
}
class Student extends Person {
  rollNumber: Number;
  courses: course[] = [];
  constructor(Name: string, Age: number, rollNumber: number) {
    super(Name, Age);
    this.rollNumber = rollNumber;
  }
  registerforcourses(course1: course) {
    this.courses.push(course1);
  }
}
class Instructor extends Person {
  salary: number;
  courses: course[] = [];
  constructor(Name: string, Age: number, salary: number) {
    super(Name, Age);
    this.salary = salary;
  }
  assignCourse(course1: course) {
    this.courses.push(course1);
  }
}
class course {
  id: number;
  name: string;
  students: Student[] = [];
  Instructor: Instructor[] = [];
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  addStudent(Std: Student) {
    this.students.push(Std);
  }
  setInstructor(intr: Instructor) {
    this.Instructor.push(intr);
  }
}
class Departments{
    Name:string;
    courses:course[]=[];
constructor(Name:string){
this.Name = Name;
}
addcourse(cousre:course){
    this.courses.push(cousre)
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