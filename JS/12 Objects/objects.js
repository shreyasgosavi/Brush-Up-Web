/* 
    1. Creating object using object-literal
    2. Creating another object and adding first object as it's prototype
    3. Create object using Constructor
    4. Create new object with 3rd object as its prototype using constructor
*/

let car = {
  name: "Test Car",
  engine: "100hp",
  gears: 4,
  drive() {
    console.log("I am running !!");
  },
  sayHello() {
    console.log(`I am a car and I have ${this.gears} gears`);
  },
};

/* Start using Object-Literal */
let suv = Object.create(car);

suv.name = "SUV";
(suv.offRoading = "supported"),
  (suv.drive = function () {
    console.log("I can be driven in any conditions !!");
  });

/*
let sedan = Object.create(car);
sedan.name = "Sedan";
sedan.drive = function () {
  console.log("I am best suited for travelling between cities");
};
*/

// Object.assign(sedan, car);
// Object.assign(suv, car);

/* End using Object-Literal */

/* Start Using constructor */

function Sedan() {
  this.name = "Sedan";
  this.drive = function () {
    console.log("I am best suited for travelling between cities");
  };
}

Object.assign(Sedan.prototype, car);

let sedanVehicle = new Sedan();

/* End Using constructor */
