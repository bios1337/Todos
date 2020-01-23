const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		default: false
	}
});

const Todos = mongoose.model('todos', todoSchema);

module.exports = Todos;
