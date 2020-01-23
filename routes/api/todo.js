import Todos from '../../models/Todo';
const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

router.get('/', async (req, res) => {
	const todos = await Todos.find();
	return res.json(todos);
});

router.post(
	'/add',
	[ check('title', 'Title is required').not().isEmpty(), check('completed', 'Status is required').isBoolean() ],
	async (req, res) => {
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
		return res.json(Todos.find());
	}
);

module.exports = router;
