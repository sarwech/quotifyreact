import React from 'react';
import './App.css';

export const getTime = time => {
	let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
	let d = time.getDay();
	let h = time.getHours();
	let m = time.getMinutes();
	let s = time.getSeconds();
  let day = days[d];
	const hour = h < 10 ? h = `0${h}` : h;
  const min = m < 10 ? m = `0${m}` : m;
  const sec = s < 10 ? s = `0${s}` : s;
	return `${day} ${hour}:${min}:${sec}`;
};

export const Header = props => (
		<div className="Header">
			<h1>Random Quote Generator</h1>
			<h2>{getTime(props.time)}</h2>
		</div>
	)

export default Header;
