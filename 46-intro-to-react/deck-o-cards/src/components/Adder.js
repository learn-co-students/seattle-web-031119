import React, {Component} from 'react'

class Adder extends Component {
  render() {
    let n0 = Math.floor(Math.random() * 10)
    let n1 = Math.floor(Math.random() * 10)
    return <div>
      {n0} plus {n1} equals {n0 + n1}
    </div>
  }
}

export default Adder