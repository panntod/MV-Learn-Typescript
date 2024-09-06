const button = document.querySelector("button")!;
const input1 = document.getElementById("input-1") as HTMLInputElement;
const input2 = document.getElementById("input-2") as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
