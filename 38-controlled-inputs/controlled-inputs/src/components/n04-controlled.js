import React, { Component } from 'react';

class Controlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(ev) {
    this.setState({text: ev.target.value})
  }

  handleSubmit(ev) {
    ev.preventDefault()
    console.log('controlled', this.state.text)
  }

  render() { 
    return <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        value={this.state.text}
        onChange={this.handleChange}
      />
      {this.state.text.length}
      <input type="submit" />
    </form>
  }
}
 
export default Controlled;