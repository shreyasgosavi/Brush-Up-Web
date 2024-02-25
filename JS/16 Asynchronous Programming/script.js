function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"

let count = 0;

function printHello() {
  if (count == 878) {
    return;
  }
  console.log("Hello");
  count++;
  printHello();
}

printHello();

document.querySelector("textarea").addEventListener("click", () => {
  console.log("Text entered");
});

const request = new XMLHttpRequest();
request.send();
