import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Individual/Essentials/Navbar/Navbar.js'


class App extends Component{
	constructor(){
		super()
		//write code for blurring background when side menu is shown
	}

	render(){
		return(
			<React.Fragment>
				<Navbar hamburger-left={this.toggleLeftSideMenu} hamburger-right={this.toggleRightSideMenu} />
				<div className="container-app">
					<h1>Lorem Ipsumkaejvoaehbcouebcouaybcuac</h1>
				</div>
			</React.Fragment>
		)
	}
}

export default App;
