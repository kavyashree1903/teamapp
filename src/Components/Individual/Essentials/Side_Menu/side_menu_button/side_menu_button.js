import React from 'react'
import './side_menu_button.css';


const sideMenuButton = (props) => {
	return(
		<div className="side-menu-button" onClick={props.onClick}>
			<p>{props.text}</p>
			<hr/>
		</div>
	)
}