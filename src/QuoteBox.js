import React, { Component } from 'react';
import './App.css';


class QuoteBox extends Component {
	constructor(props) {
		super(props)
		this.state = { randomNum: this._getRandomNum() }
	}
	_getRandomNum() {
    return Math.floor(Math.random()*(this.props.quotes.length -1));
	}
	handleClickTweet() {
		window.location = `https://twitter.com/intent/tweet?text=${this.props.quotes[this._getRandomNum()].content}`;
	}
  handleClick(event) {
    this.setState({ randomNum: this._getRandomNum() })
  }
  render() {

    const quotes = this.props.quotes[this._getRandomNum()]
    return (
      <div className="quoteBox">
        <div id="quoteBox">
          <h1>{quotes.content}</h1>
          <p>- {quotes.film}</p>
        </div>
				<button onClick={this.handleClickTweet.bind(this)}>TWEET</button>
        <button onClick={this.handleClick.bind(this)}>New Quote</button>
      </div>
    );
  }
}

export default QuoteBox;