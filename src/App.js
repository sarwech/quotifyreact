import React, { Component } from 'react';
import Header from './Header';
import QuoteBox from './QuoteBox';
import './App.css';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      randomQuote: this._getQuote() 
    };
  }

  _getQuote() {
    this.setState( { quote: quotes[Math.floor(Math.random()*(quotes.length -1))] } );
  }

  _handleClickTweet() {
     window.location = `https://twitter.com/intent/tweet?text="${this.state.quote.content}"%20-%20${this.state.quote.film}`;
   }

  componentDidMount() {
    this._getQuote();
    setInterval(() => this.setState( { time: new Date() }), 1000)
  };

  render() {
    return (
      <div className="App">
        <Header time={this.state.time}/>
        <QuoteBox onClick={() => this._getQuote()} quote={this.state.quote} onTweet={() => this._handleClickTweet()} />
      </div>
    );
  }
}

export default App;
