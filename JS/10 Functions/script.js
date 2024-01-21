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

/*
 Exercise :

*/
let pracSection = document.querySelector("#prac1");
let count = 0;

let sampleButton = document.createElement("button");
sampleButton.textContent = "Pop Up Message";
pracSection.appendChild(sampleButton);

let deleteButton = document.createElement("button");
deleteButton.textContent = "Delete text";
pracSection.appendChild(deleteButton);

//

sampleButton.addEventListener("click", () => {
  if (count !== 3) {
    document.querySelector("#findKey").textContent = "";
    let paraContent = document.createElement("p");
    paraContent.textContent = "Text is generated";
    paraContent.setAttribute("class", "sampleText");
    pracSection.appendChild(paraContent);
    count++;
  } else {
    document.querySelector("#findKey").value = "Reached the limit";
  }
});

deleteButton.addEventListener("click", () => {
  if (count != 0) {
    let para = document.querySelector(".sampleText");
    pracSection.removeChild(para);
    count--;
  } else {
    document.querySelector("#findKey").value = "No text present";
  }
});
