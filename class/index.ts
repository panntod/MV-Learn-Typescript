class Departement {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

const accounting = new Departement('Accounting');
console.log(accounting);
