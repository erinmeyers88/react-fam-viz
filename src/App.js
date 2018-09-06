import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPerson: ''
    };
    this.getCurrentPerson = this.getCurrentPerson.bind(this);
  }

  componentDidMount() {

      this.getCurrentPerson();

  }

  getCurrentPerson() {
    let self = this;
    this.props.fs.get('/platform/tree/current-person', {
      followRedirect: true
    }, function(error, response){
      if(error) {
        console.log('error', error);
      }
      else {
        self.setState({currentPerson: response.data.persons[0].display})
      }
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {!this.state.currentPerson && <button onClick={() =>
        window.location = this.props.fs.oauthRedirectURL()
        }>Log In</button>}
        {this.state.currentPerson && <div>You are: {this.state.currentPerson.name}</div>}
      </div>
    );
  }
}

export default App;
