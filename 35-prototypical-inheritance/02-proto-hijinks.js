function Die(sides) {
  this.sides = sides
}

// choose a random integer between
// 1 and this.sides
Die.prototype.roll = function() {
  let choice = Math.floor(this.sides * Math.random()) + 1
  return choice
}

let dd = new Die(6)
let cheaterDie = new Die(6)

Die.prototype.roll = function() {return 1}

console.log(dd.roll())
console.log(cheaterDie.roll())

console.log(dd.roll())
console.log(cheaterDie.roll())

console.log(dd.roll())
console.log(cheaterDie.roll())