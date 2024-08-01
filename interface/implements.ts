// Memanggil interface dari file lain
import { Person } from "./person";

// Membuat class Student yang mengimplementasikan interface Person
class Student implements Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet(message: string) {
        console.log(message + ", " + this.firstName + " " + this.lastName);
    }
}

// Membuat instance dari class Student
let student1: Person = new Student("John", "Doe", 25);
student1.greet("Hello"); // Output: Hello, John Doe

// Membuat interface Employee yang meng-extend interface Person
interface Employee extends Person {
    salary: number;
    department: string;
}

// Membuat interface yang readonly
interface ReadOnlyPerson {
    readonly firstName: string;
    readonly lastName: string;
    readonly age: number;
}
