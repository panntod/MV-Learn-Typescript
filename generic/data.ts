let hobby: Array<string> = [];// Contoh penggunaan string di array
let nomor: Array<number> = [];// Contoh penggunaan number di array

interface Person<T> { // Contoh penggunaan di interface
    name: string;
    age: number;
    data: T;
}

const swap = <T>(a: T, b: T): [T, T] => [b, a]; // T adalah placeholder untuk type yang akan digunakan

let num1 = 10; 
let num2 = 20;
let [num3, num4] = swap(num1, num2); // Contoh penggunaan di number

let str1 = "Hello"; 
let str2 = "World";
let [str3, str4] = swap(str1, str2); // Contoh penggunaan di string
