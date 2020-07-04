import React, {Component} from 'react'
import './calendar_dashboard.css'

class CalendarDashboard extends Component{
	render(){
		return(
			<div className="outer-container-dashboard">
	            <div className="background-for-dashboard">
	            	<div className="inner-container-for-calendar">
	            		<div onClick={this.expandDay}className="day-block">
	            			<p className="day-text" >Sunday</p>
	            		</div>
	            		<div onClick={this.expandDay}className="day-block">
	            			<p className="day-text" >Monday</p>
	            		</div>
	            		<div onClick={this.expandDay}className="day-block">
	            			<p className="day-text" >Tuesday</p>
	            		</div>
	            		<div onClick={this.expandDay}className="day-block">
	            			<p className="day-text" >Wednesday</p>
	            		</div>
	            		<div onClick={this.expandDay}className="day-block">
	            			<p className="day-text" >Thursday</p>
	            		</div>
	            		<div onClick={this.expandDay}className="day-block">
	            			<p className="day-text" >Friday</p>
	            		</div>
	            		<div onClick={this.expandDay}className="day-block">
	            			<p className="day-text" >Saturday</p>
	            		</div>
		            </div>    
	            </div>
	        </div>
        )

	}
}

export default CalendarDashboard