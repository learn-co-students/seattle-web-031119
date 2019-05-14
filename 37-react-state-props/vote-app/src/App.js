import React, {Component} from 'react';
import './App.css';

import css from './img/css.png'
import html from './img/html.png'
import javascript from './img/javascript.png'
import react from './img/react.jpg'
import ruby from './img/ruby.png'

import EntryForm from './components/EntryForm'
import ClickCounter from './components/ClickCounter'
import CurrentWinner from './components/CurrentWinner';

class App extends Component {
  constructor() {
    super()

    this.state = {
      votes: {},
      options: [
        {img: css, title: 'CSS'},
        {img: html, title: 'HTML'},
        {img: javascript, title: 'JavaScript'},
        {img: react, title: 'React'},
        {img: ruby, title: 'Ruby'},
      ]
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }

  increment(description) {
    console.log('increment', description)
    let votes = {...this.state.votes}
    if (votes[description] === undefined) {
      votes[description] = 0
    }

    votes[description]++
    this.setState({votes})
  }

  decrement(description) {
    console.log('decrement', description)
    let votes = {...this.state.votes}
    if (votes[description] === undefined) {
      votes[description] = 0
    }

    votes[description]--
    this.setState({votes})
 }

  reset = (description) => {
    console.log('reset', description)
    let votes = {...this.state.votes}
    votes[description] = 0

    this.setState({
      votes: votes
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Vote for your favorite!</h1>

          <EntryForm />

          <CurrentWinner
            votes={this.state.votes}
            choices={this.state.options}
          />

          {this.state.options.map(choice => {
            return <ClickCounter 
              key={choice.title}

              img={choice.img}
              description={choice.title}

              votes={this.state.votes}

              decrement={this.decrement}
              increment={this.increment}
              reset={this.reset}
            />
          })}
        </header>
      </div>
    )
  }
}

export default App;
