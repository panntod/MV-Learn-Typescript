// T adalah placeholder untuk type yang akan digunakan
function swap<T>(a: T, b: T): [T, T] {
  return [b, a];
}

// Contoh penggunaan di number
let num1 = 10;
let num2 = 20;
let [num3, num4] = swap(num1, num2);

// Contoh penggunaan di string
let str1 = "Hello";
let str2 = "World";
let [str3, str4] = swap(str1, str2);
