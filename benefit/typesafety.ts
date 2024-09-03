// Fungsi yang hanya menerima angka
function add(a: number, b: number): number {
    return a + b;
}

// Panggilan fungsi yang benar
let result = add(5, 3);

// Panggilan fungsi yang salah
let wrongResult = add("5", 3);