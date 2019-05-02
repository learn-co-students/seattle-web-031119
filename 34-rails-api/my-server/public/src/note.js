class Note {
  constructor(id, title, content) {
    this.id = id
    this.title = title
    this.content = content
  }

  delete(el) {
    fetch(URL + '/' + this.id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json)
    .then(json => {
      el.remove()
    })
  }

  render() {
    let li = document.createElement('li')
    let span = document.createElement('span')
    li.appendChild(span)

    li.textContent = this.title
    span.textContent = 'X'

    span.addEventListener('click', () => {
      this.delete(li)
    })

    return li
  }
}