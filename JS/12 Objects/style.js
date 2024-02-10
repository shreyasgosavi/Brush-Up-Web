const name = "SHR";

/* Difference between Regular and arrow anonymous function */
// let sampleFunction = {
//   localName: "SHREYAS",
//   localFunction: function () {
//     console.log(this);
//     console.log(`Name ${this.localName}`);
//     let a = () => {
//       let localName = "SHUBHAM";
//       console.log(this);
//       console.log(`Name ${this.localName}`);
//     };
//     a();

//     let b = function () {
//       let localName = "SHUBHAM";
//       console.log(`Name ${this.localName}`);
//     };
//     b();
//   },
// };
// sampleFunction.localFunction();

const human = {
  name: ["Shreyas", "Gosavi"],
  age: 23,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old !`);
  },

  bio2() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old !`);
  },
};
