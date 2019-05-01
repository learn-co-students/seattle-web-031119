function reduce(aa, cb, initial) {
  let result = initial
  for (let i = 0; i < aa.length; i++) {
    result = cb(result, aa[i])
  }
  return result
}

let aa = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let bb = reduce(aa, (accumulator, item) => {
  console.log({accumulator, item})
  return accumulator + item
}, 0)

console.log({aa})
console.log({bb})

let votes = ['bush', 'bush', 'bush', 'hedge', 'fern', 'hedge']
let result = reduce(votes, (tally, vote) => {
  if (tally[vote] === undefined) {
    tally[vote] = 0
  }
  tally[vote]++
  return tally
}, {})
console.log({votes, result})