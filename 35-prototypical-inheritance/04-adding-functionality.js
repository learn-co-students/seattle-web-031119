Array.prototype.first = function() {
  return this[0]
}

Array.prototype.last = function() {
  return this[this.length - 1]
}

let aa = [1, 2, 3, 4, 5]
console.log(aa.first())
console.log(aa.last())

String.prototype.pluralize = function() {
  return this + 's'
}

String.prototype.times = function(cb) {
  let n = parseInt(this)
  for (let i = 0; i < n; i++) {
    cb(i)
  }
}