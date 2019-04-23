let pp = document.getElementById('intro-paragraph')
pp.textContent = 'My website has JavaScript!'

// Math.random() returns a decimal number 0.0-1.0
if (Math.random() < .5) {
  document.body.style.backgroundColor = 'red'
} else {
  document.body.style.backgroundColor = 'blue'
}

// create the ul manually and append it to body on the fly
// let ul = document.createElement('ul')
// document.body.appendChild(ul)

let ul = document.getElementById('number-list')
for (let i = 0; i < 10; i++) {
  let li = document.createElement('li')
  li.textContent = i
  ul.appendChild(li)
}

// name a type of HTML tag and get an array of all those tags back
// good for selecting divs, paragraphs, inputs
console.log('list items:', document.getElementsByTagName('li'))

// get an array of all elements matching a CSS rule
console.log('highlighted ps:', document.querySelectorAll('p.highlighted'))


// <div class="card">
//   <!-- ♠	♥	♦	♣ -->
//   <div class="top-left">A♥</div>
//   <div class="bot-right">A♥</div>
// </div>
function createCard() {
  let hand = document.getElementById('hand')

  let card = document.createElement('div')
  let topLeft = document.createElement('div')
  let botRight = document.createElement('div')

  card.classList.add('card')
  topLeft.classList.add('top-left')
  botRight.classList.add('bot-right')

  let face = randomFace()
  let suit = randomSuit()

  // either check individually, or put them in a new
  // string and see if suit is inside that string.
  // if (suit === '♥' || suit === '♦'))
  if ('♥♦'.includes(suit)) {
    card.classList.add('red')
  }

  topLeft.textContent = face + suit
  botRight.textContent = face + suit

  // it doesn't matter if we do this here
  hand.appendChild(card)

  card.appendChild(topLeft)
  card.appendChild(botRight)

  // or if we did it later here.
  // as long as everything is wired eventually!
  // hand.appendChild(card)
}

function randomFace() {
  let faces = '23456789JQKA'.split('')
  faces.push(10)
  return sample(faces)
}

function randomSuit() {
  let suits = ['♠', '♥', '♦', '♣']
  return sample(suits)
}

function sample(arr) {
  let index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function reportTime() {
  let now = new Date()
  console.log('now:', now)

  let time = document.getElementById('time')
  time.textContent = now
}

reportTime()
createCard()
