let aa = [-999, -1, -2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13]
let bb = [5, 99, 2, 3, 4, -1, 6, 0, 88, 9, -2, 7]

function firstMissingPositive(aa) {
  let seen = {}
  let max = aa[0]

  aa.forEach(n => {
    seen[n] = true
    if (n > max) {
      max = n
    }
  })

  for (i = 1; i < max; i++) {
    if (!seen[i]) {
      return i
    }
  }
}