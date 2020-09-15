import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
	background: #f3f3f3;
	border-radius: 8px;
	margin-top: 8px;
	padding: 16px;
	position: relative;
`;

const ButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1em;

	button {
		flex-grow: 1;
		border: none;
		border-radius: 8px;
		padding: 8px;
		cursor: pointer;
		background-color: #fcfcfc;

		&:hover {
			background-color: #d3d3d3;
		}

		&.remove-button {
			color: #ff0000;
		}

		&.completed-button {
			color: #00dd00;
		}
	}
`;

const TodoListItem = ({
	todo,
	onRemovePressed,
	onCompletedPressed,
	onIncompletedPressed,
}) => (
	<TodoItemContainer>
		<h3>{todo.text}</h3>
		<ButtonsContainer>
			{todo.isCompleted ? (
				<button
					className="incompleted-button"
					onClick={() => onIncompletedPressed(todo.id)}
				>
					Mark as Incompleted
				</button>
			) : (
				<button
					className="completed-button"
					onClick={() => onCompletedPressed(todo.id)}
				>
					Mark As Completed
				</button>
			)}
			<button
				className="remove-button"
				onClick={() => onRemovePressed(todo.id)}
			>
				Remove
			</button>
		</ButtonsContainer>
	</TodoItemContainer>
);

export default TodoListItem;
