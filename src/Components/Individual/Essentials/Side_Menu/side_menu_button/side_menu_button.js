import React from 'react'

const sideMenuButton = (props) => {
	return(
		<div className="side-menu-button" onClick={props.onClick}>
			<p>{props.text}</p>
			<hr/>
		</div>
	)
}