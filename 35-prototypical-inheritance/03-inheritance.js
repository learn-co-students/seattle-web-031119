function Dog(name) {
  this.name = name
}

Dog.prototype.bark = function() {
  console.log(this.name + ' says WOOF!')
}

Dog.prototype.walk = function() {
  console.log('lovely day')
}

function TinyDog(name) {
  this.name = name
}
TinyDog.prototype = new Dog()
TinyDog.prototype.bark = function() {console.log('tiny')}

function MicroDog() {
  this.name = 'teacup'
}
MicroDog.prototype = new TinyDog()

let clifford = new Dog('clifford')
let tacoBellDog = new TinyDog('yo quiero taco bell')

clifford.bark()
tacoBellDog.bark()

clifford.walk()
tacoBellDog.walk()
