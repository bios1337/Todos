import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {
	render() {
		return this.props.todos.map((todo) => (
			<TodoItem delTodo={this.props.delTodo} markComplete={this.props.markComplete} key={todo._id} todo={todo} />
		));
	}
}

// PropTypes Validation
Todos.propTypes = {
	todos: PropTypes.array.isRequired
};

export default Todos;
