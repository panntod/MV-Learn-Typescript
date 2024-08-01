// Rubah file ini menjadi Typescript

// Selesaikan Interface berikut menjadi type data yang sesuai
interface Person {


    
}

// Perbaiki Error pada code dibawah ini
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log("Hello, my name is " + this.name);
    },
  };
}

const person1 = createPerson("John Doe", 30);
person1.greet();

/*
  How to run this code, open terminal then type:
  
  -> cd interface

  -> npm install -g typescript

  -> tsc --target ES6 migration.ts && node migration.js
*/