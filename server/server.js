const express = require('express');
const Location = require('./models/Location');
const locationRoutes = require('./routes/locationRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); //middleware to parse json bodies

app.use('/api', locationRoutes); //the routes with '/api' are the base path

app.get('/', (req, res) => res.send('MEAN Stack Running'));

app.listen(port, () => console.log(`Server running on port ${port}`));