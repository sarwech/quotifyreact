import React, { Component } from 'react';
import './App.css';

class QuoteBox extends Component {
  render() {
    const quote = this.props.quote;
    return !quote ? <div /> : (
      <div className="quoteBox">
        <div id="quoteBox">
          <h1>{quote.content}</h1>
          <p>- {quote.film}</p>
        </div>
				<button onClick={() => this.props.onTweet()}>Tweet</button>
        <button onClick={() => this.props.onClick()}>New Quote</button>
        <hr/>
			  <p><a href="https://github.com/sarwech/mealplanner">Sarwech Shar</a></p>
      </div>
    );
  }
}

export default QuoteBox;
