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
  constructor(name, engine) {
    super(name);
    this.engine = engine;
  }

  drive() {
    console.log("I am best suited for travelling between cities");
  }
}

let suv = new Suv("Scorpio", "100hp");
