const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const routes = require('./routes');
const PORT = process.env.PORT || 8080;
const path = require('path');
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(require('./routes/apiRoutes'));
app.use(require('./routes/htmlRoutes'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});
