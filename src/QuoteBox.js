import React, { Component } from 'react';
import './App.css';


class QuoteBox extends Component {
  handleClick(e) {
    e.preventDefault();
    this.forceUpdate();
  }
  render() {
    const quotes = [{
      content: 'Frankly, my dear, I don\'t give a damn',
      film: 'Gone With The Wind'
    }, 
    {
      content: 'No frikkin way',
      film: 'Made Up'
    },
    {
      content: 'I\'m gonna make him an offer he can\'t refuse.',
      film: 'Godfather'
    },
    {
      content: 'You don\'t understand! I coulda had class. I coulda been a contender. I could\'ve been somebody, instead of a bum, which is what I am.',
      film: 'On The Waterfront'
    },
    {
      content: 'Toto, I\'ve a feeling we\'re not in Kansas anymore.',
      film: 'Wizard of Oz'
    },
    {
      content: 'Here\'s looking at you, kid.',
      film: 'Casablanca'
    },
    {
      content: 'Go ahead, make my day.',
      film: 'Sudden Impact'
    },
    {
      content: 'All right, Mr. DeMille, I\'m ready for my close-up.',
      film: 'Sunset Boulevard'
    },
    {
      content: 'May the Force be with you.',
      film: 'Star Wars'
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

export default QuoteBox;