import React, {Component} from 'react'
import SideMenuButton from './SideMenuButton/SideMenuButton.js'
import './side_menu.css'

class SideMenu extends Component{
	constructor(props){
		super(props)
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
			<div className={this.props.stateClasses}>
				<div className="side-menu">
					{this.buttonList}
				</div>
			</div>
		)
	}
}

export default SideMenu