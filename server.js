const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database

connectDB();

app.get('/', (req, res) => res.json({ msg: 'Hello to expence tracker app' }));

//Define routes

app.use('/api/users', require('./routes/users'));
app.use('/api/entries', require('./routes/entries'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
