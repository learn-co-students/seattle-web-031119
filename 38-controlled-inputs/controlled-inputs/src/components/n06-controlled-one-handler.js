import React, { Component } from 'react';

class ControlledMultiOneHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      city: '',
      state: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(ev) {
    let keyName = ev.target.name
    let state = {}
    state[keyName] = ev.target.value

    this.setState(state)
  }

  handleSubmit(ev) {
    ev.preventDefault()
    console.log('controlled', this.state.text)
  }

  render() { 
    return <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        name="name"
        value={this.state.name}
        placeholder="name"
        onChange={this.handleChange}
      />
      <input
        type="text"
        name="city"
        value={this.state.city}
        placeholder="city"
        onChange={this.handleChange}
      />
      <input
        type="text"
        name="state"
        value={this.state.state}
        placeholder="state"
        onChange={this.handleChange}
      />
      Hello {this.state.name} from {' '}
      {this.state.city},{' '}
      {this.state.state}
      <input type="submit" />
    </form>
  }
}
 
export default ControlledMultiOneHandler;