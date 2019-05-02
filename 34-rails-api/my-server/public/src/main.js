console.log('hello')
document.body.style.backgroundColor = 'goldenrod'

const URL = '/api/v1/notes'

function main() {
  attachFormListener()
  getNotes()
}

main()