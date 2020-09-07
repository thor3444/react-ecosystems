import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {
	removeTodo,
	markTodoAsCompleted,
	markTodoAsUncompleted,
} from "./actions.js";
import { displayAlert, loadTodos } from "./thunks.js";
import "./TodoList.css";
import { isLoading } from "./reducers";

const TodoList = ({
	todos = [],
	onRemovePressed,
	onCompletedPressed,
	onUncompletedPressed,
	onDisplayAlertClicked,
	isLoading,
	startLoadingTodos,
}) => {
	useEffect(() => {
		startLoadingTodos();
	}, []);

	const loadingMessage = <div>Loading Todos...</div>;

	const content = (
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

	return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
	todos: state.todos,
	isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
	onRemovePressed: (text) => dispatch(removeTodo(text)),
	onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
	onUncompletedPressed: (text) => dispatch(markTodoAsUncompleted(text)),
	onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
	startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
