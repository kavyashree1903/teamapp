import React from 'react';
import {Component} from 'react';
import "./Navbar.css";

var sideMenuClasses = "";
var currentState;
class Navbar extends React.Component{
	constructor(props){
		super(props)
		this.sideMenuClasses = "container-side-menu hide"
		this.offState ={
			right: false,
			left: false
		}
		this.leftState ={
			right: false,
			left: true
		}
		this.rightState ={
			right: true,
			left: false
		}
		this.state = this.offState
	}
	leftSideMenuClick(currentState){
		if(currentState.left == true && currentState.right == false){
			this.setState(
				{
					right: false,
					left: false
				}
			)
			this.sideMenuClasses = "container-side-menu hide"//BT
		}
		else{
			this.setState(
				{
					right: false,
					left: true
				}
			)
			this.sideMenuClasses = "container-side-menu left"//BT
		}
		
	}
	rightSideMenuClick(currentState){
		if(currentState.left == false && currentState.right == true){
			this.setState(
				{
					right: false,
					left: false
				}
			)
			this.sideMenuClasses = "container-side-menu hide"//BT
		}
		else{
			this.setState(
				{
					right: true,
					left: false
				}
			)
			this.sideMenuClasses = "container-side-menu right"//BT
		}
		
	}
	render() {
		sideMenuClasses = this.sideMenuClasses
		currentState = this.state
		return (
			<div>
				<div id="nav">
					 <div className="container-navbar">
					 <img className="left-hamburger" src="https://ik.imagekit.io/m52sq26n4h/menu-white-18dp.svg" onClick = {(currentState) => this.leftSideMenuClick(currentState)}/>
					 <span><a className="app-title" href="#">WORC</a></span>
					 <img className="right-hamburger" src="https://ik.imagekit.io/m52sq26n4h/menu-white-18dp.svg" onClick = {(currentState) => this.rightSideMenuClick(currentState)}/>
					 </div>
				</div>
			</div>
		)
	}
}
export default Navbar;
export {sideMenuClasses};