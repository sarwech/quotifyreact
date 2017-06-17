import React, { Component } from 'react';
import './App.css';

class Header extends Component {
	_getTime() {
		const time = new Date();
		const h = time.getHours();
		const m = time.getMinutes();
		const s = time.getSeconds();
		const hour = this._addZero(h);
	  const min = this._addZero(m);
	  const sec = this._addZero(s);
		return `${hour}:${min}:${sec}`;
	}
	_addZero(i) {
		if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
		return i;
	}
	render() {

		return (
			<div className="Header">
				<h1>NEW - TWEET - {this._getTime()}</h1>
			</div>
			);
	};
};

export default Header;