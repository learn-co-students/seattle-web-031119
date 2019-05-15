import React, { Component } from 'react';

class UncontrolledWithName extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleSubmit(ev) {
    ev.preventDefault()
    let text = ev.target.elements['text'].value
    console.log('uncontrolled', text)
  }

  render() { 
    return <form onSubmit={this.handleSubmit}>
      <input name="text" type="text" />
      <input type="submit" />
    </form>
  }
}
 
export default UncontrolledWithName;