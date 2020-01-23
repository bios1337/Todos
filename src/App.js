import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import axios from 'axios';

class App extends React.Component {
	state = {
		todos: []
	};

	componentDidMount() {
		axios.get('api/todo/', { crossdomain: true }).then((res) => this.setState({ todos: res.data }));
	}

	// Mark complete a todo
	markComplete = (id) => {
		axios.put(`api/todo/${id}`, { crossdomain: true }).then((res) => this.setState({ todos: res.data }));
	};

	// Delete a todo
	delTodo = (id) => {
		axios.delete(`api/todo/delete/${id}`, { crossdomain: true }).then((res) => this.setState({ todos: res.data }));
	};

	// Add a todo
	addTodo = (title) => {
		if (title === '') return;
		axios
			.post('api/todo/add', {
				title
			})
			.then((res) => this.setState({ todos: res.data }));
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
