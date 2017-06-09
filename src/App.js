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

const time = new Date();
console.log(time)

class Quotes extends React.Component {
  handleClick(e) {
    e.preventDefault();
    alert("Hi")
  }
  render() {
    const quotes = [{
      content: 'Frankly, my dear, I don\'t give a damn',
      film: 'Gone With The Wind'
      }, {
      content: 'No frikkin way',
      film: 'Made Up'
      }
    ];
    const each = quotes.map((quotes, index) => {
      return (
        <h1 key={index}>{quotes.content} - {quotes.film}</h1>
        )
    });
    const randomNum = Math.floor(Math.random()*quotes.length);
    console.log(randomNum);
    // const {quote} = this.state
    return (
      <div className="quoteBox">
        {each[randomNum]}
        <button onClick={this.handleClick}>New Quote</button>
      </div>
    )
  }
}

export default App;
