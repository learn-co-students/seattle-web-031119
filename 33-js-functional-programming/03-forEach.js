// we write for loops that iterate over arrays all the time
// what if we could abstract that away into a function, and
// pass another function to that function that defines what
// we actually want to do!
aa = [23, 534, 786, 2, 234, 765, 2]
for (let i = 0; i < aa.length; i++) {
  console.log(aa[i])
}


function forEach(aa, cb) {
  for (let i = 0; i < aa.length; i++) {
    let item = aa[i]
    cb(item, i, aa)
  } 
}

forEach(aa, item => {
  console.log('callback:', item)
})