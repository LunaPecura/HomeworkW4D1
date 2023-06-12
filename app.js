class Hamster {
  owner = "";
  name;
  price = 15;

  constructor(name) {
    this.name = name;
  }

  wheelRun() { console.log("squeak squeak"); }
  eatFood() { console.log("nibble nibble"); }
  getPrice() { return this.price; }
}

/* myHamster = new Hamster("Hammy");
myHamster.wheelRun();
myHamster.eatFood();
console.log(myHamster.getPrice()); */



class Person {
  name;
  age = 0;
  height = 0;
  weight = 0;
  mood = 0;
  hamsters = [];
  bankAccount = 0;

  constructor(name) {
    this.name = name;
  }

  getName() { return this.name; }
  getAge() { return this.age; }
  getWeight() { return this.weight; }

  greet() {
    console.log(`Hi ${this.name}!`);
  }

  eat() { 
    this.weight++; this.mood++; 
  }

  exercise() { 
    this.weight--; 
  }

  ageUp() { 
    this.age++; 
    this.height++;
    this.weight++; 
    this.mood--; 
    this.bankAccount += 10; 
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

myPerson = new Person("Bumpy");
myHamster = new Hamster("Hammy");
console.log(myPerson.getName());
console.log(myPerson.getAge());
console.log(myPerson.getWeight());
myPerson.greet();
myPerson.eat(); console.log(`Post eating: ${myPerson}`);
myPerson.exercise(); console.log(`Post exercise: ${myPerson}`);
myPerson.ageUp(); console.log(`Post age-up: ${myPerson}`);
myPerson.buyHamster(myHamster); console.log(`Post hamster: ${myPerson}`);
console.log(myPerson);