import React, { Component } from 'react';
// import { Container } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    console.log(process.env);
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}
export default App;
