import React, {Component} from 'react'
import SideMenuButton from './side_menu_button/side_menu_button.js'
import './side_menu.css'


class SideMenu extends Component{
	constructor(){
		state = {

		}
		const buttonList = this.props.buttons.map((button) => { //this.props.buttons will each have unique onclick listeners
			return (
				<li>
					<SideMenuButton 
						text={button.name} 
						onClick={button.clicked}
					/>
				</li>
			)
		})
	}

	render(){
		return(
			<div className="side-menu">
				{buttonList}
			</div>
		)
	}
}

export default SideMenu