import {
	CREATE_TODO,
	REMOVE_TODO,
	MARK_TODO_AS_COMPLETE,
	MARK_TODO_AS_UNCOMPLETED,
} from "./actions.js";

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
		default: {
			return state;
		}
	}
};
