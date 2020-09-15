import React from "react";
import { hot } from "react-hot-loader";
import TodoList from "./todos/TodoList";
import styled from "styled-components";

const Wrapper = styled.div``;

const App = () => (
	<div className="App">
		<TodoList />
	</div>
);

export default hot(module)(App);
