import {
	CREATE_TODO,
	REMOVE_TODO,
	MARK_TODO_AS_COMPLETE,
	MARK_TODO_AS_UNCOMPLETED,
	LOAD_TODOS_IN_PROGRESS,
	LOAD_TODOS_SUCCESS,
	LOAD_TODOS_FAILURE,
} from "./actions.js";

export const isLoading = (state = false, action) => {
	const { type } = action;

	switch (type) {
		case LOAD_TODOS_IN_PROGRESS:
			return true;
		case LOAD_TODOS_SUCCESS:
		case LOAD_TODOS_FAILURE:
			return false;
		default:
			return state;
	}
};

export const todos = (state = [], action) => {
	const { type, payload } = action;

	switch (type) {
		case CREATE_TODO: {
			const { text } = payload;
			const newTodo = {
				text,
				isCompleted: false,
			};
			return state.concat(newTodo);
		}
		case REMOVE_TODO: {
			const { text } = payload;
			return state.filter((todo) => todo.text !== text);
		}
		case MARK_TODO_AS_COMPLETE: {
			const { text } = payload;
			return state.map((todo) => {
				if (todo.text === text) {
					return {
						...todo,
						isCompleted: true,
					};
				} else {
					return todo;
				}
			});
		}
		case MARK_TODO_AS_UNCOMPLETED: {
			const { text } = payload;
			return state.map((todo) => {
				if (todo.text === text) {
					return {
						...todo,
						isCompleted: false,
					};
				} else {
					return { ...todo };
				}
			});
		}
		case LOAD_TODOS_IN_PROGRESS: {
		}
		default: {
			return state;
		}
	}
};
