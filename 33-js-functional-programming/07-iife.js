// IIFE (iffy) -
// Immediately
// Invoked
// Function
// Expression

// a function that returns a function
// this function returns a function that will give you the next
// number in the fibonacci sequence every time you call it
let fibonacciSequence = (() => {
  // n0 and n1 represent the last two numbers to occur
  // in the fibonacci sequence.
  let n0 = 1  
  let n1 = 1

  // every time this returned function is called
  // it will add together the last two numbers in the fib sequence
  // it will update the numbers to keep track of the new last two
  // it will return the value of those numbers added together
  return () => {
    let nextValue = n0 + n1
    n0 = n1
    n1 = nextValue
    return nextValue
  }
})()

let f1 = fibonacciSequence
console.log('access n0 and n1', f1.n0, f1.n1)
console.log(f1())
console.log(f1())
console.log(f1())
console.log(f1())
console.log(f1())
console.log(f1())