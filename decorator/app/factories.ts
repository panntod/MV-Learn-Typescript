function WithTemplate(template: string, hookId: string) {
    return function (_: Function) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
  }
  
  @WithTemplate("<h1>Creating Some Person</h1>", "full-name")
  class Person {
    name: string = "John Doe";
  
    constructor() {
      console.log("Creating Person...");
    }
  }
  
  const pers = new Person();
  