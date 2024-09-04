class Departements {
    name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Departements) {
        console.log('Departements: ' + this.name);
    }

    addEmployee(employee: string) {
        // validation etc
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const bussiness = new Departements('Bussiness');
bussiness.addEmployee('Max');
bussiness.addEmployee('Manu');

bussiness.employees[2] = 'Anna'; // This is not possible because employees is private

bussiness.describe(); // Departements: Bussiness
