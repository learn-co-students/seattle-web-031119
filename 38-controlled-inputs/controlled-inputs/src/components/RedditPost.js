import React, { Component } from 'react';

function RedditPost(props) {
  return <div>
    <div>
      {props.post.data.title}
    </div>
    <div>
      {props.post.data.thumbnail ?
        <img src={props.post.data.thumbnail} />
        : null
      }
    </div>
  </div>
}
 
export default RedditPost;