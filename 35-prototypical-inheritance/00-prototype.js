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
let d2 = Die(6)
console.log(dd.sides)
console.log(d2)

console.log(dd.roll())