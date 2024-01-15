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
