import React, {Component} from 'react';
import './App.css';
import SideMenu from './Components/Individual/Essentials/Side_Menu/side_menu.js'

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
			},
			{
				name: "Button 1",
				clicked: () => console.log("Button 1 pressed") //will eventually change to interact with database
			},
			{
				name: "Button 1",
				clicked: () => console.log("Button 1 pressed") //will eventually change to interact with database
			},
			{
				name: "Button 1",
				clicked: () => console.log("Button 1 pressed") //will eventually change to interact with database
			},
			{
				name: "Button 1",
				clicked: () => console.log("Button 1 pressed") //will eventually change to interact with database
			},
			{
				name: "Button 1",
				clicked: () => console.log("Button 1 pressed") //will eventually change to interact with database
			}
		]
	}

	render(){
		return(
			<SideMenu buttons={this.sideMenuButtons} />
		)
	}
}

export default App;
