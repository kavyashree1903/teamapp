import React from 'react';
import {Component} from 'react';
import './Navbar.css';
import SideMenu from '../Side_Menu/side_menu.js'


var sideMenuClasses = 'container-side-menu hide-left';
class Navbar extends Component{
	constructor(props){
		super(props)
		this.offState = {
			right: false,
			left: false
		}
		this.leftState = {
			right: false,
			left: true
		}
		this.rightState = {
			right: true,
			left: false
		}
		this.state = {
			...this.offState
		}
		this.sideMenuButtons = [
			{
				name: "Button 1",
				clicked: () => console.log("Button 1 pressed") //will eventually change to interact with database
			},
			{
				name: "Button 2",
				clicked: () => console.log("Button 2 pressed") //will eventually change to interact with database
			}
		]//will be changed depending on which menu is clicked
	}
	leftSideMenuClick(currentState){
		if(currentState.left === true && currentState.right === false){
			this.setState(
				{
					right: false,
					left: false
				}
			)
			sideMenuClasses = "container-side-menu hide-left"
		}
		else{
			this.setState(
				{
					right: false,
					left: true
				}
			)
			sideMenuClasses = "container-side-menu left"
			//add code to change buttons
		}
		
	}
	rightSideMenuClick(currentState){
		if(currentState.left === false && currentState.right === true){
			this.setState(
				{
					right: false,
					left: false
				}
			)
			sideMenuClasses = "container-side-menu hide-right"
		}
		else{
			this.setState(
				{
					right: true,
					left: false
				}
			)
			sideMenuClasses = "container-side-menu right"
			//add code to change buttons
		}
		
	}
	render() {
		var sideMenu = <SideMenu stateClasses={sideMenuClasses} buttons={[]}/>
		return (
			<React.Fragment>
				<div>
					<div id="nav">
						 <div className="container-navbar">
						 <img className="left-hamburger" src="https://ik.imagekit.io/m52sq26n4h/menu-white-18dp.svg" onClick = {() => this.leftSideMenuClick(this.state)}/>
						 <span><a className="app-title" href="#">WORC</a></span>
						 <img className="right-hamburger" src="https://ik.imagekit.io/m52sq26n4h/menu-white-18dp.svg" onClick = {() => this.rightSideMenuClick(this.state)}/>
						 </div>
					</div>
				</div>
				 <SideMenu stateClasses={sideMenuClasses} buttons={this.sideMenuButtons}/>
			 </React.Fragment>
		)
	}
}
export default Navbar;
