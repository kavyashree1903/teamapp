import React from 'react';
import {Component} from 'react';
import "./Navbar.css";
class Navbar extends React.Component{
	render() {
		return (
			<div>
				<div id="nav">
					 <div className="container-navbar">
					 <img className="left-hamburger" src="https://ik.imagekit.io/m52sq26n4h/menu-white-18dp.svg"/>
					 <span><a className="app-title" href="#">WORC</a></span>
					 <img className="right-hamburger" src="https://ik.imagekit.io/m52sq26n4h/menu-white-18dp.svg"/>
					 </div>
				</div>
			</div>
		)
	}
}
export default Navbar;