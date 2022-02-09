import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.pagecount }))
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/api');
    const body = await response.json();
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">nb of refresh : {this.state.data}</h1>
        </header>
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;