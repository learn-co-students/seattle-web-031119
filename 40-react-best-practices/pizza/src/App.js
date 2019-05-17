import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pizzas: [],
      currentPizza: {},
      isLoading: true
    }

    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => {
      setTimeout(() => {
        this.setState({pizzas, isLoading: false})
      }, 500)
    })

    this.setPizza = this.setPizza.bind(this)
    this.updatePizza = this.updatePizza.bind(this)
  }

  setPizza(pizza) {
    this.setState({currentPizza: pizza})
  }
  
  updatePizza(pizza) {
    let pizzas = this.state.pizzas.map(pazzo => {
      if (pizza.id === pazzo.id) {
        return pizza
      } else {
        return pazzo
      }
    })
    this.setState({pizzas})
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.currentPizza} updatePizza={this.updatePizza} />
        <center>
          {this.state.isLoading && "Loading..."}
        </center>
        {!this.state.isLoading && 
          <PizzaList
            pizzas={this.state.pizzas}
            editPizza={this.setPizza}
          />
        }
      </Fragment>
    );
  }
}

export default App;
