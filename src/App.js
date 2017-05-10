import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quotes/>
      </div>
    );
  }
}

var quotes = [{
  content: 'Frankly, my dear, I don\'t give a damn',
  film: 'Gone With The Wind',
}];

function newQuote() {
  var random = Math.floor(Math.random * quotes.length);
  console.log(quotes[random]);
  var time = new Date();
  console.log(time);
}

class Quotes extends React.Component {
  render() {
    return (
      <div className="quoteBox">
        <p className="time">{this.time}</p>
        <p>{quotes[this.random].content}</p>
        <p>- {quotes[this.random].film}</p>
        <button onClick={newQuote()}>New Quote</button>
      </div>

    )
  }
}

export default App;
