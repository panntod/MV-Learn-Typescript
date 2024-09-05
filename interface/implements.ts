import { Person } from "./person";  // Memanggil interface dari file lain

class Student implements Person {   // Membuat class Student yang mengimplementasikan interface Person
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

let student1: Person = new Student("John", "Doe", 25); // Membuat instance dari class Student
student1.greet("Hello");                               // Output: Hello, John Doe

interface Employee extends Person { // Membuat interface Employee yang meng-extends interface Person
    salary: number;
    department: string;
}

interface ReadOnlyPerson {          // Membuat interface yang readonly
    readonly firstName: string;
    readonly lastName: string;
    readonly age: number;
}
