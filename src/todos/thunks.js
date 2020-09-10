import {
	loadTodosInProgress,
	loadTodosSuccess,
	loadTodosFailure,
	createTodo,
	removeTodo,
	markTodoAsCompleted,
	markTodoAsNotCompleted,
} from "./actions.js";

export const loadTodos = () => async (dispatch, getState) => {
	try {
		dispatch(loadTodosInProgress());

		const response = await fetch("http://localhost:8080/todos");
		const todos = await response.json();

		dispatch(loadTodosSuccess(todos));
	} catch (error) {
		dispatch(loadTodosFailure());
		dispatch(displayAlert(e));
	}
};

export const addTodoRequest = (text) => async (dispatch) => {
	try {
		const body = JSON.stringify({ text });

		const response = await fetch("http://localhost:8080/todos", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "post",
			body,
		});
		const todo = await response.json();
		dispatch(createTodo(todo));
	} catch (error) {
		dispatch(displayAlert(error));
	}
};

export const removeTodoRequest = (id) => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:8080/todos/${id}`, {
			method: "delete",
		});

		const removedTodo = await response.json();
		dispatch(removeTodo(removedTodo));
	} catch (error) {
		dispatch(displayAlert(error));
	}
};

export const markTodoAsCompletedRequest = (id) => async (dispatch) => {
	try {
		const response = await fetch(
			`http://localhost:8080/todos/${id}/completed`,
			{
				method: "post",
			}
		);

		const updatedTodo = await response.json();
		dispatch(markTodoAsCompleted(updatedTodo));
	} catch (error) {
		dispatch(displayAlert(error));
	}
};

export const markTodoAsNotCompletedRequest = (id) => async (dispatch) => {
	try {
		const response = await fetch(
			`http://localhost:8080/todos/${id}/not-completed`,
			{
				method: "post",
			}
		);

		const updatedTodo = await response.json();
		dispatch(markTodoAsNotCompleted(updatedTodo));
	} catch (error) {
		dispatch(displayAlert(error));
	}
};

export const displayAlert = (text) => () => {
	alert(text);
};
