class Point {
  static all = []

  constructor(xx=0, yy=0) {
    this.xx = xx
    this.yy = yy

    Point.all.push(this)
  }

  // define an instance method attached to single objects
  distanceTo(other) {
    return Point.distance(this, other)
  }

  static distance(p1, p2) {
    let dx = p1.xx - p2.xx
    let dy = p1.yy - p2.yy
    return Math.sqrt(dx * dx + dy * dy)
  }
}

Point.all = []

let seattle = new Point(47.6062, 122.3321)
let portland = new Point(45.5155, 122.6793)
let distance = Point.distance(seattle, portland)
console.log('all:', Point.all.length)
console.log('Point.distance:', distance)

console.log('seattle.distance:', seattle.distanceTo(portland))