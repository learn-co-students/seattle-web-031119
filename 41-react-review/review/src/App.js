import React from 'react';
import './App.css';
import AlienList from './components/AlienList';
import AlienForm from './components/AlienForm';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentAlien: {},
      isLoading: true,
      aliens: []
    }

    this.loadData()
    this.editAlien = this.editAlien.bind(this)
    this.updateAlien = this.updateAlien.bind(this)
    this.addAlien = this.addAlien.bind(this)
  }

  loadData() {
    fetch('http://localhost:3000/aliens')
    .then(res => res.json())
    .then(aliens => {
      this.setState({
        isLoading: false,
        aliens
      })
    })
  }

  editAlien(alien) {
    console.log('editing', alien)
    this.setState({currentAlien: alien})
  }

  updateAlien(newAlien) {
    let aliens = this.state.aliens.map(alien => {
      if (alien.id === newAlien.id) {
        return newAlien 
      }
      return alien
    })

    this.setState({aliens})
  }

  addAlien(alien) {
    console.log('app add')
    let aliens = [alien, ...this.state.aliens]
    this.setState({aliens})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.isLoading
            ? 'Loading...'
            : <>
              <AlienForm
                alien={this.state.currentAlien}
                updateAlien={this.updateAlien}
                addAlien={this.addAlien}
              />
              <AlienList aliens={this.state.aliens} editAlien={this.editAlien} />
            </>
          }
        </header>
      </div>
    );
  }
}

export default App;
