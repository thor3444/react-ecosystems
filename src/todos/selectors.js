import { createSelector } from "reselect";
import { createStore } from "redux";

export const getTodos = (state) => state.todos.data;
export const getTodosLoading = (state) => state.todos.isLoading;

export const getIncompletedTodos = createSelector(getTodos, (todos) =>
	todos.filter((todo) => !todo.isCompleted)
);

export const getCompletedTodos = createSelector(getTodos, (todos) =>
	todos.filter((todo) => todo.isCompleted)
);
