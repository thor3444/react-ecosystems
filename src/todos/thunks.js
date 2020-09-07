import {
	loadTodosInProgress,
	loadTodosSuccess,
	loadTodosFailure,
} from "./actions.js";

export const loadTodos = () => async (dispatch, getState) => {
	try {
		dispatch(loadTodosInProgress());

		const response = await fetch("http://localhost:8080/todos-delay");
		const todos = await response.json();

		dispatch(loadTodosSuccess(todos));
	} catch (error) {
		dispatch(loadTodosFailure());
		dispatch(displayAlert(e));
	}
};

export const displayAlert = (text) => () => {
	alert(text);
};
