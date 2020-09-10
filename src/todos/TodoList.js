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
import {
	getTodosLoading,
	getTodos,
	getCompletedTodos,
	getIncompletedTodos,
} from "./selectors.js";

const TodoList = ({
	completedTodos,
	incompleteTodos,
	onRemovePressed,
	onCompletedPressed,
	onIncompletedPressed,
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
			<h3>Incomplete:</h3>
			{incompleteTodos.map((todo) => (
				<TodoListItem
					todo={todo}
					onRemovePressed={onRemovePressed}
					onCompletedPressed={onCompletedPressed}
					onIncompletedPressed={onIncompletedPressed}
					key={todo.id}
				/>
			))}

			<h3>Complete:</h3>
			{completedTodos.map((todo) => (
				<TodoListItem
					todo={todo}
					onRemovePressed={onRemovePressed}
					onCompletedPressed={onCompletedPressed}
					onIncompletedPressed={onIncompletedPressed}
					key={todo.id}
				/>
			))}
		</div>
	);

	return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
	completedTodos: getCompletedTodos(state),
	incompleteTodos: getIncompletedTodos(state),
	isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
	onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
	onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
	onIncompletedPressed: (id) => dispatch(markTodoAsNotCompletedRequest(id)),
	startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
