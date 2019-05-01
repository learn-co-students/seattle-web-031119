function click() {
  console.log('click')
}

function bang() {
  console.log('BANG!')
}

function fancyDinner() {
  console.log('steak')
}

function cheapDinner() {
  console.log('mac n cheese')
}

// play two games of roullette with different functions
roullette(bang, click),
roullette(fancyDinner, cheapDinner)

// get meta with it and play roullette over which version of roullette we'll play
roullette(
  () => roullette(bang, click),
  () => roullette(fancyDinner, cheapDinner)
)

function roullette(option1, option2) {
  if (Math.random() < 1/6) {
    choice = option1
  } else {
    choice = option2
  }
  choice()
}
