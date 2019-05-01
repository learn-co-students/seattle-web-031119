function click() {
  console.log('click')
}

function bang() {
  console.log('BANG!')
}

// "First-class functions" means that functions are just like any
// other value or variable in our program. Here we can delcare choice
// and use an if statement to set choice to refer to a function and
// execute whichever function later by invoking the choice() variable
let choice;
if (Math.random() < 1/6) {
  choice = bang
} else {
  choice = click
}
choice()