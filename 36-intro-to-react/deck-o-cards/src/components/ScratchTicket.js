import React, {Component, Fragment} from 'react'

// displays either winner or loser
// by flipping a Math.random() at some chance
class ScratchTicket extends Component {
  constructor() {
    super()

    let number = Math.random()
    this.state = {
      number: number,
      isWinner: number < .4
    }
  }

  displayResult() {
    if (this.state.isWinner) {
      return 'Winner!'
    } else {
      return 'Loser!'
    }
  }

  // we can't use an if statement
  // inside JSX because it has no
  // value when it's evaluated. if
  // statements just control the flow
  // of the program.
  // if (this.state.isWinner) {
  //   Winner!
  // } else {
  //   Loser!
  // }
  //
  // Instead of using an if statement we can
  // use ternary statements which actually
  // evaluate into things:
  // {this.state.isWinner ? 'Winner!' : 'Loser!'}
  render() {
    return (
      <div>
        <div>{this.state.number}:</div>
        <div>{this.displayResult()}</div>
      </div>
    )
  }

}

export default ScratchTicket