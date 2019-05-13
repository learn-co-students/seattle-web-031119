import React, {Component} from 'react'
import './Card.css'

class Card extends Component {
  nameToSymbol() {
    let lookup = {
      spades:'♠',
      hearts: '♥',
      diamonds: '♦',
      clubs: '♣'
    }

    return lookup[this.props.suit]
  }


  suit() {
    let className = 'black'
    let symbol = this.nameToSymbol()
    if ('♥♦'.includes(symbol)) {
      className = 'red'
    }
    
    return <span className={className}>
      {this.props.face}
      {symbol}
    </span>
  }

  render() {
    return <div className="card">
      <div className="top-left">
        {this.suit()}
      </div>

      <div className="bot-right">
        {this.suit()}
      </div>
    </div>
  }
}

export default Card