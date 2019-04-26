class Bike {
  constructor() {
    this.frontWheel = new Wheel()
    this.backWheel = new Wheel()
    this.engine = new Pedals()
  }
}

class Car {
  constructor() {
    this.w1 = new Wheel()
    this.w2 = new Wheel()
    this.w3 = new Wheel()
    this.w3 = new Wheel()
    this.engine = new Motor()    
  }
}

// Building a hierarchy of classes that inherit
// from each other where each subclass gains abilites
// of their parent
class Employee {}

class FullTime extends Employee {
  accessConfidential() {}
}
class NorthAmericanFulltime extends Fulltime {}
class EuropeanFulltime extends Fulltime {}

class Contractor extends Employee {}
class Intern extends Employee {}

// hire a new intern that has access to special confidential
// resources, and spends half the summer in America, and half
// in London


class Employee {
  constructor() {
    this.employeeId = Math.random()
  }
}
class FullTime {
  constructor() {
    this.employee = new Employee()
  }
}

class Contractor {}
class Intern {}
class NorthAmerican {}
class European {}

class NorthAmericanEUIntern {
  constructor() {
    this.employee = new Employee()
    this.eu = new NorthAmerican()
    this.na = new European()
    this.intern = new Intern()
  }

  // this intern moves from NY to London after July
  getPaid() {
    // they should get NA pay before July
    if ((new Date()) < 'July') {
      return this.na.salary()
    }
    // and get EU pay after July
    return this.eu.salary()
  }
}