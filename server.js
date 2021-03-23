const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

//Connect Database

connectDB();

//Init midleware
app.use(express.json({ extended: false }));

//Serve static assets in production

if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('/', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

//Define routes

app.use('/api/users', require('./routes/users'));
app.use('/api/entries', require('./routes/entries'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
