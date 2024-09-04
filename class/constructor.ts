class Departement {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Departement) {
        console.log('Departement: ' + this.name);
    }
}

const accounting = new Departement('Accounting');

accounting.describe(); // Departement: Accounting

const accountingCopy = { describe: accounting.describe };

accountingCopy.describe(); // Error: TypeError: this.describe