// In javascript there is a difference between calling vs executing a function
// if we add parenthesis we're executing the function
// if we do not have parens we're simply referring to the function
// in this case we're referring to handleSubmit, and it will be executed later
let form = document.getElementById('todo-form')
form.addEventListener('submit', handleSubmit)

// Observe that invoking/calling/executing foo99()
// would return the value 99, so invoking it when passing
// it to the addEventListener would be like saying "do 99"
// when the form submits. Hence, we write handleSubmit
// instead of handleSubmit() when attaching the listener.
// form.addEventListener('submit', foo99())
// function foo99() {
//   return 99
// }

function handleSubmit(ev) {
  // call the preventDefault() function to prevent
  // the form from navigating to another page.
  ev.preventDefault()

  let list = document.getElementById('list')

  // ev.target simply refers to the HTML element associated with the event
  console.log('submit:', ev.target)

  // innerHTML is absolutely evil
  // li.innerHTML = todoText.value

  // use ev.target to access the form
  // use .elements off a form to refer to inputs by their name attribute
  let li = document.createElement('li')
  li.textContent = ev.target.elements['todo-text'].value

  // find the priority
  // then attach a proper CSS class to change the way it appears
  console.log('children:', ev.target.children)
  let priority = ev.target.elements['priority'].value
  if (priority !== 'default') {
    let className = priority + '-priority'
    li.classList.add(className)
  }

  let span = document.createElement('span')
  span.textContent = 'X'
  span.addEventListener('click', () => {
    li.remove()
  })

  // the arrow function above this is 99% synonymous
  // with a "function" keyword function. Prefer arrow functions.
  // span.addEventListener('click', function() {
  //   li.remove()
  // })

  li.appendChild(span)
  list.appendChild(li)
}