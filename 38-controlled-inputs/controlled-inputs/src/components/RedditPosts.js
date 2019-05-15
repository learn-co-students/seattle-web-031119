import React, { Component } from 'react';
import RedditPost from './RedditPost';

class RedditPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return <div>
      {this.props.posts.map(post => {
        return <RedditPost key={post.data.id} post={post} />
      })}
    </div>
  }
}
 
export default RedditPosts