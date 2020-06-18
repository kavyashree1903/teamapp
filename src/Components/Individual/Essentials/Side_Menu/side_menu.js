import React, {Component} from 'react'
import SideMenuButton from './side_menu_button/side_menu_button.js'


class SideMenu extends Component{
	constructor(){
		state = {

		}
		var buttonList = this.props.buttons.map((button) => { //this.props.buttons will each have unique onclick listeners
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