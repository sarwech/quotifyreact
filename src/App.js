import React, { Component } from 'react';
import Header from './Header';
import QuoteBox from './QuoteBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <QuoteBox/>
      </div>
    );
  }
}

export default App;
