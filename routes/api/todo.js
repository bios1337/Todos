const Todos = require('../../models/Todo');
const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

// @route   GET api/todo
// @desc    Get all todos
// @access  Public
router.get('/', async (req, res) => {
	const todos = await Todos.find();
	return res.json(todos);
});

// @route   POST api/todo/add
// @desc    Add a todo
// @access  Public
router.post('/add', [ check('title', 'Title is required').not().isEmpty() ], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const { title, completed } = req.body;
	const todo = new Todos({
		title,
		completed
	});
	await todo.save();
	res.json(await Todos.find());
});

// @route   DELETE api/todo/delete/:id
// @desc    Delete a todo by id
// @access  Public
router.delete('/delete/:id', async (req, res) => {
	try {
		var my_del_query = { _id: req.params.id };
		await Todos.deleteOne(my_del_query);
		res.json(await Todos.find());
	} catch (error) {
		return res.status(400).json({ error: 'Server error' });
	}
});

// @route   PUT api/todo/:id
// @desc    Mark complete a todo by id
// @access  Public
router.put('/:id', async (req, res) => {
	try {
		const todo = await Todos.findById(req.params.id);
		if (!todo) {
			return res.status(404).json({ msg: 'Todo not found' });
		}
		todo.completed = !todo.completed;
		await todo.save();
		res.json(await Todos.find());
	} catch (error) {
		return res.status(400).json({ error: 'Server error' });
	}
});

module.exports = router;
