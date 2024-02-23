class Car {
  name = "";
  gear;


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
  #engine;
  constructor(name, engine) {
    super(name);
    this.#engine = engine;
  }

  drive() {
    console.log("I am best suited for travelling between cities");
  }
}

let suvVeh = new Suv('Scorpio','110bhp');
console.log(suvVeh.#engine);