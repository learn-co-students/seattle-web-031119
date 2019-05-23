import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    username: ''
  }

  constructor() {
    super()
    this.username = React.createRef()
    this.password = React.createRef()

    if (this.getToken()) {
      this.getProfile()
    }
  }

  login = (ev) => {
    ev.preventDefault()

    let username = this.username.current.value
    let password = this.password.current.value

    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user:{username, password} })
    })
    .then(res => res.json())
    .then(json => {
      console.log('login:', json)
      if (json && json.jwt) {
        this.saveToken(json.jwt)
        this.getProfile()
      }
    })
  }

  getProfile = () => {
    let token = this.getToken()
    fetch('http://localhost:3000/api/v1/profile', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(res => res.json())
    .then(json => {
      console.log('profile:', json)
      this.setState({username: json.user.username})
    })
  }

  saveToken(jwt) {
    localStorage.setItem('jwt', jwt)
  }

  getToken(jwt) {
    return localStorage.getItem('jwt')
  }

  render() {
    return (
      <div className="App">
        <div>
          user: {this.state.username || 'logged out'}
        </div>
        <form onSubmit={this.login}>
          <input type="text" placeholder="username" ref={this.username} />
          <input type="password" placeholder="password" ref={this.password} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
