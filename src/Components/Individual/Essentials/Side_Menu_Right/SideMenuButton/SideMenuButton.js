import React, {Component} from 'react'
import './SideMenuButton.css';
class SideMenuButton extends Component{
	render(){
		return(
			<div className="container-side-menu-button">
				<div className="side-menu-button" onClick={this.props.onClick}>
					<p>{this.props.text}</p>
					<hr/>
				</div>
			</div>
		)
	}
}


export default SideMenuButton;