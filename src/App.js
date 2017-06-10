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
    this.forceUpdate();
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
        <div id="quoteBox">
          <h1 key="content_{index}">{quotes.content}</h1>
          <p key="film_{index}">- {quotes.film}</p>
        </div>
        )
    });
    const randomNum = Math.floor(Math.random()*quotes.length);
    console.log(randomNum);
    // const {quote} = this.state
    return (
      <div className="quoteBox">
        {each[randomNum]}
        <button onClick={this.handleClick.bind(this)}>New Quote</button>
      </div>
    );
  }
}

export default App;
