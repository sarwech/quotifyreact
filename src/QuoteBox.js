import React, { Component } from 'react';
import './App.css';

class QuoteBox extends Component {
	// constructor(props) {
	// 	super(props)
	// }
	
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
      </div>
    );
  }
}

export default QuoteBox;