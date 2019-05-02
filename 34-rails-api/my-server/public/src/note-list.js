function getNotes() {
  fetch(URL)
  .then(res => res.json())
  .then(json => {
    console.log({json})
    renderNotes(json)
  })
}

function renderNotes(notes) {
  // delete everyhing currently in the list before adding new things
  clearNotes()
  notes.forEach(addNote)
}

function addNote(note) {
  let ul = document.getElementById('notes')
  note = new Note(note.id, note.title, note.content)
  ul.appendChild(note.render()) 
}

function clearNotes() {
  let ul = document.getElementById('notes')
  while (ul.firstChild) {
    ul.firstChild.remove()
  }
}

function attachFormListener() {
  let form = document.getElementById('note-form')
  form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    let title = ev.target.elements.title.value
    let content = ev.target.elements.content.value
    console.log('submitting:', title, content)
    createNote(title, content)
  })
}


function createNote(title, content) {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title, content})
  })
  .then(res => res.json())
  .then(json => {
    console.log('created note:', json)
    addNote(json)
  })
}
