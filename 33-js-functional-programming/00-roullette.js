function click() {
  console.log('click')
}

function bang() {
  console.log('BANG!')
}

// function roullette 
if (Math.random() < 1/6) {
  bang()
} else {
  click()
}