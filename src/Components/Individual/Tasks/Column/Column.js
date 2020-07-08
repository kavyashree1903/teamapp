import React, { Component } from "react";
import "./Column.css";
import TaskCard from "../Task_Card/TaskCard";
import styled from "styled-components";
import {Droppable} from "react-beautiful-dnd";

const TaskList = styled.div`
padding:8px;`;


class Column extends Component {
  render() {
    return (
      <div className="task-column">
        <div className="column-heading">
         <p className="column-status">{this.props.column.title}</p></div>
          <Droppable droppableId={this.props.column.id}>
              {(provided, snapshot) => (
                  <TaskList
                      innerRef={provided.innerRef}
                      {...provided.droppableProps}
                      isDraggingOver={snapshot.isDraggingOver}
                  >
                      {this.props.tasks.map((task, index) => (
                          <TaskCard key={task.id} task={task} index={index} />
                      ))}
                      {provided.placeholder}
                  </TaskList>
              )}
          </Droppable>
      </div>
       );
  }
}
export default Column;
