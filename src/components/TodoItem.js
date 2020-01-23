import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

export class TodoItem extends Component {
	getStyle = () => {
		return {
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		};
	};

	render() {
		const { title, _id, completed } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<Checkbox onChange={this.props.markComplete.bind(this, _id)} checked={completed} /> {title}
					<button onClick={this.props.delTodo.bind(this, _id)} style={btnStyle}>
						x
					</button>
				</p>
			</div>
		);
	}
}

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 9px',
	cursor: 'pointer',
	float: 'right'
};

// PropTypes Validation
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};

export default TodoItem;
