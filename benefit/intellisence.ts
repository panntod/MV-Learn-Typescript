function greet(name: string, age: number, isStudent: boolean): string {
  return `Halo, nama saya ${name}. Saya berusia ${age} tahun. Status mahasiswa: ${isStudent}`;
}

const pesan = greet("John Doe", 21); // Akan muncul pesan error yaitu "Expected 3 arguments, but got 2"
console.log(pesan);
