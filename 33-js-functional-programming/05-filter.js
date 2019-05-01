// filter: iterate through an array and return a new array containing
//         items that match a certain criteria
// aa: the array to iterate over
// cb: the callback function that receives each item as a parameter
//     and returns either true or false to indicate if the item
//     should be in the result array
function filter(aa, cb) {
  let result = []
  for (let i = 0; i < aa.length; i++) {
    let item = aa[i]
    let isShouldBeIncluded = cb(item)
    if (isShouldBeIncluded) {
      result.push(item)
    }
  }
  return result
}

let aa = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let bb = filter(aa, n => n % 2 === 0)
console.log({aa})
console.log({bb})