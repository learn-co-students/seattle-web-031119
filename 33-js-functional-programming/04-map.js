// map: convert every element in an array to something else
// aa: the array to iterate over
// cb: the callback function that receives each item in the array
//     and returns the new value of that item.
function map(aa, cb) {
  let result = []
  for (let i = 0; i < aa.length; i++) {
    let item = aa[i]
    let value = cb(item)
    result.push(value)
  }
  return result
}

let aa = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let bb = map(aa, n => n * n)
console.log({aa})
console.log({bb})