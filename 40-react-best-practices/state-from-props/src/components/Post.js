import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return <div>
      {this.props.post.title}
    </div>
  }
}
 
export default Post;