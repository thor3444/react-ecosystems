import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {
	loadTodos,
	removeTodoRequest,
	markTodoAsCompletedRequest,
	markTodoAsNotCompletedRequest,
} from "./thunks.js";
import "./TodoList.css";
import { isLoading } from "./reducers";
import { getTodosLoading, getTodos } from "./selectors.js";

const TodoList = ({
	todos = [],
	onRemovePressed,
	onCompletedPressed,
	onUncompletedPressed,
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
				/>
			))}
		</div>
	);

	return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
	todos: getTodos(state),
	isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
	onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
	onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
	onUncompletedPressed: (id) => dispatch(markTodoAsNotCompletedRequest(id)),
	startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
