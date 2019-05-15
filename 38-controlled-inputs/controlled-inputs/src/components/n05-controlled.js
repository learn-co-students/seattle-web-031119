import React, { Component } from 'react';

class ControlledMulti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      city: '',
      state: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(ev) {
    this.setState({name: ev.target.value})
  }

  handleCityChange(ev) {
    this.setState({city: ev.target.value})
  }

  handleStateChange(ev) {
    this.setState({state: ev.target.value})
  }

  handleSubmit(ev) {
    ev.preventDefault()
    console.log('controlled', this.state.text)
  }

  render() { 
    return <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        value={this.state.name}
        placeholder="name"
        onChange={this.handleNameChange}
      />
      <input
        type="text"
        value={this.state.city}
        placeholder="city"
        onChange={this.handleCityChange}
      />
      <input
        type="text"
        value={this.state.state}
        placeholder="state"
        onChange={this.handleStateChange}
      />
      Hello {this.state.name} from {' '}
      {this.state.city},{' '}
      {this.state.state}
      <input type="submit" />
    </form>
  }
}
 
export default ControlledMulti;