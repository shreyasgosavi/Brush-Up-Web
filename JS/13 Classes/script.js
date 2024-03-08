class Car {
  name = "";
  gear;

  /* Class can only have one constructor */
  //   constructor(name){
  //     this.name = name;
  //   }
  //   constructor(gear){
  //     this.gear = gear;
  //   }
  constructor(name, gear) {
    this.name = name;
    this.gear = gear;
  }

  sayHello() {
    console.log(`Hello I have ${this.gear} gears`);
  }
}

let car = new Car("SA", 3);

class Suv extends Car {
  engine;
  #name;
  constructor(name, engine) {
    super(name);
    this.#name = "MAH";
    this.engine = engine;
  }

  drive() {
    console.log("I am best suited for travelling between cities");
  }

  #specialExecution() {
    console.log("This is a special method executable only by the browser");
  }

  specialCallable() {
    console.log("Calling special method");
    this.#specialExecution();
  }
}

let suv = new Suv("Scorpio", "100hp");
suv.specialCallable();
suv.age = 10;
suv.getAge = function () {
  console.log(`AGE is ${this.age}`);
};
// suv.#specialExecution();