const express = require('express');
const connectDB = require('./config/db');
const app = express();

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(
	express.json({
		extended: false
	})
);

// Connect Routes
app.use('/api/todo', require('./routes/api/todo'));

app.get('/', (req, res) => res.send('API Running'));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
