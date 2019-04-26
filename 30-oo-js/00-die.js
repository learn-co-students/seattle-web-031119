// classes are espeically good at encapsulating
// data, and methods
class Die {
  constructor(faces=6) {
    // save the faces on an instance property of this object
    this.faces = faces 
  }

  // return a number between 1 and faces
  // like a 6-sided die
  roll() {
    let number = Math.floor(Math.random() * this.faces) + 1
    return number
  }
}

// Inheritance
// use 'extends' to inherit all the properties and methods
// from a parent class to use in a child, sub-class
class CheaterDie extends Die {
  // half the time this die returns either 3 or 4
  roll() {
    let rand = Math.random()
    if (rand < .25) {
        return 30
    } else if (rand < .5) {
      return 40
    } else {
      return super.roll()
    }
  }
}

// Composition
// Instead of formally inheriting methods with extends
// just create an instance of whatever class you want inside this
// new class, and call it's methods whenever you want to use them.
class Penny {
  constructor() {
    this._penny = new Die(2)
  }

  flip() {
    if (this._penny.roll() === 1) {
      return 'heads'
    }
    return 'tails'
  }
}

let penny = new Penny(2)
let d6 = new Die(6)
let d20 = new Die(20)

console.log('friday night', d20.roll())
console.log('bagels', d20.roll())
console.log('comprehensive understanding of contextual this in JavaScript', d20.roll())
console.log('project week', d20.roll())
console.log('initiative', d20.roll())
console.log('foo', d20.roll())
console.log('hellmo', d20.roll())
console.log()

let cheater1 = new CheaterDie(6)
let cheater2 = new CheaterDie(6)

let i = 100
while (i--) {
  console.log(cheater1.roll() + cheater2.roll())
}
