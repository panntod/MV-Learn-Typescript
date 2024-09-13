function MyDecorator() {
  return function (constructor: Function) {
    console.log("Logging Something...");
    console.log(constructor);
  };
}

@MyDecorator()
class MyClass {
  name: string = "John Doe";

  constructor() {
    console.log("Creating Person...");
  }
}

const myClass = new MyClass();
