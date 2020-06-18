import React, {Component} from 'react'



class SideMenu extends Component{
	constructor(){
		state = {

		}
		var buttonList = this.props.buttons.map((button) => { //this.props.buttons will each have unique onclick listeners
			return (
				<li class="side-menu-button">
					<Button 
						text={button.name} 
						onClick={button.clicked}
					/>
					
				</li>
			)
		})
	}

	render(){
		return(
			<div class="side-menu">
				{buttonList}
			</div>
		)
	}
}

export default SideMenu