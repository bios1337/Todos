const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		required: true
	}
});

const Todos = mongoose.model('todos', todoSchema);

module.exports = Todos;
