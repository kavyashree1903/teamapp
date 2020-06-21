import React from 'react';
import {Component} from 'react';
import './Navbar.css';
import SideMenuLeft from '../Side_Menu_Left/side_menu.js'
import SideMenuRight from '../Side_Menu_Right/side_menu.js'


var sideMenuClassesLeft = 'container-side-menu-left hide-left';
var sideMenuClassesRight = 'container-side-menu-right hide-right';
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
		this.sideMenuButtonsLeft = [
			{
				name: "Team 1",
				clicked: () => console.log("Team 1 clicked") //will eventually change to interact with database
			},
			{
				name: "Team 2",
				clicked: () => console.log("Team 2 Clicked") //will eventually change to interact with database
			}
		]
		this.sideMenuButtonsRight = [
			{
				name: "Schedule a Meeting",
				clicked: () => console.log("Meeting Scheduled") //will eventually change to interact with database
			},
			{
				name: "Assign a Task",
				clicked: () => console.log("Task Assigned") //will eventually change to interact with database
			}
		]//will be changed depending on which menu is clicked
	}
	leftSideMenuClick(currentState){
		if(currentState.left === true && currentState.right === false){//if left sidebar is open
			this.setState(
				{
					right: false,
					left: false
				}
			)//close left sidebar and update classes
			sideMenuClassesLeft = "container-side-menu-left hide-left"
			sideMenuClassesRight = "container-side-menu-right hide-right"
		}
		else{
			this.setState(
				{
					right: false,
					left: true
				}
			)//open left sidebar and update classes
			sideMenuClassesLeft = "container-side-menu-left show-left"
			sideMenuClassesRight = "container-side-menu-right hide-right"
			//add code to change buttons
		}
		
	}
	rightSideMenuClick(currentState){
		if(currentState.left === false && currentState.right === true){//if right sidebar is open
			this.setState(
				{
					right: false,
					left: false
				}
			)//clse right sidebar and update classes
			sideMenuClassesLeft = "container-side-menu-left hide-left"
			sideMenuClassesRight = "container-side-menu-right hide-right"
		}
		else{
			this.setState(
				{
					right: true,
					left: false
				}
			)//open right sidebar and update classes
			sideMenuClassesLeft = "container-side-menu-left hide-left"
			sideMenuClassesRight = "container-side-menu-right show-right"
			//add code to change buttons
		}
		
	}
	render() {
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
				 <SideMenuLeft stateClasses={sideMenuClassesLeft} buttons={this.sideMenuButtonsLeft}/>
				 <SideMenuRight stateClasses={sideMenuClassesRight} buttons={this.sideMenuButtonsRight}/>
			 </React.Fragment>
		)
	}
}
export default Navbar;
