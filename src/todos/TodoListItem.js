import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({
	todo,
	onRemovePressed,
	onCompletedPressed,
	onIncompletedPressed,
}) => (
	<div className="todo-item-container">
		<h3>{todo.text}</h3>
		<div className="buttons-container">
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
		</div>
	</div>
);

export default TodoListItem;
