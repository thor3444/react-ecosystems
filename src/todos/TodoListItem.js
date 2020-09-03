import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({
	todo,
	onRemovePressed,
	onCompletedPressed,
	onUncompletedPressed,
	onTextPressed,
}) => (
	<div className="todo-item-container">
		<h3 onClick={() => onTextPressed(todo.text)}>{todo.text}</h3>
		<div className="buttons-container">
			{todo.isCompleted ? (
				<button
					className="uncompleted-button"
					onClick={() => onUncompletedPressed(todo.text)}
				>
					Mark as Uncompleted
				</button>
			) : (
				<button
					className="completed-button"
					onClick={() => onCompletedPressed(todo.text)}
				>
					Mark As Completed
				</button>
			)}
			<button
				className="remove-button"
				onClick={() => onRemovePressed(todo.text)}
			>
				Remove
			</button>
		</div>
	</div>
);

export default TodoListItem;
