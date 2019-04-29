const DOG_URL = 'http://localhost:3000/dogs'
let CURRENT_DOG = null
let CURRENT_ROW = null

document.addEventListener('DOMContentLoaded', () => {
  loadDogs()

  // attach the form submit listener, just once!
  const form = document.getElementById('dog-form')
  form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    handleSubmit(ev)
  })
})

function loadDogs() {
  // clear the entire list before
  // readding everything to it
  // to make sure it's not just
  // readded itself to itself.
  const dogList = document.getElementById('table-body')
  while (dogList.firstChild) {
    dogList.firstChild.remove()
  }

  fetch(DOG_URL)
  .then(res => res.json())
  .then(json => {
    displayDogs(json)
  })
}

// accept an array of dogs
function displayDogs(dogs) {
  dogs.forEach(dog => {
    addDogToPage(dog)
  })
}

// { "id": 1,
//   "name": "Baby",
//   "breed": "Scottish Deerhound",
//   "sex": "male" },
function addDogToPage(dog) {
  const table = document.getElementById('table-body')
  const row = document.createElement('tr')

  const name = document.createElement('td')
  const breed = document.createElement('td')
  const sex = document.createElement('td')
  const edit = document.createElement('td')

  name.textContent = dog.name
  breed.textContent = dog.breed
  sex.textContent = dog.sex

  const button = document.createElement('button')
  button.textContent = 'Edit Dog'

  row.appendChild(name)  
  row.appendChild(breed)  
  row.appendChild(sex)  
  row.appendChild(edit)  

  edit.appendChild(button)
  table.appendChild(row)

  button.addEventListener('click', () => {
    populateEditForm(dog, row)
  })
}

function populateEditForm(dog, row) {
  const form = document.getElementById('dog-form')

  CURRENT_DOG = dog
  CURRENT_ROW = row

  // we could get a reference to each input element by referencing it's
  // id, but we'll use form.elements['input-name'] instead
  form.elements['name'].value = dog.name
  form.elements['breed'].value = dog.breed
  form.elements['sex'].value = dog.sex
}

function handleSubmit(ev) {
  ev.preventDefault()

  fetch(DOG_URL + '/' + CURRENT_DOG.id, {
    method: 'PATCH' ,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: ev.target.elements['name'].value,
      breed: ev.target.elements['breed'].value,
      sex: ev.target.elements['sex'].value
    })
  })
  .then(res => res.json())
  .then(json => {
    reloadDogs()
  })
}

// update just the one row
function updateRow() {
  let tds = CURRENT_ROW.getElementsByTagName('td')
  tds[0].textContent = ev.target.elements['name'].value
  tds[1].textContent = ev.target.elements['breed'].value
  tds[2].textContent = ev.target.elements['sex'].value
}

// fetch all the dog info again and readd them all to the table
function reloadDogs() {
  loadDogs()
}

// refresh the entire page
// it's expensive to refresh the entire page
// also we lose our scroll position
// and the state of anything else we've typed on the page.
function refreshPage() {
  window.location.reload()
}