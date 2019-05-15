import React, { Component } from 'react';

class UncontrolledWithRef extends Component {
  constructor(props) {
    super(props);
    this.state = {  }

    this.textInput = React.createRef()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    let text = this.textInput.current.value
    console.log('uncontrolled', text)
  }

  render() { 
    return <form onSubmit={(ev) => this.handleSubmit(ev)}>
      <input ref={this.textInput} type="text" />
      <input type="submit" />
    </form>
  }
}
 
export default UncontrolledWithRef;