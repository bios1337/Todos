import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

class App extends React.Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'Take out the trash',
				completed: false
			},
			{
				id: 2,
				title: 'Dinner with wife',
				completed: false
			},
			{
				id: 3,
				title: 'Meeting with boss',
				completed: false
			}
		]
	};

	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	delTodo = (id) => {
		this.setState({ todos: [ ...this.state.todos.filter((todo) => todo.id !== id) ] });
	};

	addTodo = (title) => {
		if (title === '') return;
		const newTodo = {
			id: 4,
			title,
			completed: false
		};
		this.setState({ todos: [ ...this.state.todos, newTodo ] });
	};

	render() {
		return (
			<div className="App">
				<Header />
				<AddTodo addTodo={this.addTodo} />
				<Todos delTodo={this.delTodo} markComplete={this.markComplete} todos={this.state.todos} />
			</div>
		);
	}
}

export default App;
