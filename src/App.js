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
  film: 'Gone With The Wind'
  }, {
  content: 'No frikkin way',
  film: 'Made Up'
  }
];

var random = Math.floor(Math.random() * quotes.length);
console.log(random)
// var quotes = [
//   'Frankly, my dear, I don\'t give a damn',
//   'Gone With The Wind',
//   ];

class Quotes extends React.Component {
  _newQuote() {
    this.setState({
      quote: quotes[random]
    })
  }
  render() {
    const {quote} = this.state
    return (
      <div className="quoteBox">
        <p className="quotes">{quote.content}</p>
        <button onClick={() => this._newQuote()}>New Quote</button>
      </div>
    )
  }
}

export default App;
