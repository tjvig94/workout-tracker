const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});
