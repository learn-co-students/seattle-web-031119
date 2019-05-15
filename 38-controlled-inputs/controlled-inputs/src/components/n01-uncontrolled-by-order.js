import React, { Component } from 'react';

class UncontrolledByOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleSubmit(ev) {
    ev.preventDefault()
    let text = ev.target.getElementsByTagName('input')[0].value
    console.log('uncontrolled', text)
  }

  render() { 
    return <form onSubmit={this.handleSubmit}>
      <input type="text" />
      <input type="submit" />
    </form>
  }
}
 
export default UncontrolledByOrder;