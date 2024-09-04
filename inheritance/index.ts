import { Person } from "../class/shorthand";

class Employee extends Person {
    private position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }

    set setPosition(value: string) {
        if (value.length > 3) {
            this.position = value;
        } else {
            throw new Error('Position must be at least 3 characters long');
        }
    }

    get printPosition() {
        return this.position;
    }
}

const rivaldo = new Employee(1, 'Rivaldo', 'Software Engineer');

rivaldo.describe(); // Mahasiswa dengan id: 1, dengan nama: Rivaldo
rivaldo.setPosition = 'Software Engineer';
console.log(rivaldo.printPosition); // Software Engineer  