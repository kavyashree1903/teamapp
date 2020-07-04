import React, { Component } from "react";
import "./Column.css";
import TaskCard from "../Task_Card/TaskCard";
import {Droppable} from "react-beautiful-dnd";
import styled from 'styled-components'

const TaskList = styled.div`
padding:8px;`;


class Column extends Component {
  render() {
    return (
   <React.Fragment>
      <div className="task-column">
        <div className="column-heading">
          <p className="column-status">{this.props.heading}</p>
        </div>
        <Droppable droppableId={this.props.column.id}>
            {(provided) =>(

         <TaskList
              innerRef={provided.innerRef}
              {...provided.droppableProps}>
             {this.props.tasks.map((task,index) => <TaskCard key={task.id} task={task}
             index={index}/>)}
             {provided.placeholder}
         </TaskList>
            )}
        </Droppable>
      </div>
   </React.Fragment>
       );
  }
}
export default Column;
