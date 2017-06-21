import React, { Component } from 'react';
import './App.css';


class QuoteBox extends Component {
	constructor(props) {
		super(props)
	}
	// handleClickTweet() {
	// 	window.location = `https://twitter.com/intent/tweet?text=${this.props.quotes[this._getRandomNum()].content}`;
	// }
  render() {

    const quote = this.props.quote;
    return !quote ? <div /> : (
      <div className="quoteBox">
        <div id="quoteBox">
          <h1>{quote.content}</h1>
          <p>- {quote.film}</p>
        </div>
				<button onClick={this.handleClickTweet}>TWEET</button>
        <button onClick={() => this.props.onClick()}>New Quote</button>
      </div>
    );
  }
}

export default QuoteBox;