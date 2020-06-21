import React, {Component} from 'react';
import './App.css';
import SideMenu from './Components/Individual/Essentials/Side_Menu/side_menu.js'
import Navbar, {sideMenuClasses} from './Components/Individual/Essentials/Navbar/Navbar.js'

class App extends Component{
	constructor(){
		super()
		//write code for the slide in slide out animation
		//write code for blurring background when side menu is shown
	}

	render(){
		
		return(
			<React.Fragment>
				<Navbar hamburger-left={this.toggleLeftSideMenu} hamburger-right={this.toggleRightSideMenu} />
				<div className="container-app">
				</div>
			</React.Fragment>
		)
	}
}

export default App;
