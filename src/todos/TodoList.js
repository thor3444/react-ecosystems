import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {
	removeTodo,
	markTodoAsCompleted,
	markTodoAsUncompleted,
} from "./actions.js";
import { displayAlert } from "./thunks.js";
import "./TodoList.css";

const TodoList = ({
	todos = [],
	onRemovePressed,
	onCompletedPressed,
	onUncompletedPressed,
	onDisplayAlertClicked,
}) => (
	<div className="list-wrapper">
		<NewTodoForm />
		{todos.map((todo) => (
			<TodoListItem
				todo={todo}
				onRemovePressed={onRemovePressed}
				onCompletedPressed={onCompletedPressed}
				onUncompletedPressed={onUncompletedPressed}
				onTextPressed={onDisplayAlertClicked}
			/>
		))}
	</div>
);

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
	onRemovePressed: (text) => dispatch(removeTodo(text)),
	onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
	onUncompletedPressed: (text) => dispatch(markTodoAsUncompleted(text)),
	onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
