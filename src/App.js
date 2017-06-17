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
  render() {
    return (
      <div className="App">
        <Header/>
        <QuoteBox quotes={quotes} />
      </div>
    );
  }
}

export default App;
