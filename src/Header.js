import React, { Component } from 'react';
import './App.css';
export const getTime = time => {
		let h = time.getHours();
		let m = time.getMinutes();
		let s = time.getSeconds();
		const hour = h < 10 ? h = `0${h}` : h;
	  const min = m < 10 ? m = `0${m}` : m;
	  const sec = s < 10 ? s = `0${s}` : s;
		return `Time is ${hour}:${min}:${s}`;
};

export const Header = props => (
		<div className="Header">
			<h1>{getTime(props.time)}</h1>
		</div>
	)

// class Header extends Component {

	// _addZero(i) {
	// 	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	// 	return i;
	// }
// 	render() {

// 		return (
// 			<div className="Header">
// 				<h1>{this._getTime()}</h1>
// 			</div>
// 			);
// 	};
// };

export default Header;