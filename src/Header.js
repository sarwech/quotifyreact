import React, { Component } from 'react';
import './App.css';

class Header extends Component {
	render() {
		const time = new Date();
		const h = time.getHours();
		const m = time.getMinutes();
		const s = time.getSeconds();
		console.log(h);
		const now = `${h}:${m}:${s}`;

		return (
			<div className="Header">
				<h1>NEW - TWEET - {now}</h1>
			</div>
			);
	};
};

export default Header;