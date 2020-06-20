import React, {Component} from 'react'
import SideMenuButton from './side_menu_button/side_menu_button.js'
import './side_menu.css'
import {sideMenuClasses} from '../Navbar/Navbar.js'

class SideMenu extends Component{
	constructor(props){
		super(props)
		this.state = {
			left: false,
			right: false
		}
		this.buttonList = this.props.buttons.map((button) => { //this.props.buttons will each have unique onclick listeners
			return (
				<div>
					<SideMenuButton 
						text={button.name} 
						onClick={button.clicked}
					/>
				</div>
			)
		})
	}

	render(){
		return(
			<div className={sideMenuClasses}>
				<div className="side-menu">
					{this.buttonList}
				</div>
			</div>
		)
	}
}

export default SideMenu