import React, {Component} from 'react'
import './task_card.css'
import styled from 'styled-components';
import {Draggable} from "react-beautiful-dnd";

const Container = styled.div`
margin-bottom:5vh;
border-radius:19px;
width:15.29vh;
height: 5.198vh;
text-align:center;
background:#FFFFFF;
box-shadow: 4px 7px 4px rgba(0, 0, 0, 0.5);
display:flex;
justify-content:center;
`;

class TaskCard extends Component{


	render(){
		return(
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
		)
	}
}
export default TaskCard;