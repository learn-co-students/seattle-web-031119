import React, { Component } from 'react';

class AlienForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1 // indicate that we're not using a valid Alien to begin with.
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.add = this.add.bind(this)
  }

  static getDerivedStateFromProps(props, prevState) {
    // only return this state using the props when
    // we switch from one alien to another alien.
    // otherwise, keep the state of this component just as it is.
    if (props.alien.id !== prevState.id) {
      return {
        id: props.alien.id,
        species: props.alien.species,
        homeplanet: props.alien.homeplanet,
        image_url: props.alien.image_url,
      }
    }
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleSubmit(ev) {
    console.log('submit')
    ev.preventDefault()
    this.props.updateAlien(this.state)
  }

  add() {
    console.log('form add')
    this.props.addAlien(this.state)
  }

  render() { 
    return <div>
      <form onSubmit={this.handleSubmit}>
        <div>
          Species:
          <input type="text" name="species"
                 value={this.state.species} onChange={this.handleChange} />
        </div>
        <div>
          Homeplanet:
          <input type="text" name="homeplanet"
                 value={this.state.homeplanet} onChange={this.handleChange} />
        </div>
        <div>
          Image Url:
          <input type="text" name="image_url"
                 value={this.state.image_url} onChange={this.handleChange} />
        </div>
        <div>
          <button onClick={this.add}>add</button>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  }
}
 
export default AlienForm;