import React, {Component} from 'react';
import './App.css';
import SideMenu from './Components/Individual/Essentials/Side_Menu/side_menu.js'
import Navbar from './Components/Individual/Essentials/Navbar/Navbar.js'

class App extends Component{
	constructor(){
		super()
		this.sideMenuButtons = [
			{
				name: "Button 1",
				clicked: () => console.log("Button 1 pressed") //will eventually change to interact with database
			},
			{
				name: "Button 2",
				clicked: () => console.log("Button 2 pressed") //will eventually change to interact with database
			}
		]
		//write code for left and right side menu on-click listeners
		//write code for the slide in slide out animation
		//write code for blurring background when side menu is shown
	}

	render(){
		return(
			<React.Fragment>
				<Navbar hamburger-left={this.toggleLeftSideMenu} hamburger-right={this.toggleRightSideMenu} />
				<div className="container-app">
					<SideMenu buttons={this.sideMenuButtons} />
				</div>
			</React.Fragment>
		)
	}
}

export default App;
