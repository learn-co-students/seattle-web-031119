import React, { Component } from 'react';
import Post from './Post'

class Displayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    console.log('Displayer constructor')
  }

  static getDerivedStateFromProps(props, state) {
    return {results: props.results}
  }

  // componentWillReceiveProps(newProps, prevProps) {
  //   console.log('receiving new props')
  //   console.log('newProps', newProps)
  //   console.log('prevProps', prevProps)
  //   console.log('this.props', this.props)
  //   this.setState({results: newProps.results}) 
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('nextProps:', nextProps)
  //   if (this.state.results.length !== nextProps.results.length) {
  //     this.setState({results: nextProps.results})
  //     return true
  //   }
  //   return false
  // }

  render() { 
    console.log('Displayer render')
    return <div>
      {this.state.results.map(post => {
        return <Post key={post.id} post={post} />
      })}
    </div>
  }
}
 
export default Displayer;