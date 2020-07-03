import React, {Component} from 'react';
import "./Column.css";
class Column extends Component{
    render(){
        return(
    <div className="task-column">
       <div className="column-heading" style={{textAlign:"center"}}> <h2 className="heading">{this.props.heading}</h2> </div>
    </div>
        )
    }
}
export default Column;