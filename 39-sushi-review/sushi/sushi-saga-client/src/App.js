import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      eatenSushis: [],
      budget: 100,
      numEaten: 0,
    }

    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({sushis})
    })

    this.isEaten = this.isEaten.bind(this)
    this.eatSushi = this.eatSushi.bind(this)
  }

  isEaten(sushi) {
    return this.state.eatenSushis.includes(sushi)
  }

  eatSushi(sushi) {
    if (this.isEaten(sushi)) return
    if (sushi.price > this.state.budget) return

    let eatenSushis = [...this.state.eatenSushis, sushi]
    this.setState({
      eatenSushis,
      numEaten: this.state.numEaten + 1,
      budget: this.state.budget - sushi.price
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          isEaten={this.isEaten}
          eatSushi={this.eatSushi}
        />
        <Table budget={this.state.budget} eatenSushis={this.state.eatenSushis} />
      </div>
    );
  }
}

export default App;