function Die(sides) {
  return {
    roll: function() {
      return Math.floor(Math.random() * sides) + 1
    }
  }
}

let d6 = Die(6)
console.log(d6.roll())

let cheaterDie = Die(6)
cheaterDie.roll = function() {return 6}

console.log('real', d6.roll())
console.log('fake', cheaterDie.roll())

console.log('real', d6.roll())
console.log('fake', cheaterDie.roll())

console.log('real', d6.roll())
console.log('fake', cheaterDie.roll())

console.log('real', d6.roll())
console.log('fake', cheaterDie.roll())
