import React, { Component } from 'react';

class ClickCounter extends Component {
  render() {
    let votes = this.props.votes[this.props.description] || 0
    return <div className="choice">
      <img
        alt={this.props.description}
        src={this.props.img}
      />
      <div>
        ({votes}){' '}
        {this.props.description}{' '}
      </div>
      <div>
        <button onClick={() => this.props.decrement(this.props.description)}>
          -
        </button>
        <button onClick={() => this.props.reset(this.props.description)}>
          reset
        </button>
        <button onClick={() => this.props.increment(this.props.description)}>
          +
        </button>
      </div>
    </div>
  }
}

export default ClickCounter