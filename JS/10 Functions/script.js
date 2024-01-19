//Built in functions

// let randomNumber = Math.floor(Math.random() * 10);

// let randomNumberString = String(randomNumber);

// console.log("Parsing into integer " + parseInt(randomNumberString));
// console.log("Parsing into float " + parseFloat(randomNumberString));

let objectMethod = {
  addNumber: function (a, b) {
    return a + b;
  },
};

const result = objectMethod.addNumber(2, 3);
console.log("Result " + result);

//Function with default parameter
function greetings(name = "") {
  if (name) {
    name = " " + name;
  }
  console.log(`Hello${name}, Good Morning have a nice day !! 😁`);
}

greetings();
greetings("Shreyas");

// In case of addEventListener() browser will pass a parameter containing details about the event.

let identifyButton = document.getElementById("findKey");

//Normal Anonymous Function
// identifyButton.addEventListener("keydown", function (event) {
//   console.log("Key Pressed was : " + event.key);
// });

//Arrow function
// identifyButton.addEventListener("keydown", (event) => {
//   console.log("Key pressed was : " + event.key);
// });

//Simplified
identifyButton.addEventListener("keydown", (event) => {
  console.log("Key pressed was : " + event.key);
});
