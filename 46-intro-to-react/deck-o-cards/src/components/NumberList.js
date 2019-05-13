import React, {Component} from 'react'

class NumberList extends Component {
  constructor() {
    super()

    let numbers = []
    for (let i = 0; i < 10; i++) {
      numbers.push(Math.random())
    }

    this.state = {
      numbers: numbers
    }
  }

  render() {
    return <ul>
      {this.state.numbers.map(number => {
        return <li key={number}>
          {number}
        </li>
      })}
    </ul>
  }  
}

export default NumberList