export class Person {
    // private id: number;
    // name: string;

    // tidak perlu mendeskripsikan id dan name karena sudah dideklarasikan di constructor
    constructor(private readonly id: number, public name: string) {
        // this.id = id;
        // this.name = name;
    }

    describe(this: Person) {
        console.log('Mahasiswa dengan id: ' + this.id + ", dengan nama: " + this.name);
    }
}

const saka = new Person(1, 'Saka');
saka.describe(); // Mahasiswa dengan id: 1, dengan nama: Saka
