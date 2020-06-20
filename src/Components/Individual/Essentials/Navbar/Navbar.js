import React from 'react';
import {Component} from 'react';
import "./Navbar.css";
class Navbar extends React.Component{
	render() {
		return (
				<div>
					<ul id="nav">
					 <div className="container-navbar">
					 <img className="left-hamburger" src="https://ik.imagekit.io/m52sq26n4h/menu-white-18dp.svg"/>
					 <a className="app-title" href="#">WORC</a>
					 <img className="right-hamburger" src="https://ik.imagekit.io/m52sq26n4h/menu-white-18dp.svg"/>
					 </div>
					</ul>
				</div>
		)
	}
}
export default Navbar;