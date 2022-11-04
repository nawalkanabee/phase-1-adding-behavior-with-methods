// Your code here

class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
    speak() {
      return `${this.name} says meow!`;
    }
  }
 
 
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
    speak() {
      if (this.sex == "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
 
 