require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Location = require('./models/Location');

const app = express();
const locationRoutes = require('./routes/locationRoutes');

const port = process.env.PORT || 3000;

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(express.json()); //middleware to parse json bodies

app.use(express.urlencoded({extended: true})); // middleware to parse url encoded bodies )

app.use('/api', locationRoutes); //the routes with '/api' are the base path

app.get('/', (req, res) => res.send('MEAN Stack Running'));

app.listen(port, () => console.log(`Server running on port ${port}`));