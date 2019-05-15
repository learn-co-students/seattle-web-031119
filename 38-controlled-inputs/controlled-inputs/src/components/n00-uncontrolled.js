import React, { Component } from 'react';

class Uncontrolled extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleSubmit(ev) {
    ev.preventDefault()
    let text = document.getElementById('textInput').value
    console.log('uncontrolled', text)
  }

  render() { 
    return <form onSubmit={this.handleSubmit}>
      <input id="textInput" type="text" />
      <input type="submit" />
    </form>
  }
}
 
export default Uncontrolled;