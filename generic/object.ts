function merge(obj1: object, obj2: object) {
  // Contoh penggunaan di object
  return Object.assign(obj1, obj2);
}

const mergedObj = merge({ name: "John" }, { age: 30 }); 

/**
 * Materi:
 * Menggunakan generic, buatlah function merge yang dapat menerima 2 parameter dengan type yang berbeda
 * Buatlah constraint pada generic type parameter yang hanya menerima object (extends)
 */