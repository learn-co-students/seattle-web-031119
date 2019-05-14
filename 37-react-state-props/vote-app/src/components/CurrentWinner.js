import React, { Component } from 'react';

class CurrentWinner extends Component {
  winner() {
    let winner = this.props.choices[0]
    let votes = this.props.votes[winner.title] || 0

    this.props.choices.forEach(choice => {
      if (this.props.votes[choice.title] > votes) {
        winner = choice
        votes = this.props.votes[choice.title]
      }
    })

    return winner
  }

  render() {
    let winner = this.winner()
    return <div>
      <h1>Current Winner</h1>
      <div>
        <img src={winner.img} />
        <div>
          {winner.title}
        </div>
      </div>
    </div>
  }
}

export default CurrentWinner